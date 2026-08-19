import { getRedakceMediaCollection } from "./redakce";

export interface AffiliateBannerImage {
  url: string;
  width: number;
  height: number;
}

/**
 * První obrázek z whitelistované Media Collection redakce — reuse stejné
 * server-only cesty jako /odhaleno (app/lib/redakce.ts), žádný nový media
 * mechanismus. Chybějící/nedostupná kolekce nebo obrázek bez rozměrů vrátí
 * null — banner se pak jen tiše nevykreslí, nikdy nesmí shodit stránku.
 */
export async function getAffiliateBannerImage(collectionSlug: string): Promise<AffiliateBannerImage | null> {
  const assets = await getRedakceMediaCollection(collectionSlug);
  const image = assets[0];

  if (!image || !image.width || !image.height) return null;

  return { url: image.url, width: image.width, height: image.height };
}
