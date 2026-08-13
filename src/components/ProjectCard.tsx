import { Link } from "@tanstack/react-router";
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
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="surface-card group flex flex-col overflow-hidden rounded-lg"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-[oklch(0.62_0.19_25)]" />
        <span className="h-2 w-2 rounded-full bg-[oklch(0.78_0.15_85)]" />
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="ml-2 truncate font-mono text-xs text-faint">
          {fileNames[project.slug] ?? `${project.slug}.ts`}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-mono text-base break-words text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 shrink-0 text-faint transition-colors duration-150 group-hover:text-accent"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{project.teaser}</p>
        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 4).map((item) => (
            <span key={item} className="font-mono text-[0.7rem] text-faint">
              [{item.toLowerCase()}]
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
