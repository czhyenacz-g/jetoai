// Převzato z ct25.cz/fact-checker (app/lib/fact-checker.ts) — stejný malý
// princip, vědomě duplikovaný místo sdíleného balíčku. Žádný backend, žádné
// ukládání: jen sestavení vyhledávací URL z textu zadaného uživatelem.
export const FACT_CHECK_SITES = ["demagog.cz", "cedmohub.eu", "factcheck.afp.com"];
export const TRUSTED_SOURCES = ["irozhlas.cz", "ct24.ceskatelevize.cz", "denikn.cz", "seznamzpravy.cz"];

const GOOGLE_SEARCH_BASE = "https://www.google.com/search";

function buildGoogleQueryUrl(query: string): string {
  return `${GOOGLE_SEARCH_BASE}?${new URLSearchParams({ q: query }).toString()}`;
}

function withSites(query: string, sites: string[]): string {
  const siteFilter = sites.map((site) => `site:${site}`).join(" OR ");
  return `${query} (${siteFilter})`;
}

export function buildGoogleSearchUrl(query: string): string {
  return buildGoogleQueryUrl(query);
}

export function buildFactCheckUrl(query: string): string {
  return buildGoogleQueryUrl(withSites(query, FACT_CHECK_SITES));
}

export function buildTrustedSourcesUrl(query: string): string {
  return buildGoogleQueryUrl(withSites(query, TRUSTED_SOURCES));
}

export function buildOriginalSourceUrl(query: string): string {
  return buildGoogleQueryUrl(`${query} zdroj dokument oficiální`);
}
