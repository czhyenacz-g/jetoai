import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-lg font-extrabold tracking-tight text-gray-900"
        >
          JeTo<span className="text-green-600">AI</span>.cz
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          <Link href="/jak-poznat-ai-obrazek" className="hover:text-gray-900">
            Jak poznat AI obrázek
          </Link>
          <Link href="/jak-overit-fotografii" className="hover:text-gray-900">
            Jak ověřit fotografii
          </Link>
          <Link href="/ai-detektory" className="hover:text-gray-900">
            AI detektory
          </Link>
          <Link href="/#faq" className="hover:text-gray-900">
            FAQ
          </Link>
          <Link href="/o-projektu" className="hover:text-gray-900">
            O projektu
          </Link>
        </nav>
        <Link
          href="/#fact-check"
          className="inline-flex flex-none items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          Ověřit tvrzení
        </Link>
      </div>
    </header>
  );
}
