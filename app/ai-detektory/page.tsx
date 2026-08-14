import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { DetectorList } from "../components/DetectorList";

export const metadata: Metadata = {
  title: "AI detektory obrázků",
  description:
    "Přehled externích nástrojů, které se pokouší poznat, zda byl obrázek vytvořen pomocí AI.",
};

export default function AiDetektoryPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            AI detektory obrázků
          </h1>
          <p className="mb-8 text-gray-600">
            Níže najdete externí nástroje, které se pokouší rozpoznat, jestli
            byl obrázek vytvořený nebo upravený pomocí AI. Po kliknutí
            opouštíte JeToAI.cz — nahráváte obrázek přímo dané službě a
            řídíte se jejími podmínkami. JeToAI.cz obrázky nezpracovává ani
            neukládá.
          </p>

          <DetectorList />

          <div className="my-10 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="mb-2 font-semibold text-amber-700">
              AI detekce je indicie, ne důkaz
            </h2>
            <p className="text-sm text-gray-700">
              Nízké AI skóre neznamená, že je fotografie pravá. Vysoké AI
              skóre samo o sobě není definitivní důkaz. Detektory mohou mít
              false positive i false negative výsledky a nový generátor
              nemusí rozpoznat vůbec.
            </p>
          </div>

          <Link
            href="/jak-poznat-ai-obrazek"
            className="text-sm font-semibold text-green-600 hover:underline"
          >
            Jak obrázek poznat i vizuálně →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
