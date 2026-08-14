import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ToolCard } from "./components/ToolCard";
import { WarningBox } from "./components/WarningBox";
import { EducationSection } from "./components/EducationSection";
import { VerificationSteps } from "./components/VerificationSteps";
import { DetectorList } from "./components/DetectorList";
import { FactCheckSection } from "./components/FactCheckSection";
import { FAQ } from "./components/FAQ";
import { AdSlot } from "./components/AdSlot";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="px-4 pb-4">
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <ToolCard
              title="Je obrázek vytvořený AI?"
              description="AI detektory mohou v obrázku hledat známky generování umělou inteligencí. Výsledek ale není důkaz a jednotlivé nástroje se mohou mýlit."
              ctaLabel="Ověřit obrázek"
              href="#ai-detektory"
            />
            <ToolCard
              title="Je to pravda?"
              description="Máte podezřelý příspěvek, zprávu nebo tvrzení? Ověřte jeho obsah odděleně od toho, zda byl použitý obrázek vytvořen pomocí AI."
              ctaLabel="Ověřit tvrzení"
              href="#fact-check"
            />
          </div>
        </section>

        <WarningBox />

        <AdSlot id="homepage-after-warning" />

        <EducationSection />
        <VerificationSteps />

        <section id="ai-detektory" className="px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-2 text-2xl font-bold">AI detektory</h2>
            <p className="mb-6 max-w-2xl text-gray-400">
              Nástroje níže jsou externí služby — po kliknutí opouštíte
              JeToAI.cz a řídíte se podmínkami dané služby.
            </p>
            <DetectorList />
          </div>
        </section>

        <FactCheckSection />

        <AdSlot id="homepage-before-faq" />

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
