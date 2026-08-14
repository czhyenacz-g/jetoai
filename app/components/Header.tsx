import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-gray-800 px-4 py-5">
      <div className="mx-auto flex max-w-4xl items-center justify-between">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          JeTo<span className="text-amber-400">AI</span>.cz
        </Link>
        <nav className="hidden gap-5 text-sm text-gray-400 sm:flex">
          <Link href="/jak-poznat-ai-obrazek" className="hover:text-white">
            Jak poznat AI obrázek
          </Link>
          <Link href="/jak-overit-fotografii" className="hover:text-white">
            Jak ověřit fotografii
          </Link>
          <Link href="/ai-detektory" className="hover:text-white">
            AI detektory
          </Link>
        </nav>
      </div>
    </header>
  );
}
