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

  it("returns the only image for both variants when the collection has a single asset", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ width: 1774, height: 887 })]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const wide = await getAffiliateBannerImage("je-to-ai-reklama", "wide");
    const thin = await getAffiliateBannerImage("je-to-ai-reklama", "thin");

    expect(wide).toEqual({ url: "https://redakce.sokujiciodhaleni.cz/media/x.webp", width: 1774, height: 887 });
    expect(thin).toEqual(wide);
  });

  it("picks the most elongated (highest width/height) asset for variant='thin'", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([
      asset({ id: 68, url: "https://x/wide.webp", width: 1774, height: 887 }), // ratio ~2:1
      asset({ id: 69, url: "https://x/thin.webp", width: 2172, height: 724 }), // ratio ~3:1
    ]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const thin = await getAffiliateBannerImage("je-to-ai-reklama", "thin");

    expect(thin).toEqual({ url: "https://x/thin.webp", width: 2172, height: 724 });
  });

  it("picks the least elongated (lowest width/height) asset for variant='wide' (default)", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([
      asset({ id: 69, url: "https://x/thin.webp", width: 2172, height: 724 }),
      asset({ id: 68, url: "https://x/wide.webp", width: 1774, height: 887 }),
    ]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const wide = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(wide).toEqual({ url: "https://x/wide.webp", width: 1774, height: 887 });
  });

  it("returns null when the collection is empty (not-yet-created or empty banner collection)", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(image).toBeNull();
  });

  it("ignores assets missing width/height when selecting a variant", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([
      asset({ id: 70, url: "https://x/broken.webp", width: null, height: null }),
      asset({ id: 68, url: "https://x/wide.webp", width: 1774, height: 887 }),
    ]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama", "thin");

    expect(image).toEqual({ url: "https://x/wide.webp", width: 1774, height: 887 });
  });

  it("returns null when no asset has both width and height", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ width: null, height: null })]);

    const { getAffiliateBannerImage } = await import("../app/lib/affiliate-banners");
    const image = await getAffiliateBannerImage("je-to-ai-reklama");

    expect(image).toBeNull();
  });
});
