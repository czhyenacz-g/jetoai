import Image from "next/image";
import Link from "next/link";
import { aiSigns } from "../lib/ai-signs";

export function EducationSection() {
  return (
    <div id="jak-poznat" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Jak poznat obrázek vytvořený AI?
      </h2>
      <div className="grid gap-8 lg:grid-cols-[1fr_220px] lg:items-start">
        <div>
          <p className="mb-5 text-sm text-gray-600">
            Moderní generátory jsou výrazně lepší než dřív — spoléhat jen na
            „spočítejte prsty“ už nestačí. Přesto si všímejte:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiSigns.map((sign) => (
              <div key={sign.title} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-green-50 text-green-600">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {sign.title}
                  </h3>
                  <p className="text-sm text-gray-600">{sign.text}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
            Tyto znaky postupně přestávají být spolehlivé. Důležitější je
            kombinovat vizuální kontrolu, AI detektor, původ obrázku a
            kontext.
          </p>
          <Link
            href="/jak-poznat-ai-obrazek"
            className="mt-4 inline-block text-sm font-semibold text-green-600 hover:underline"
          >
            Podrobný návod →
          </Link>
        </div>
        <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src="/images/priklad-pes-stin-kocky.webp"
              alt="Pes vrhající neobvyklý stín připomínající kočku"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 220px, 60vw"
              className="object-cover"
            />
          </div>
          <figcaption className="p-3">
            <p className="text-xs font-semibold text-gray-900">
              Všimli jste si něčeho zvláštního?
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Stín psa připomíná kočku. Podobné nesrovnalosti mohou být
              vodítkem — samy o sobě ale nejsou důkazem použití AI.
            </p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
