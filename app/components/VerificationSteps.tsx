import Link from "next/link";
import { verificationSteps } from "../lib/verification-steps";

export function VerificationSteps() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-2xl font-bold">Jak obrázek ověřit lépe</h2>
        <ol className="space-y-4">
          {verificationSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-600 font-bold text-gray-900">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href="/jak-overit-fotografii"
          className="mt-6 inline-block text-sm font-semibold text-amber-400 hover:underline"
        >
          Podrobný postup →
        </Link>
      </div>
    </section>
  );
}
