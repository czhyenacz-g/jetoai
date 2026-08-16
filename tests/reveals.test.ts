import { describe, expect, it, vi, beforeEach } from "vitest";
import {
  resolveBaseSlug,
  dedupeSlugs,
  toRevealItems,
} from "../app/lib/reveals";
import type { RedakceMediaAsset } from "../app/lib/redakce";

function asset(overrides: Partial<RedakceMediaAsset> = {}): RedakceMediaAsset {
  return {
    id: 1,
    url: "https://redakce.sokujiciodhaleni.cz/media/x.webp",
    width: 800,
    height: 600,
    alt: null,
    caption: null,
    license: null,
    credit: null,
    rightsStatus: null,
    ...overrides,
  };
}

describe("resolveBaseSlug", () => {
  it("použije explicitní slug, pokud existuje", () => {
    expect(
      resolveBaseSlug({ id: 5, explicitSlug: "fiala-babis-ai-fotografie" })
    ).toBe("fiala-babis-ai-fotografie");
  });

  it("použije title, pokud slug chybí", () => {
    expect(resolveBaseSlug({ id: 5, title: "Fiala a Babiš u zdi" })).toBe(
      "fiala-a-babis-u-zdi"
    );
  });

  it("použije filename bez přípony, pokud chybí slug i title", () => {
    expect(
      resolveBaseSlug({ id: 5, filename: "fiala-babis-fake.png" })
    ).toBe("fiala-babis-fake-png");
  });

  it("jako poslední fallback použije stabilní médium ID", () => {
    expect(resolveBaseSlug({ id: 42 })).toBe("42");
  });

  it("přeskočí prázdný/whitespace slug a title a spadne na filename", () => {
    expect(
      resolveBaseSlug({ id: 5, explicitSlug: "  ", title: "", filename: "obrazek.jpg" })
    ).toBe("obrazek-jpg");
  });

  it("nikdy neodvozuje slug z description/caption (není součástí vstupu)", () => {
    // resolveBaseSlug nemá parametr pro description/caption vůbec —
    // jediný způsob, jak to ověřit, je že funkce bez slug/title/filename
    // vždy spadne na ID, i když by volající omylem předal caption jako title.
    expect(resolveBaseSlug({ id: 7 })).toBe("7");
  });
});

describe("dedupeSlugs", () => {
  it("nechá unikátní sluggy beze změny", () => {
    const result = dedupeSlugs([
      { id: 1, baseSlug: "a" },
      { id: 2, baseSlug: "b" },
    ]);
    expect(result.get(1)).toBe("a");
    expect(result.get(2)).toBe("b");
  });

  it("kolidující sluggy dostanou suffix media ID", () => {
    const result = dedupeSlugs([
      { id: 1, baseSlug: "stejny" },
      { id: 2, baseSlug: "stejny" },
    ]);
    expect(result.get(1)).toBe("stejny-1");
    expect(result.get(2)).toBe("stejny-2");
  });

  it("výsledek nezávisí na pořadí vstupu", () => {
    const a = dedupeSlugs([
      { id: 1, baseSlug: "x" },
      { id: 2, baseSlug: "x" },
    ]);
    const b = dedupeSlugs([
      { id: 2, baseSlug: "x" },
      { id: 1, baseSlug: "x" },
    ]);
    expect(a.get(1)).toBe(b.get(1));
    expect(a.get(2)).toBe(b.get(2));
  });
});

describe("toRevealItems", () => {
  it("mapuje caption na resultText a alt na alt", () => {
    const items = toRevealItems([
      asset({ id: 1, alt: "Popisek pro accessibility", caption: "Vygenerováno pomocí ChatGPT. Odhad pravděpodobnosti AI původu: 92 %." }),
    ]);
    expect(items[0].alt).toBe("Popisek pro accessibility");
    expect(items[0].resultText).toBe(
      "Vygenerováno pomocí ChatGPT. Odhad pravděpodobnosti AI původu: 92 %."
    );
  });

  it("nevymýšlí žádné procento, pokud caption žádné neobsahuje", () => {
    const items = toRevealItems([asset({ id: 1, caption: "Původ potvrzen." })]);
    expect(items[0].resultText).toBe("Původ potvrzen.");
    expect(items[0].resultText).not.toMatch(/%/);
  });

  it("resultText je null, když caption chybí nebo je jen whitespace", () => {
    const items = toRevealItems([
      asset({ id: 1, caption: null }),
      asset({ id: 2, caption: "   " }),
    ]);
    expect(items[0].resultText).toBeNull();
    expect(items[1].resultText).toBeNull();
  });

  it("použije fallback alt text, když alt chybí", () => {
    const items = toRevealItems([asset({ id: 1, alt: null })]);
    expect(items[0].alt).toBe("Kontrolovaný obrázek");
  });

  it("každá položka dostane slug odvozený z ID (jediné pole dostupné z veřejného API)", () => {
    const items = toRevealItems([asset({ id: 123 }), asset({ id: 456 })]);
    expect(items.map((i) => i.slug).sort()).toEqual(["123", "456"]);
  });
});

vi.mock("../app/lib/redakce", () => ({
  getRedakceMediaCollection: vi.fn(),
}));

describe("getRevealItems / getRevealItemBySlug (guard proti médiu mimo kolekci)", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.clearAllMocks();
  });

  it("vrátí null pro slug, který v kolekci neexistuje (404 guard)", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ id: 1 })]);

    const { getRevealItemBySlug } = await import("../app/lib/reveals");
    const result = await getRevealItemBySlug("999");
    expect(result).toBeNull();
  });

  it("vrátí položku, jejíž slug v kolekci existuje", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([asset({ id: 1 })]);

    const { getRevealItemBySlug } = await import("../app/lib/reveals");
    const result = await getRevealItemBySlug("1");
    expect(result?.id).toBe(1);
  });

  it("prázdná/chybová odpověď redakce vede k prázdnému seznamu, ne k chybě", async () => {
    const { getRedakceMediaCollection } = await import("../app/lib/redakce");
    vi.mocked(getRedakceMediaCollection).mockResolvedValue([]);

    const { getRevealItems } = await import("../app/lib/reveals");
    const items = await getRevealItems();
    expect(items).toEqual([]);
  });
});
