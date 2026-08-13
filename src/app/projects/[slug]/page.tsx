import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Params = Promise<{ slug: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex-1">
      <Link href="/#projects" className="text-sm text-text-muted hover:text-text">
        &larr; Back to projects
      </Link>
      <h1 className="font-serif text-3xl text-text mt-4">{project.title}</h1>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="font-mono text-xs text-text-muted border border-border rounded px-2 py-1"
          >
            {item}
          </span>
        ))}
      </div>

      <section className="mt-10">
        <h2 className="text-sm text-text-muted uppercase tracking-wide mb-2">Problem</h2>
        <p className="text-text leading-relaxed">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm text-text-muted uppercase tracking-wide mb-2">Decision</h2>
        <p className="text-text leading-relaxed">{project.decision}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm text-text-muted uppercase tracking-wide mb-2">How it works</h2>
        <p className="text-text leading-relaxed">{project.howItWorks}</p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm text-text-muted uppercase tracking-wide mb-2">Tradeoff / scope cut</h2>
        <p className="text-text leading-relaxed">{project.tradeoff}</p>
      </section>
    </div>
  );
}