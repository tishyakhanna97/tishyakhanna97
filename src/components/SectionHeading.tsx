interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
}

export function SectionHeading({ id, label, title }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-24">
      <p className="text-xs font-mono text-blue-600 mb-2 uppercase tracking-wider">{label}</p>
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  );
}
