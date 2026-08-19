import { getRedakceMediaCollection } from "./redakce";

export interface AffiliateBannerImage {
  url: string;
  width: number;
  height: number;
}

export type AffiliateBannerVariant = "wide" | "thin";

/**
 * Vybere obrázek z whitelistované Media Collection redakce podle varianty
 * — reuse stejné server-only cesty jako /odhaleno (app/lib/redakce.ts),
 * žádný nový media mechanismus. Veřejné API redakce nevrací originalName
 * ani žádný jiný popisný štítek assetu, takže výběr "tenký vs. široký"
 * jde jen podle poměru stran: nejvyšší width/height poměr = nejužší
 * (nejvíc horizontální, "thin") dostupný obrázek, nejnižší = "wide".
 * Při jediném obrázku v kolekci vrátí stejný obrázek pro obě varianty.
 * Chybějící/nedostupná kolekce nebo obrázek bez rozměrů vrátí null —
 * banner se pak jen tiše nevykreslí, nikdy nesmí shodit stránku.
 */
export async function getAffiliateBannerImage(
  collectionSlug: string,
  variant: AffiliateBannerVariant = "wide"
): Promise<AffiliateBannerImage | null> {
  const assets = await getRedakceMediaCollection(collectionSlug);
  const candidates = assets
    .filter((asset) => asset.width && asset.height)
    .map((asset) => ({ url: asset.url, width: asset.width as number, height: asset.height as number }));

  if (candidates.length === 0) return null;

  const sortedByRatioDesc = [...candidates].sort((a, b) => b.width / b.height - a.width / a.height);

  return variant === "thin" ? sortedByRatioDesc[0] : sortedByRatioDesc[sortedByRatioDesc.length - 1];
}
