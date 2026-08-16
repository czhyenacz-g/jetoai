// Server-only čtení whitelistovaného veřejného endpointu redakce
// ŠokujícíOdhalení (viz sokujici-redakce/docs/MEDIA_COLLECTIONS.md) — bez
// tokenu, jen pro explicitně vyjmenované kolekce. Nikdy nevolat z klientské
// komponenty. Stejný vzor jako ct25-cz/app/lib/posters.ts, aby JeToAI
// nesdílel EDITORIAL_API_TOKEN (ten do veřejně nasazeného webu nepatří —
// viz docs/MEDIA_COLLECTIONS.md v redakci).

const REDAKCE_BASE_URL = "https://redakce.sokujiciodhaleni.cz";

// Krátký revalidate: nový obrázek v redakci nemusí být online okamžitě,
// stačí v řádu minut. Žádný vlastní synchronizační systém ani kopie dat.
const REVALIDATE_SECONDS = 300;

export interface RedakceMediaAsset {
  id: number;
  url: string;
  width: number | null;
  height: number | null;
  alt: string | null;
  caption: string | null;
  license: string | null;
  credit: string | null;
  rightsStatus: string | null;
}

function toAbsoluteUrl(url: string): string {
  return url.startsWith("http") ? url : `${REDAKCE_BASE_URL}${url}`;
}

/**
 * Obrázky whitelistované veřejné kolekce. Prázdné pole při chybě, při
 * neexistující kolekci i při kolekci, která na straně redakce ještě není
 * whitelistovaná — stránka se nikdy nerozbije, jen nemá co zobrazit.
 */
export async function getRedakceMediaCollection(slug: string): Promise<RedakceMediaAsset[]> {
  try {
    const response = await fetch(
      `${REDAKCE_BASE_URL}/api/public/media-collections/${encodeURIComponent(slug)}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!response.ok) return [];

    const json = await response.json();
    if (!Array.isArray(json?.data)) return [];

    return json.data.map((raw: RedakceMediaAsset) => ({
      ...raw,
      url: toAbsoluteUrl(raw.url),
    }));
  } catch {
    return [];
  }
}
