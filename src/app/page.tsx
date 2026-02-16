import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";

const projects = [
  {
    title: "Policy2Prompt",
    org: "TikTok",
    headline:
      "97.5% reduction in prompt development time. Automated content moderation at global scale",
    tags: ["Flask", "FastAPI", "NextJS", "LLMs"],
    href: "/projects/policy2prompt",
  },
  {
    title: "Genie + Oracle",
    org: "EnterpriseSG",
    headline:
      "700+ non-technical users querying data via natural language. Government's first LLM apps",
    tags: ["LangChain", "Python", "ReactJS", "SQL"],
    href: "/projects/genie-oracle",
  },
  {
    title: "Elevate Platform",
    org: "Elevate Security",
    headline:
      "10x platform speed, 20+ API integrations. Enabled a $500K+ enterprise deal",
    tags: ["Django", "PostgreSQL", "AWS", "Docker"],
    href: "/projects/elevate",
  },
  {
    title: "MySoil",
    org: "Founder",
    headline: "$60K revenue, top 3 Shopee seller. D2C customized soil venture",
    tags: ["E-commerce", "Operations", "Product"],
    href: "/projects/mysoil",
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
  },
  {
    role: "AI Engineer (Part-Time)",
    company: "Terralab.ai",
    period: "Feb 2024 – May 2024",
    location: "Singapore",
  },
  {
    role: "Business Partner / Technical PM",
    company: "EnterpriseSG",
    period: "Aug 2022 – Feb 2025",
    location: "Singapore",
  },
  {
    role: "Software Engineer",
    company: "Elevate Security",
    period: "Jan 2021 – May 2022",
    location: "Berkeley, CA",
  },
  {
    role: "PM Intern, Search",
    company: "Shopee",
    period: "Aug 2020 – Nov 2020",
    location: "Singapore",
  },
  {
    role: "Lieutenant",
    company: "Singapore Armed Forces",
    period: "Jan 2016 – Nov 2017",
    location: "Singapore",
  },
];

export default function Home() {
  return (
    <div className="fade-in">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="shrink-0">
            <Image
              src="/images/tishya_khanna.jpg"
              alt="Tishya Khanna"
              width={220}
              height={220}
              className="rounded-full object-cover w-44 h-44 md:w-56 md:h-56 border-4 border-[#e0e0e0] shadow-lg"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-mono text-blue-600 mb-4">Hi, I&apos;m</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Tishya Khanna
            </h1>
            <p className="text-xl md:text-2xl text-[#666] mb-6 max-w-2xl">
              I build AI-powered products that ship to real users.
            </p>
            <p className="text-sm text-[#333] mb-8 max-w-xl">
              Cornell Tech M.Eng. CS &apos;26 &middot; Previously TikTok,
              EnterpriseSG, Elevate Security
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-[#e0e0e0] text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 border-t border-[#e0e0e0]">
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
              <div className="border border-[#e0e0e0] rounded-xl p-5 bg-[#f0efed]">
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
              <div className="border border-[#e0e0e0] rounded-xl p-5 bg-[#f0efed]">
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
      <section className="py-20 border-t border-[#e0e0e0]">
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
      <section className="py-20 border-t border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            id="experience"
            label="Experience"
            title="Where I've Worked"
          />
          <div className="space-y-0">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-[#e0e0e0] hover:bg-[#f0efed] px-4 -mx-4 rounded-lg transition-colors"
              >
                <div>
                  <h3 className="font-bold">{exp.role}</h3>
                  <p className="text-[#666] text-sm">
                    {exp.company} &middot; {exp.location}
                  </p>
                </div>
                <p className="text-[#333] text-sm font-mono mt-1 md:mt-0">
                  {exp.period}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="border border-[#e0e0e0] rounded-xl p-5 bg-[#f0efed]">
              <p className="text-xl font-bold gradient-text">Otterfunds</p>
              <p className="text-sm text-[#666] mt-1">
                Fund monitoring tool &middot; ReactJS + Go &middot; 3x sales
                increase
              </p>
            </div>
            <div className="border border-[#e0e0e0] rounded-xl p-5 bg-[#f0efed]">
              <p className="text-xl font-bold gradient-text">MySoil</p>
              <p className="text-sm text-[#666] mt-1">
                D2C venture &middot; $60K revenue &middot; Top 3 Shopee seller
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 border-t border-[#e0e0e0]">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading id="skills" label="Skills" title="Tech Stack" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="border border-[#e0e0e0] rounded-xl p-5 bg-[#f0efed]"
              >
                <h3 className="font-bold text-sm mb-3 text-blue-600 font-mono uppercase">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 rounded bg-blue-50 text-[#333]"
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
      <section className="py-20 border-t border-[#e0e0e0]">
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
              className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              tk732@cornell.edu
            </a>
            <a
              href="https://linkedin.com/in/tishyakhanna9"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e0e0e0] text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tishyakhanna97"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#e0e0e0] text-sm font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
