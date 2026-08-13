import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6 py-20 lg:py-28">
        <Reveal>
          <SectionLabel index="02" title="projects" />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className="flex">
              <div className="flex w-full">
                <ProjectCard project={project} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
