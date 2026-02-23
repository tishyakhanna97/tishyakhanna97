import Link from "next/link";

interface ProjectCardProps {
  title: string;
  org: string;
  headline: string;
  tags: string[];
  href: string;
  bg: string;
  border: string;
}

export function ProjectCard({ title, org, headline, tags, href, bg, border }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div
        className="card-hover rounded-2xl p-6 cursor-pointer h-full flex flex-col bg-[#fdf8f5]"
        style={{ border: `2px solid ${border}` }}
      >
        <p className="text-xs font-mono text-[#888] mb-2 uppercase tracking-widest">{org}</p>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-[#555] text-sm mb-5 flex-1 leading-relaxed">{headline}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full text-[#444]" style={{ background: bg }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
