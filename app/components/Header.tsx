import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-950">
          Dra. Isabella
        </Link>

        <nav className="flex items-center gap-5 text-sm text-zinc-600" aria-label="Primary navigation">
          <Link href="#about" className="transition hover:text-zinc-950">
            About
          </Link>
          <Link href="#services" className="transition hover:text-zinc-950">
            Services
          </Link>
          <Link href="#contact" className="transition hover:text-zinc-950">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
