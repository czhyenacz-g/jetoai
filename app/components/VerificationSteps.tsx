import Link from "next/link";
import { verificationSteps } from "../lib/verification-steps";

export function VerificationSteps() {
  return (
    <div id="jak-overit" className="scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold text-gray-900">
        Jak obrázek ověřit lépe
      </h2>
      <ol className="space-y-5">
        {verificationSteps.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border-2 border-green-600 text-sm font-bold text-green-600">
              {i + 1}
            </span>
            <div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
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
  );
}
