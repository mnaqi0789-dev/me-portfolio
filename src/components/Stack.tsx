import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { stackGroups, stackNote } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="border-b border-border">
      <div className="mx-auto max-w-[1100px] px-6 py-20 lg:py-28">
        <Reveal>
          <SectionLabel index="03" title="stack" />
          <p className="mt-8 max-w-xl text-sm text-muted-foreground">
            <span className="font-mono text-accent">&gt; </span>
            {stackNote}
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {stackGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.05}>
              <div className="h-full rounded-lg border border-border bg-surface p-5">
                <h3 className="font-mono text-xs tracking-[0.14em] text-faint uppercase">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-border px-2 py-1 font-mono text-[0.7rem] break-words text-muted-foreground transition-colors duration-150 hover:border-accent hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
