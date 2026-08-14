import Image from "next/image";
import Link from "next/link";
import { verificationSteps } from "../lib/verification-steps";

export function VerificationSteps() {
  return (
    <div id="jak-overit" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Jak obrázek ověřit lépe
      </h2>
      <div className="grid gap-8 lg:grid-cols-[220px_1fr] lg:items-start">
        <figure className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50 lg:order-first">
          <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src="/images/priklad-zirafa-zebra.webp"
              alt="Fotorealistická AI ukázka žirafy se zebřími pruhy"
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 220px, 60vw"
              className="object-cover"
            />
          </div>
          <figcaption className="p-3">
            <p className="text-xs font-semibold text-gray-900">
              Očividné AI je ta jednodušší část
            </p>
            <p className="mt-1 text-xs text-gray-600">
              Tuhle chybu pozná každý okamžitě. Moderní generované obrázky
              ale často žádnou takhle výraznou vadu nemají.
            </p>
          </figcaption>
        </figure>
        <div>
          <ol className="space-y-5">
            {verificationSteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-green-600 text-sm font-bold text-green-600">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/jak-overit-fotografii"
            className="mt-6 inline-block text-sm font-semibold text-green-600 hover:underline"
          >
            Podrobný postup →
          </Link>
        </div>
      </div>
    </div>
  );
}
