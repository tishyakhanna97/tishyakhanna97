import Link from "next/link";

interface ProjectCardProps {
  title: string;
  org: string;
  headline: string;
  tags: string[];
  href: string;
}

export function ProjectCard({ title, org, headline, tags, href }: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="card-hover border border-[#e0e0e0] rounded-xl p-6 bg-[#f0efed] cursor-pointer h-full flex flex-col">
        <p className="text-xs font-mono text-blue-600 mb-2 uppercase tracking-wider">{org}</p>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-[#666] text-sm mb-4 flex-1">{headline}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700 font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
