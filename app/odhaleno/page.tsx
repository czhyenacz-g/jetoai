import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getRevealItems } from "../lib/reveals";

const SITE_URL = "https://jetoai.cz";

export const metadata: Metadata = {
  title: "Odhalené obrázky",
  description:
    "Přehled obrázků, u kterých redakce JeToAI.cz potvrdila AI původ.",
  alternates: { canonical: `${SITE_URL}/odhaleno` },
};

export default async function OdhalenoIndexPage() {
  const items = await getRevealItems();

  return (
    <>
      <Header />
      <main className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Odhalené obrázky
          </h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Přehled obrázků, u kterých redakce potvrdila, že jde o výsledek
            umělé inteligence.
          </p>

          {items.length === 0 ? (
            <p className="mt-10 text-gray-500">
              Zatím tu nejsou žádné odhalené obrázky. Brzy je doplníme.
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={`/odhaleno/${item.slug}`}
                  className="group block overflow-hidden rounded-xl border border-gray-200"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
                      Vygenerováno AI
                    </p>
                    {item.resultText && (
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {item.resultText}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
