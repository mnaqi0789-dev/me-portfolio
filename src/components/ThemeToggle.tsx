"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle({ initialIsDark }: { initialIsDark: boolean }) {
  const [isDark, setIsDark] = useState(initialIsDark);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.cookie = `theme=${next ? "dark" : "light"}; path=/; max-age=31536000; samesite=lax`;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-md border border-border text-text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}