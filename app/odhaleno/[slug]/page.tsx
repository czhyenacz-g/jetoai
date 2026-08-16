import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { AdSlot } from "../../components/AdSlot";
import { getRevealItemBySlug } from "../../lib/reveals";

const SITE_URL = "https://jetoai.cz";
const PAGE_TITLE = "AI kontrola: Vygenerováno AI";
const FALLBACK_DESCRIPTION =
  "Obrázek označený v redakci JeToAI.cz jako vygenerovaný umělou inteligencí.";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getRevealItemBySlug(slug);

  if (!item) return {};

  const description = item.resultText || FALLBACK_DESCRIPTION;
  const url = `${SITE_URL}/odhaleno/${item.slug}`;
  const socialTitle = `${PAGE_TITLE} | JeToAI.cz`;

  return {
    title: PAGE_TITLE,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: "JeToAI.cz",
      locale: "cs_CZ",
      type: "article",
      images: [
        {
          url: item.imageUrl,
          width: item.width ?? undefined,
          height: item.height ?? undefined,
          alt: item.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export default async function RevealPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getRevealItemBySlug(slug);

  if (!item) notFound();

  return (
    <>
      <Header />
      <main className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            JeToAI.cz · AI kontrola
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Vygenerováno <span className="text-green-600">AI</span>
          </h1>

          <a
            href={item.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block overflow-hidden rounded-xl border border-gray-200"
          >
            <Image
              src={item.imageUrl}
              alt={item.alt}
              width={item.width || 1200}
              height={item.height || 1200}
              sizes="(max-width: 672px) 100vw, 672px"
              className="h-auto w-full"
              priority
            />
          </a>

          <section className="mt-8">
            <h2 className="mb-2 text-lg font-bold text-gray-900">Výsledek</h2>
            <p className="text-gray-700">
              {item.resultText ||
                "Detail k tomuto záznamu zatím nebyl v redakci doplněn."}
            </p>
          </section>

          <section className="mt-8 rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-600">
            <p>
              Tento záznam je součástí databáze JeToAI.cz. Popis výsledku
              vychází z informací zadaných v redakci u tohoto konkrétního
              záznamu a nejde o automatickou AI detekci provedenou touto
              stránkou.
            </p>
          </section>

          <div className="mt-8 flex justify-center">
            <AdSlot size="300x250" />
          </div>

          <p className="mt-10 text-sm">
            <Link href="/odhaleno" className="text-green-700 hover:underline">
              ← Další odhalené obrázky
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
