import Image from "next/image";

// Obrázky žijí v existující Knihovně médií projektu sokujici-redakce —
// žádná lokální kopie, stejný princip jako /odhaleno (viz app/lib/redakce.ts).
const AI_DETECT_SCREENSHOT = {
  url: "https://redakce.sokujiciodhaleni.cz/media/articles/2026/08/c2a2e4f8-791a-465e-9bf7-c9be2b4b6e99.webp",
  width: 1856,
  height: 1290,
};
const REAL_PHOTO = {
  url: "https://redakce.sokujiciodhaleni.cz/media/articles/2026/08/612fda8d-de4c-425f-929a-c58a12fd0aea.webp",
  width: 679,
  height: 450,
};

export function AiDetectorExample() {
  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2">
      <figure>
        <Image
          src={AI_DETECT_SCREENSHOT.url}
          alt="Snímek obrazovky AI detektoru, který u fotomontáže Václava Havla a Petra Pavla ukazuje výsledek „Likely AI-generated 99 %“"
          width={AI_DETECT_SCREENSHOT.width}
          height={AI_DETECT_SCREENSHOT.height}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="h-auto w-full rounded-lg border border-gray-200"
        />
        <figcaption className="mt-2 text-xs text-gray-500">
          Ukázka: AI detektor u obrázku, který je ve skutečnosti AI vygenerovanou fotomontáží.
        </figcaption>
      </figure>
      <figure>
        <Image
          src={REAL_PHOTO.url}
          alt="Petr Pavel v uniformě přebírá státní vyznamenání"
          width={REAL_PHOTO.width}
          height={REAL_PHOTO.height}
          sizes="(max-width: 640px) 100vw, 50vw"
          className="h-auto w-full rounded-lg border border-gray-200"
        />
        <figcaption className="mt-2 text-xs text-gray-500">
          Pro srovnání: skutečná fotografie Petra Pavla. Zdroj:{" "}
          <a
            href="https://www.idnes.cz/zpravy/domaci/statni-vyznamenani-petr-pavel-milos-zeman-vaclav-klaus-vaclav-havel.A231026_095937_domaci_zof/foto"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            iDNES.cz
          </a>
          .
        </figcaption>
      </figure>
    </div>
  );
}
