import { gmailComposeUrl } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <span>&copy; {new Date().getFullYear()} M. Naqi</span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          
          <a  href="https://github.com/mnaqi0789-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text"
          >
            GitHub
          </a>
          
          <a  href="https://www.linkedin.com/in/muhammad-naqi-251a77429/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text"
          >
            LinkedIn
          </a>
          <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text">
            Email
          </a>
          
          <a  href="https://wa.me/923363266298"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}