import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { GOATCOUNTER_CODE } from "./config/analytics";

const SITE_TITLE = "JeToAI.cz – Jak poznat obrázek vytvořený AI";
const SITE_DESCRIPTION =
  "Zjistěte, jak rozpoznat obrázky vytvořené umělou inteligencí, vyzkoušejte AI detektory a ověřte také původ, kontext a tvrzení spojená s fotografií.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jetoai.cz"),
  title: {
    default: SITE_TITLE,
    template: "%s | JeToAI.cz",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://jetoai.cz",
    siteName: "JeToAI.cz",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  // Seznam Webmaster Tools — ověření vlastnictví domény.
  other: { "seznam-wmt": "5q73B5HG2lxCM4uAXIye7zp9HGtgV86Q" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body className="bg-white text-gray-900 antialiased">
        {children}
        <Analytics />
        {GOATCOUNTER_CODE && (
          <Script
            data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
            src="//gc.zgo.at/count.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
