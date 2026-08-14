import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-gray-400">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <p className="mb-2 text-lg font-extrabold text-white">
            JeTo<span className="text-green-400">AI</span>.cz
          </p>
          <p className="text-sm">
            Praktický nástroj pro ověřování obrázků a tvrzení v digitálním
            světě.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Rychlé odkazy
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/jak-poznat-ai-obrazek" className="hover:text-white">
                Jak poznat AI obrázek
              </Link>
            </li>
            <li>
              <Link href="/jak-overit-fotografii" className="hover:text-white">
                Jak ověřit fotografii
              </Link>
            </li>
            <li>
              <Link href="/ai-detektory" className="hover:text-white">
                AI detektory
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">O webu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/o-projektu" className="hover:text-white">
                O projektu
              </Link>
            </li>
            <li>
              <Link
                href="/zasady-ochrany-osobnich-udaju"
                className="hover:text-white"
              >
                Zásady ochrany osobních údajů
              </Link>
            </li>
            <li>
              <Link href="/podminky-pouziti" className="hover:text-white">
                Podmínky použití
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-gray-800 pt-6 text-xs text-gray-500">
        <p>
          © {new Date().getFullYear()} JeToAI.cz. Neberte výsledky jako
          důkaz. Ověřujte původ a kontext.
        </p>
      </div>
    </footer>
  );
}
