import Link from "next/link";
import { aiSigns } from "../lib/ai-signs";

export function EducationSection() {
  return (
    <section className="bg-gray-800/40 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-3 text-2xl font-bold">
          Jak poznat obrázek vytvořený AI?
        </h2>
        <p className="mb-4 text-gray-400">
          Moderní generátory jsou výrazně lepší než dřív — spoléhat jen na
          „spočítejte prsty“ už nestačí. Přesto si všímejte:
        </p>
        <ul className="mb-4 grid gap-2 text-sm text-gray-300 sm:grid-cols-2">
          {aiSigns.map((sign) => (
            <li key={sign.title} className="flex gap-2">
              <span className="text-amber-400">•</span>
              {sign.title}
            </li>
          ))}
        </ul>
        <p className="mb-4 text-sm text-gray-400">
          Tyto znaky postupně přestávají být spolehlivé. Důležitější je
          kombinovat vizuální kontrolu, AI detektor, původ obrázku a kontext.
        </p>
        <Link
          href="/jak-poznat-ai-obrazek"
          className="text-sm font-semibold text-amber-400 hover:underline"
        >
          Podrobný návod →
        </Link>
      </div>
    </section>
  );
}
