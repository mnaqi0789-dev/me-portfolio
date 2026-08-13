import { gmailComposeUrl } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: "mnaqi0789@gmail.com",
    href: gmailComposeUrl,
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+92 336 3266298",
    href: "https://wa.me/923363266298",
    external: true,
  },
  {
    label: "GitHub",
    value: "mnaqi0789-dev",
    href: "https://github.com/mnaqi0789-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "muhammad-naqi",
    href: "https://www.linkedin.com/in/muhammad-naqi-251a77429/",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 border-t border-border">
      <h2 className="font-serif text-2xl text-text mb-6">Contact</h2>
      <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
        {contactLinks.map((link) => (
          
          <a  key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="flex flex-col gap-1 bg-surface border border-border rounded-xl p-5 hover:border-accent transition-colors"
          >
            <span className="font-mono text-xs text-text-muted uppercase tracking-wide">
              {link.label}
            </span>
            <span className="text-text">{link.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}