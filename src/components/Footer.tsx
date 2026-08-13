import { gmailComposeUrl } from "@/lib/data";

const links = [
  { label: "GitHub", href: "https://github.com/mnaqi0789-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-naqi-251a77429/" },
  { label: "Email", href: gmailComposeUrl },
  { label: "WhatsApp", href: "https://wa.me/923363266298" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <span className="font-mono text-xs text-faint">
          &copy; {new Date().getFullYear()} M. Naqi
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs break-all text-muted-foreground transition-colors duration-150 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
