"use client";
import { useState } from "react";

interface ExperienceRowProps {
  role: string;
  company: string;
  location: string;
  period: string;
  bg: string;
}

export function ExperienceRow({ role, company, location, period, bg }: ExperienceRowProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col md:flex-row md:items-center justify-between px-5 py-4 rounded-2xl transition-colors duration-200"
      style={{ background: hovered ? bg : "transparent" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div>
        <h3 className="font-bold text-lg">{role}</h3>
        <p className="text-[#777] text-sm mt-0.5">{company} · {location}</p>
      </div>
      <p className="text-[#888] text-sm mt-1 md:mt-0 md:ml-8 shrink-0">{period}</p>
    </div>
  );
}

interface ExpCardProps {
  title: string;
  description: string;
  bg: string;
  href?: string;
  external?: boolean;
}

export function ExperienceCard({ title, description, bg, href, external }: ExpCardProps) {
  const inner = (
    <>
      <p className="text-xl font-bold underline decoration-[#aaa] underline-offset-2">{title}</p>
      <p className="text-sm text-[#666] mt-1">{description}</p>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="rounded-2xl p-5 block hover:brightness-95 transition-[filter]"
        style={{ background: bg }}
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="rounded-2xl p-5" style={{ background: bg }}>
      {inner}
    </div>
  );
}
