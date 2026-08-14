import Link from "next/link";
import { aiSigns } from "../lib/ai-signs";

export function EducationSection() {
  return (
    <div id="jak-poznat" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Jak poznat obrázek vytvořený AI?
      </h2>
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
        kombinovat vizuální kontrolu, AI detektor, původ obrázku a kontext.
      </p>
      <Link
        href="/jak-poznat-ai-obrazek"
        className="mt-4 inline-block text-sm font-semibold text-green-600 hover:underline"
      >
        Podrobný návod →
      </Link>
    </div>
  );
}
