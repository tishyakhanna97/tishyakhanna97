import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceRow, ExperienceCard } from "@/components/ExperienceRow";

const projects = [
  {
    title: "Policy2Prompt",
    org: "TikTok",
    headline:
      "97.5% reduction in prompt development time. Automated content moderation at global scale",
    tags: ["Flask", "FastAPI", "NextJS", "LLMs"],
    href: "/projects/policy2prompt",
    bg: "#e8f0e4",
    border: "#c4d4be",
  },
  {
    title: "Genie + Oracle",
    org: "EnterpriseSG",
    headline:
      "700+ non-technical users querying data via natural language. Government's first LLM apps",
    tags: ["LangChain", "Python", "ReactJS", "SQL"],
    href: "/projects/genie-oracle",
    bg: "#f5e8e8",
    border: "#dfcaca",
  },
  {
    title: "Elevate Platform",
    org: "Elevate Security",
    headline:
      "10x platform speed, 20+ API integrations. Enabled a $500K+ enterprise deal",
    tags: ["Django", "PostgreSQL", "AWS", "Docker"],
    href: "/projects/elevate",
    bg: "#eae8f5",
    border: "#cccae8",
  },
  {
    title: "MySoil",
    org: "Founder",
    headline: "$60K revenue, top 3 Shopee seller. D2C customized soil venture",
    tags: ["E-commerce", "Operations", "Product"],
    href: "/projects/mysoil",
    bg: "#e4efec",
    border: "#bcd4ce",
  },
];

const skills = {
  Languages: [
    "Python",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Go",
    "Java",
    "Bash",
  ],
  Frameworks: [
    "Django",
    "Flask",
    "FastAPI",
    "ReactJS",
    "Next.js",
    "React Native",
    "Node.js",
  ],
  "AI / ML": [
    "LangChain",
    "OpenAI",
    "RAG",
    "Vector DBs",
    "PyTorch",
    "Scikit-learn",
    "Prompt Engineering",
  ],
  Infrastructure: [
    "AWS (Certified)",
    "Docker",
    "CI/CD",
    "PostgreSQL",
    "REST APIs",
    "Git",
  ],
};

const experience = [
  {
    role: "AI Product Operations Manager",
    company: "TikTok",
    period: "Feb 2025 – Aug 2025",
    location: "Singapore",
    bg: "#e8f0e4",
  },
  {
    role: "AI Engineer (Part-Time)",
    company: "Terralab.ai",
    period: "Feb 2024 – May 2024",
    location: "Singapore",
    bg: "#f5f0e0",
  },
  {
    role: "Business Partner / Technical PM",
    company: "EnterpriseSG",
    period: "Aug 2022 – Feb 2025",
    location: "Singapore",
    bg: "#e4ecf5",
  },
  {
    role: "Software Engineer",
    company: "Elevate Security",
    period: "Jan 2021 – May 2022",
    location: "Berkeley, CA",
    bg: "#f0e4e4",
  },
  {
    role: "PM Intern, Search",
    company: "Shopee",
    period: "Aug 2020 – Nov 2020",
    location: "Singapore",
    bg: "#faecd8",
  },
  {
    role: "Lieutenant",
    company: "Singapore Armed Forces",
    period: "Jan 2016 – Nov 2017",
    location: "Singapore",
    bg: "#ece8f5",
  },
];

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="min-h-[55vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="shrink-0">
            <Image
              src="/images/tishya_khanna.jpg"
              alt="Tishya Khanna"
              width={220}
              height={220}
              className="rounded-full object-cover w-44 h-44 md:w-56 md:h-56 border-4 border-[#f0e8d8] shadow-md"
              priority
            />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
              Hi, I&apos;m Tishya Khanna
            </h1>
            <p className="text-xl md:text-2xl text-[#555] mb-4 max-w-2xl">
              I build AI-powered products that ship to real users.
            </p>
            <p className="text-sm text-[#888] mb-8 max-w-xl">
              Cornell Tech M.Eng, CS &apos;26 &middot; Previously TikTok,
              EnterpriseSG, Elevate Security
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-7 py-3 bg-[#c87960] text-white text-base font-medium rounded-full hover:bg-[#b56a50] transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-7 py-3 bg-[#7a9a68] text-white text-base font-medium rounded-full hover:bg-[#6a8a58] transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="pt-8 pb-20 border-t border-[#e4d5ea]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading id="about" label="About" title="Who I Am" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-[#333] leading-relaxed">
              <p>
                I&apos;m a software engineer and AI builder with 4+ years of
                experience shipping products across startups, government, and
                big tech. My work sits at the intersection of deep engineering
                and real user impact.
              </p>
              <p>
                At TikTok, I automated content moderation for 800+ global
                policies. At EnterpriseSG, I launched the agency&apos;s first
                LLM tools for 700+ non-technical users. At Elevate Security, I
                optimized databases 10x and built 20+ enterprise integrations.
              </p>
              <p>
                Before tech, I served as a Lieutenant in the Singapore Armed
                Forces, training 400+ Officer Cadets. I also built MySoil, a D2C
                venture that hit $60K in revenue. I&apos;m currently finishing
                my M.Eng. in Computer Science at Cornell Tech.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-xl p-5 bg-[#fdf8f5]" style={{ border: "2px solid #f0c4b0" }}>
                <h3 className="font-bold mb-3">Education</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium">
                      Cornell Tech, Cornell University
                    </p>
                    <p className="text-[#666]">
                      M.Eng. Computer Science &middot; 2026
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">
                      National University of Singapore
                    </p>
                    <p className="text-[#666]">
                      B.Eng. CS, Honors with Distinction &middot; 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl p-5 bg-[#fdf8f5]" style={{ border: "2px solid #b8d4ac" }}>
                <h3 className="font-bold mb-3">What I&apos;m Looking For</h3>
                <p className="text-sm text-[#666]">
                  Product Engineering roles where I can build AI-powered
                  products that reach real users. Graduating May 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 border-t border-[#e4d5ea]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            id="projects"
            label="Projects"
            title="Featured Work"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 border-t border-[#e4d5ea]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            id="experience"
            label="Experience"
            title="Where I've Worked"
          />
          <div className="space-y-3">
            {experience.map((exp, i) => (
              <ExperienceRow key={i} {...exp} />
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <ExperienceCard
              title="Otterfunds"
              description="Fund monitoring tool · ReactJS + Go · 3x sales increase"
              bg="#ece8f5"
            />
            <ExperienceCard
              title="MySoil"
              description="D2C venture · $60K revenue · Top 3 Shopee seller"
              bg="#fad8b4"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-[#e4d5ea]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading id="skills" label="Skills" title="Tech Stack" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-[#e4d5ea] rounded-xl p-5 bg-[#f8f3fb]"
              >
                <h3 className="font-bold text-sm mb-3 text-[#9b7aa0] font-mono uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-[#f0e8f4] text-[#2c2622]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#333] mt-4 font-mono">
            AWS Certified Solutions Architect
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t border-[#e4d5ea]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading id="contact" label="Contact" title="Let's Connect" />
          <p className="text-[#666] mb-8 max-w-lg mx-auto">
            I&apos;m graduating from Cornell Tech in May 2026 and looking for
            SWE, FDE, or PM roles. I&apos;d love to chat about what I can bring
            to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:tk732@cornell.edu"
              className="px-7 py-3 bg-[#c87960] text-white text-sm font-medium rounded-full hover:bg-[#b56a50] transition-colors"
            >
              tk732@cornell.edu
            </a>
            <a
              href="https://linkedin.com/in/tishyakhanna9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#7a9a68] text-white text-sm font-medium rounded-full hover:bg-[#6a8a58] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tishyakhanna97"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-[#7a98b8] text-white text-sm font-medium rounded-full hover:bg-[#6a88a8] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
