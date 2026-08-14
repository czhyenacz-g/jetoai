type AdSize = "728x90" | "300x600" | "300x250";

const dimensions: Record<AdSize, { width: number; height: number }> = {
  "728x90": { width: 728, height: 90 },
  "300x600": { width: 300, height: 600 },
  "300x250": { width: 300, height: 250 },
};

type AdSlotProps = {
  size: AdSize;
  className?: string;
  label?: string;
};

// Vyhrazené místo pro budoucí reklamu — jen vizuální placeholder, žádná reklamní síť.
export function AdSlot({ size, className = "", label = "Reklama" }: AdSlotProps) {
  const { width, height } = dimensions[size];
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-amber-300 bg-amber-50 text-amber-700 ${className}`}
      style={{ maxWidth: width, aspectRatio: `${width} / ${height}` }}
    >
      <span className="text-xs font-medium">
        {label} · {width}×{height}
      </span>
    </div>
  );
}
