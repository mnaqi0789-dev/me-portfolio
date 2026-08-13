import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block bg-surface border border-border rounded-xl p-6 hover:border-accent transition-colors"
    >
      <h3 className="font-serif text-xl text-text">{project.title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">{project.teaser}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((item) => (
          <span
            key={item}
            className="font-mono text-xs text-text-muted border border-border rounded px-2 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}