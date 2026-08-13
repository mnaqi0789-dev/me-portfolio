import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "about", href: "/#about" },
  { label: "projects", href: "/#projects" },
  { label: "stack", href: "/#stack" },
  { label: "contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between px-6">
        <Link
          to="/"
          className="font-mono text-sm tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <span className="text-accent">~/</span>m.naqi
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border text-muted-foreground transition-colors duration-150 hover:border-accent hover:text-accent md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 font-mono text-sm text-muted-foreground transition-colors duration-150 hover:text-accent"
                >
                  <span className="text-faint">$ </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
