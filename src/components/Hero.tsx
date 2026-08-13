"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import CodeBlock from "@/components/CodeBlock";

const ROLE = "Self-taught Full-Stack Dev — Karachi, Pakistan";

function Typewriter({ text }: { text: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const id = window.setTimeout(() => setCount((c) => c + 1), 28);
    return () => window.clearTimeout(id);
  }, [count, text.length]);

  return (
    <p className="mt-6 font-mono text-sm text-text-muted">
      <span className="text-accent">$ </span>
      <span>{text.slice(0, count)}</span>
      <span className="caret ml-0.5" aria-hidden="true" />
      <span className="sr-only">{text}</span>
    </p>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 pt-24 pb-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.18em] text-text-faint uppercase">
            muhammad naqi
          </p>
          <h1 className="mt-5 max-w-2xl text-3xl font-semibold break-words text-text sm:text-4xl">
            Full-stack developer — auth systems, approval workflows, admin dashboards. I read code
            like it&apos;s going to fail, mine especially.
          </h1>
          <Typewriter text={ROLE} />
          <div className="mt-9 flex flex-wrap gap-3">
            
            <a  href="#projects"
              className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-mono text-xs text-white transition-opacity hover:opacity-90"
            >
              view projects
            </a>
            
            <a  href="#contact"
              className="inline-flex min-h-11 items-center rounded-md border border-border px-5 font-mono text-xs text-text-muted transition-colors hover:border-accent hover:text-accent"
            >
              get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <CodeBlock />
        </motion.div>
      </div>
    </section>
  );
}