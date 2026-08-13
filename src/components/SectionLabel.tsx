export default function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-mono text-lg text-text">
        <span className="text-accent">{index}. </span>
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}