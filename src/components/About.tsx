import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <SectionLabel index="01" title="about" />
          <p className="mt-8 max-w-2xl text-text-muted leading-relaxed">
            I&apos;m self-taught, based in Karachi. I mostly work in TypeScript — Node/Express and
            Next.js on the frontend, Prisma/Postgres or Firebase depending on the job. I don&apos;t
            move on from a project once it &quot;works&quot; — I go back and ask what breaks it,
            which is where most of my actual learning has happened. I&apos;d rather ship something
            small I can defend every line of than something large I&apos;m hand-waving through.
          </p>
        </Reveal>
      </div>
    </section>
  );
}