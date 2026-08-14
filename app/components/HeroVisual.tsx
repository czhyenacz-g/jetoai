// TODO: replace this placeholder with next/image once a final hero
// illustration exists (e.g. /public/images/hero-jetoai.webp).
export function HeroVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
      style={{ aspectRatio: "4 / 3" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-medium uppercase tracking-widest text-gray-300">
          Hero image
        </span>
      </div>
    </div>
  );
}
