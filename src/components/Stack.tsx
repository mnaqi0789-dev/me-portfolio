import { stackGroups, stackNote } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-5xl px-6 py-16 border-t border-border">
      <h2 className="font-serif text-2xl text-text mb-2">Stack</h2>
      <p className="text-sm text-text-muted mb-8 max-w-xl">{stackNote}</p>
      <div className="grid gap-8 sm:grid-cols-2">
        {stackGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm text-text-muted uppercase tracking-wide mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-text border border-border rounded px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}