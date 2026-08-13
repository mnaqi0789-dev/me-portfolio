export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-muted">
        <span>&copy; {new Date().getFullYear()} M. Naqi</span>
        <div className="flex items-center gap-6">
          <a href="https://github.com/mnaqi0789-dev" target="_blank" rel="noopener noreferrer" className="hover:text-text">
            GitHub
          </a>
          <a href="mailto:you@example.com" className="hover:text-text">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}