import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroVisual } from "./components/HeroVisual";
import { ToolCard } from "./components/ToolCard";
import { WarningBox } from "./components/WarningBox";
import { EducationSection } from "./components/EducationSection";
import { VerificationSteps } from "./components/VerificationSteps";
import { DetectorList } from "./components/DetectorList";
import { AiDetectorExample } from "./components/AiDetectorExample";
import { FactCheckSection } from "./components/FactCheckSection";
import { FAQ } from "./components/FAQ";
import { AffiliateBanner } from "./components/AffiliateBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 pb-10 pt-14">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Je to <span className="text-green-600">AI</span>?
              </h1>
              <p className="mt-4 max-w-lg text-lg text-gray-600">
                Narazili jste na podezřelý obrázek, příspěvek nebo tvrzení?
                Pomůžeme vám zjistit, co lze ověřit a jak.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <ToolCard
                  variant="primary"
                  title="Je obrázek vytvořený AI?"
                  description="AI detektory mohou v obrázku hledat známky generování umělou inteligencí. Výsledek ale není důkaz a jednotlivé nástroje se mohou mýlit."
                  ctaLabel="Ověřit obrázek"
                  href="#ai-detektory"
                />
                <ToolCard
                  variant="secondary"
                  title="Je to pravda?"
                  description="Máte podezřelý příspěvek, zprávu nebo tvrzení? Ověřte jeho obsah odděleně od toho, zda byl použitý obrázek vytvořen pomocí AI."
                  ctaLabel="Ověřit tvrzení"
                  href="#fact-check"
                />
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <div className="px-4 pb-10">
          <AffiliateBanner id="dyson" variant="thin" className="mx-auto max-w-3xl" />
        </div>

        <WarningBox />

        <section className="px-4 py-12">
          <div className="mx-auto max-w-3xl space-y-12">
            <EducationSection />
            <VerificationSteps />
          </div>
        </section>

        <div className="px-4 pb-4">
          <AffiliateBanner id="dyson" variant="thin" className="mx-auto max-w-3xl" />
        </div>

        <section className="border-t border-gray-200 bg-gray-50 px-4 py-12">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div id="ai-detektory" className="scroll-mt-24">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Vyzkoušejte AI detektory
              </h2>
              <AiDetectorExample />
              <DetectorList />
              <p className="mt-4 text-sm text-gray-500">
                Odkazy vedou na externí služby. JeToAI.cz neukládá ani
                nezpracovává vaše obrázky. Při nahrávání obrázků se řiďte
                podmínkami jednotlivých služeb.
              </p>
            </div>
            <FactCheckSection />
          </div>
        </section>

        <FAQ />

        <div className="px-4 py-10">
          <div className="mx-auto max-w-3xl">
            <AffiliateBanner id="dyson" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
