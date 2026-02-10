import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">
        <Link href="/">
          Modelo <span className="text-yellow-500">Advocacia</span>
        </Link>
      </h1>

      <nav className="space-x-6">
        <Link href="/" className="hover:text-yellow-500">
          Home
        </Link>

        <Link href="/sobre" className="hover:text-yellow-500">
          Sobre
        </Link>

        <Link href="/areas" className="hover:text-yellow-500">
          Áreas
        </Link>

        <Link href="/advogado" className="hover:text-yellow-500">
          Advogado
        </Link>

        <Link href="/contato" className="hover:text-yellow-500">
          Contato
        </Link>
      </nav>
    </header>
  );
}
