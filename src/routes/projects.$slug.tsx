import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Muhammad Naqi" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.project.title} — Case study — Muhammad Naqi`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.project.teaser },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.project.teaser },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectPage,
});

const sections = [
  { key: "problem", label: "problem" },
  { key: "decision", label: "decision" },
  { key: "howItWorks", label: "how it works" },
  { key: "tradeoff", label: "tradeoff / scope cut" },
] as const;

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <article className="mx-auto w-full max-w-[820px] px-6 py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/"
          hash="projects"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-accent"
        >
          <ArrowLeft size={14} />
          back to projects
        </Link>

        <h1 className="mt-8 font-mono text-2xl break-words text-foreground sm:text-3xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-[0.95rem] text-muted-foreground">{project.teaser}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded border border-border px-2 py-1 font-mono text-[0.7rem] text-faint"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="mt-14 space-y-12">
        {sections.map((section) => (
          <section key={section.key}>
            <h2 className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
              {section.label}
            </h2>
            <p className="mt-4 text-[0.95rem] text-muted-foreground">{project[section.key]}</p>
          </section>
        ))}
      </div>
    </article>
  );
}

function ProjectNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-[820px] flex-col items-start px-6 py-24">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="mt-4 font-mono text-2xl text-foreground">This case study doesn&apos;t exist</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        The project you&apos;re looking for isn&apos;t here.
      </p>
      <Link
        to="/"
        hash="projects"
        className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-5 font-mono text-xs text-accent-foreground transition-opacity duration-150 hover:opacity-90"
      >
        back to projects
      </Link>
    </div>
  );
}
