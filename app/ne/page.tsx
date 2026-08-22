import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AffiliateBanner } from "../components/AffiliateBanner";
import { AiVerdictHero } from "../components/AiVerdictHero";

// Kořenový layout aplikuje title template "%s | JeToAI.cz" (viz
// app/layout.tsx) — `title` proto musí být bez suffixu, jinak se
// "JeToAI.cz" v <title> zdvojí. Pro OG/Twitter (kam se template
// neaplikuje) používáme plný název se suffixem zvlášť.
const TITLE = "NE. Není to AI.";
const SOCIAL_TITLE = "NE. Není to AI. | JeToAI.cz";
const DESCRIPTION =
  "Ne. Tento obsah podle dostupných informací není vytvořený pomocí umělé inteligence. JeToAI.cz";
const URL = "https://jetoai.cz/ne";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "JeToAI.cz",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
  },
};

export default function NePage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center">
        <div className="w-full max-w-md px-4 pt-8">
          <AffiliateBanner id="dyson" variant="thin" />
        </div>
        <AiVerdictHero
          word="NE"
          subtitle="Není to AI."
          explanation="To, co je s tímto odkazem sdílené, podle dostupných informací není vytvořené pomocí umělé inteligence."
        />
        <div className="w-full max-w-md px-4 pb-8">
          <AffiliateBanner id="dyson" />
        </div>
      </main>
      <Footer />
    </>
  );
}
