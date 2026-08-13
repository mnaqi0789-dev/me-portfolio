import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { gmailComposeUrl } from "@/lib/data";

const contactLinks = [
  { label: "Email", value: "mnaqi0789@gmail.com", href: gmailComposeUrl, icon: Mail },
  { label: "WhatsApp", value: "+92 336 3266298", href: "https://wa.me/923363266298", icon: MessageCircle },
  { label: "GitHub", value: "mnaqi0789-dev", href: "https://github.com/mnaqi0789-dev", icon: Github },
  {
    label: "LinkedIn",
    value: "muhammad-naqi",
    href: "https://www.linkedin.com/in/muhammad-naqi-251a77429/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-[1100px] px-6 py-20 lg:py-28">
        <Reveal>
          <SectionLabel index="04" title="contact" />
        </Reveal>
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <Reveal key={link.label} delay={i * 0.05}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex h-full items-start gap-3 rounded-lg p-5"
                >
                  <Icon size={16} className="mt-1 shrink-0 text-faint" />
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-mono text-[0.7rem] tracking-[0.14em] text-faint uppercase">
                      {link.label}
                    </span>
                    <span className="font-mono text-sm break-all text-foreground">{link.value}</span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
