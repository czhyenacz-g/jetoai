import Image from "next/image";

export function HeroVisual() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
      style={{ aspectRatio: "4 / 3" }}
    >
      <Image
        src="/images/hero-jetoai.webp"
        alt="AI generovaná ukázka Petra Fialy a Andreje Babiše při smíření, s popiskem upozorňujícím, že jde o AI"
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-contain"
      />
    </div>
  );
}
