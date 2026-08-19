import { describe, expect, it } from "vitest";
import { AFFILIATE_BANNERS } from "../app/config/affiliate-banners";

describe("AFFILIATE_BANNERS — dyson", () => {
  const dyson = AFFILIATE_BANNERS.dyson;

  it("uses the exact required Dognet tracking URL, untouched", () => {
    expect(dyson.targetUrl).toBe(
      "https://go.dognet.com/?chid=VxlNoUll&d1=Jetoai&d2=Banner&url=https%3A%2F%2Fwww.dyson.cz%2Fprodukty%2Fpece-o-vlasy"
    );
  });

  it("keeps chid/d1/d2/url query params exactly as specified", () => {
    const url = new URL(dyson.targetUrl);
    expect(url.searchParams.get("chid")).toBe("VxlNoUll");
    expect(url.searchParams.get("d1")).toBe("Jetoai");
    expect(url.searchParams.get("d2")).toBe("Banner");
    expect(url.searchParams.get("url")).toBe("https://www.dyson.cz/produkty/pece-o-vlasy");
  });

  it("points at the je-to-ai-reklama media collection", () => {
    expect(dyson.collectionSlug).toBe("je-to-ai-reklama");
  });
});
