// Konfigurace affiliate bannerů — jedno místo pro slug whitelistované Media
// Collection redakce (viz app/lib/redakce.ts), cílovou affiliate URL a alt
// text. Nový banner = nová položka v tomhle objektu, ne nová komponenta
// (viz app/components/AffiliateBanner.tsx).
export type AffiliateBannerId = "dyson";

export interface AffiliateBannerConfig {
  collectionSlug: string;
  targetUrl: string;
  alt: string;
}

export const AFFILIATE_BANNERS: Record<AffiliateBannerId, AffiliateBannerConfig> = {
  dyson: {
    collectionSlug: "je-to-ai-reklama",
    // Dognet tracking URL — chid/d1/d2/url nikdy neměnit.
    targetUrl:
      "https://go.dognet.com/?chid=VxlNoUll&d1=Jetoai&d2=Banner&url=https%3A%2F%2Fwww.dyson.cz%2Fprodukty%2Fpece-o-vlasy",
    alt: "Reklama Dyson: Umělá inteligence vlasy neučeše, Dyson ano. Chytrá technologie pro krásné vlasy — Airwrap, Airstrait, Supersonic. Partnerský odkaz.",
  },
};
