import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů",
  description: "Jak JeToAI.cz zachází s daty návštěvníků.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Zásady ochrany osobních údajů
          </h1>
          <div className="space-y-4 text-gray-600">
            <p>
              JeToAI.cz v aktuální verzi nepřijímá, nezpracovává ani
              neukládá žádné obrázky ani tvrzení, která do formulářů na webu
              vložíte — fact-checking formulář zatím nic neodesílá.
            </p>
            <p>
              Pro základní anonymní statistiku návštěvnosti web používá
              Vercel Analytics. Volitelně může být zapnutý i GoatCounter.
              Žádná z těchto služeb nezpracovává obsah, který na webu
              vyplníte.
            </p>
            <p>
              Pokud kliknete na odkaz na externí AI detektor (např.
              Sightengine nebo Hive), opouštíte JeToAI.cz a řídíte se
              podmínkami a zásadami ochrany osobních údajů dané externí
              služby. Nad zpracováním dat na jejich straně nemáme kontrolu.
            </p>
            <p>
              S dotazy ohledně zpracování údajů se můžete obrátit na{" "}
              <a
                href="mailto:info@jetoai.cz"
                className="font-semibold text-green-600 hover:underline"
              >
                info@jetoai.cz
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
