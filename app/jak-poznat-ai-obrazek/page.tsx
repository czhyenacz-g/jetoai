import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { aiSigns } from "../lib/ai-signs";

export const metadata: Metadata = {
  title: "Jak poznat obrázek vytvořený AI",
  description:
    "Praktický návod, jak si všimnout znaků AI generovaného obrázku — a proč tyto znaky nejsou spolehlivý důkaz.",
};

export default function JakPoznatAiObrazekPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold">
            Jak poznat obrázek vytvořený AI?
          </h1>
          <p className="mb-8 text-gray-400">
            Moderní generátory obrázků jsou čím dál lepší, takže staré rady
            jako „spočítejte prsty“ už často nefungují. Přesto existují
            znaky, kterých si můžete všimnout — berte je ale jako indicie,
            ne jako jistotu.
          </p>

          <div className="mb-10 space-y-6">
            {aiSigns.map((sign) => (
              <div key={sign.title}>
                <h2 className="mb-1 text-lg font-semibold">{sign.title}</h2>
                <p className="text-sm text-gray-400">{sign.text}</p>
              </div>
            ))}
          </div>

          <div className="mb-10 rounded-2xl border border-amber-600/40 bg-amber-950/20 p-6">
            <p className="text-sm text-gray-300">
              Tyto znaky postupně přestávají být spolehlivé, protože se
              generátory zlepšují. Nejlepší výsledek dostanete kombinací
              vizuální kontroly, AI detektoru, ověření původu obrázku a
              kontextu, ve kterém byl sdílený.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/ai-detektory" className="text-amber-400 hover:underline">
              Vyzkoušet AI detektory →
            </Link>
            <Link
              href="/jak-overit-fotografii"
              className="text-amber-400 hover:underline"
            >
              Jak fotografii ověřit lépe →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
