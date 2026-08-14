import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { verificationSteps } from "../lib/verification-steps";

export const metadata: Metadata = {
  title: "Jak ověřit fotografii",
  description:
    "Postup, jak ověřit zdroj, kontext a pravdivost fotografie — nejen to, jestli je vytvořená pomocí AI.",
};

export default function JakOveritFotografiiPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold">Jak ověřit fotografii</h1>
          <p className="mb-8 text-gray-400">
            AI detektor je jen jedna indicie. Pravdivost fotografie a
            tvrzení, které ji doprovází, ověříte spolehlivěji kombinací
            více kroků.
          </p>

          <ol className="mb-10 space-y-6">
            {verificationSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-600 font-bold text-gray-900">
                  {i + 1}
                </span>
                <div>
                  <h2 className="font-semibold">{step.title}</h2>
                  <p className="text-sm text-gray-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mb-10 rounded-2xl border border-amber-600/40 bg-amber-950/20 p-6">
            <p className="text-sm text-gray-300">
              Ani skutečná, neupravená fotografie neznamená, že je tvrzení
              kolem ní pravdivé. Zdroj a kontext ověřujte odděleně od toho,
              jestli je obrázek AI generovaný.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/ai-detektory" className="text-amber-400 hover:underline">
              Vyzkoušet AI detektory →
            </Link>
            <Link
              href="/jak-poznat-ai-obrazek"
              className="text-amber-400 hover:underline"
            >
              Jak obrázek poznat i vizuálně →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
