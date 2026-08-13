const lines: { text: string; tone: "kw" | "fn" | "str" | "cmt" | "plain" }[] = [
  { text: "async function refresh(token) {", tone: "kw" },
  { text: "  const row = await db.refreshToken(token);", tone: "plain" },
  { text: "  if (row.used) {", tone: "kw" },
  { text: "    await killAllSessions(row.userId);", tone: "fn" },
  { text: "    throw new BreachSuspected();", tone: "str" },
  { text: "  }", tone: "plain" },
  { text: "  return issueSession(row.userId);", tone: "fn" },
  { text: "}", tone: "kw" },
];

const toneClass = {
  kw: "text-accent",
  fn: "text-foreground",
  str: "text-muted-foreground",
  cmt: "text-faint",
  plain: "text-muted-foreground",
} as const;

export default function CodeBlock() {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.62_0.19_25)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-2 truncate font-mono text-xs text-faint">rotate-refresh.ts</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.72rem] leading-6 sm:text-xs">
        <code>
          {lines.map((line, i) => (
            <span key={line.text} className="grid grid-cols-[2ch_1fr] gap-4">
              <span className="text-faint select-none">{i + 1}</span>
              <span className={toneClass[line.tone]}>{line.text}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
