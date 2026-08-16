import { getRedakceMediaCollection, type RedakceMediaAsset } from "./redakce";
import { JETOAI_REVEALED_COLLECTION_SLUG } from "../config/editorial";

export interface RevealItem {
  id: number;
  slug: string;
  imageUrl: string;
  width: number | null;
  height: number | null;
  alt: string;
  resultText: string | null;
}

const FALLBACK_ALT = "Kontrolovaný obrázek";

const DIACRITICS_PATTERN = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(input: string): string {
  return input
    .normalize("NFKD")
    .replace(DIACRITICS_PATTERN, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Deterministický veřejný slug pro jedno médium — v pořadí: explicitní
 * slug z redakce, title, filename (bez přípony), a jako poslední fallback
 * stabilní médium ID. Nikdy neodvozeno z description/caption (to je volný
 * text výsledku, ne identifikátor). V praxi zatím whitelistovaný veřejný
 * endpoint redakce (PublicMediaCollectionController) nevrací slug/title/
 * originalName, takže tenhle řetězec dnes reálně skončí vždy na ID — viz
 * report k tomuto úkolu. Funkce je připravená začít vracet hezčí sluggy
 * automaticky, jakmile redakce tahle pole doplní.
 */
export function resolveBaseSlug(input: {
  id: number;
  explicitSlug?: string | null;
  title?: string | null;
  filename?: string | null;
}): string {
  const candidates = [input.explicitSlug, input.title, input.filename];
  for (const candidate of candidates) {
    if (candidate) {
      const slug = slugify(candidate);
      if (slug) return slug;
    }
  }
  return String(input.id);
}

/** Kolidující base sluggy dostanou stabilní suffix (medium ID); pořadí vstupu výsledek neovlivní. */
export function dedupeSlugs(items: { id: number; baseSlug: string }[]): Map<number, string> {
  const counts = new Map<string, number>();
  for (const item of items) {
    counts.set(item.baseSlug, (counts.get(item.baseSlug) ?? 0) + 1);
  }

  const result = new Map<number, string>();
  for (const item of items) {
    const hasCollision = (counts.get(item.baseSlug) ?? 0) > 1;
    result.set(item.id, hasCollision ? `${item.baseSlug}-${item.id}` : item.baseSlug);
  }
  return result;
}

export function toRevealItems(assets: RedakceMediaAsset[]): RevealItem[] {
  const withBaseSlug = assets.map((asset) => ({
    asset,
    id: asset.id,
    baseSlug: resolveBaseSlug({ id: asset.id }),
  }));
  const slugs = dedupeSlugs(withBaseSlug);

  return withBaseSlug.map(({ asset, id }) => ({
    id,
    slug: slugs.get(id) ?? String(id),
    imageUrl: asset.url,
    width: asset.width,
    height: asset.height,
    alt: asset.alt?.trim() || FALLBACK_ALT,
    resultText: asset.caption?.trim() || null,
  }));
}

/** Jen položky aktuálně patřící do povolené whitelistované kolekce — nikdy nic jiného. */
export async function getRevealItems(): Promise<RevealItem[]> {
  const assets = await getRedakceMediaCollection(JETOAI_REVEALED_COLLECTION_SLUG);
  return toRevealItems(assets);
}

export async function getRevealItemBySlug(slug: string): Promise<RevealItem | null> {
  const items = await getRevealItems();
  return items.find((item) => item.slug === slug) ?? null;
}
