import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar({ isDark }: { isDark: boolean }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-bg border-b border-border">
      <div className="mx-auto max-w-5xl h-full px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-text">
          M. Naqi
        </Link>
        <nav className="flex items-center gap-6 text-sm text-text-muted">
          <Link href="/#about" className="hover:text-text">About</Link>
          <Link href="/#projects" className="hover:text-text">Projects</Link>
          <Link href="/#stack" className="hover:text-text">Stack</Link>
          <Link href="/#contact" className="hover:text-text">Contact</Link>
          <ThemeToggle initialIsDark={isDark} />
        </nav>
      </div>
    </header>
  );
}