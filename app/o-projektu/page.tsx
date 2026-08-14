import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "O projektu",
  description:
    "Co je JeToAI.cz, proč vznikl a jak k ověřování obrázků a tvrzení přistupuje.",
};

export default function OProjektuPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            O projektu
          </h1>
          <div className="space-y-4 text-gray-600">
            <p>
              JeToAI.cz je jednoduchý český nástroj pro lidi, kteří narazí
              na podezřelý obrázek, příspěvek nebo tvrzení a chtějí zjistit,
              co a jak lze ověřit.
            </p>
            <p>
              Web nepředstírá, že umí s jistotou určit pravost obrázku. AI
              detekce je jen jedna indicie — proto JeToAI.cz kombinuje
              odkazy na externí AI detektory s praktickým návodem, jak
              ověřit zdroj, kontext a samotné tvrzení.
            </p>
            <p>
              Aktuální verze (V1) je záměrně jednoduchá: nepřijímá žádné
              uploady, nemá vlastní AI detekci ani fact-checking backend.
              Cílem je nejdřív ověřit, jestli je nástroj pro lidi užitečný,
              a teprve pak investovat do vlastní analýzy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
