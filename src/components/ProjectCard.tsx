import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const fileNames: Record<string, string> = {
  "auth-corez": "auth-corez.ts",
  ledgerz: "ledgerz.ts",
  blogz: "blogz.tsx",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface hover:border-accent transition-colors"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-slate-300" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-2 truncate font-mono text-xs text-text-faint">
          {fileNames[project.slug] ?? `${project.slug}.ts`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-mono text-base break-words text-text">{project.title}</h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-text-faint transition-colors group-hover:text-accent"
          />
        </div>
        <p className="mt-3 text-sm text-text-muted">{project.teaser}</p>
        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="font-mono text-[0.7rem] text-text-faint">
              [{item.toLowerCase()}]
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}