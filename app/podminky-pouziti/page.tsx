import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Podmínky použití",
  description: "Za jakých podmínek můžete JeToAI.cz používat.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Podmínky použití
          </h1>
          <div className="space-y-4 text-gray-600">
            <p>
              JeToAI.cz je informační nástroj. Odkazy na AI detektory a
              popsané postupy ověřování slouží jako pomoc při orientaci v
              podezřelém obsahu — nejsou to definitivní verdikty o pravosti
              obrázku nebo pravdivosti tvrzení.
            </p>
            <p>
              Výsledky externích AI detektorů nejsou vlastnictvím ani
              odpovědností JeToAI.cz — jde o služby třetích stran, pro
              které platí jejich vlastní podmínky použití.
            </p>
            <p>
              Obsah webu se snažíme udržovat aktuální a přesný, ale
              nemůžeme zaručit, že je vždy úplný nebo bezchybný. Web
              používáte na vlastní odpovědnost.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
