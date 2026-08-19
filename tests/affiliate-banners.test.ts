import { describe, expect, it, vi, beforeEach } from "vitest";
import type { RedakceMediaAsset } from "../app/lib/redakce";

vi.mock("../app/lib/redakce", () => ({
  getRedakceMediaCollection: vi.fn(),
}));

function asset(overrides: Partial<RedakceMediaAsset> = {}): RedakceMediaAsset {
  return {
    id: 1,
    url: "https://redakce.sokujiciodhaleni.cz/media/x.webp",
    width: 1774,
    height: 887,
    alt: null,
    caption: null,
    license: null,
    credit: null,
    rightsStatus: null,
    ...overrides,
  };
}

describe("getAffiliateBannerImage", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("returns the first image with its url/width/height", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ width: 1774, height: 887 })]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(image).toEqual({
      url: "https://redakce.sokujiciodhaleni.cz/media/x.webp",
      width: 1774,
      height: 887,
    });
  });

  it("returns null when the collection is empty (not-yet-created or empty banner collection)", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(image).toBeNull();
  });

  it("returns null when the asset is missing width/height (never crashes the banner)", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ width: null, height: null })]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(image).toBeNull();
  });
});
