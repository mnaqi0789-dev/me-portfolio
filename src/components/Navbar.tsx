"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg border-b border-border">
      <div className="mx-auto max-w-5xl h-16 px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg text-text" onClick={() => setOpen(false)}>
          M. Naqi
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm text-text-muted">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-text">
              {link.label}
            </Link>
          ))}
          <ThemeToggle initialIsDark={isDark} />
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle initialIsDark={isDark} />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-text-muted hover:border-accent hover:text-accent transition-colors"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-border bg-bg px-6 py-4">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-text-muted hover:text-text"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}