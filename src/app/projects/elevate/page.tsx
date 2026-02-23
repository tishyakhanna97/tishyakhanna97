import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elevate Platform | Elevate Security | Tishya Khanna",
  description:
    "10x platform speed improvement and 20+ API integrations for enterprise human risk management.",
};

const bg = "#eae8f5";
const border = "#cccae8";
const accent = "#6060a0";

export default function ElevatePage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/#projects"
        className="text-sm mb-8 inline-block transition-opacity hover:opacity-70"
        style={{ color: accent }}
      >
        &larr; Back to Projects
      </Link>

      <p className="text-xs mb-2 uppercase tracking-wider" style={{ color: accent }}>
        Elevate Security &middot; Jan 2021 – May 2022
      </p>
      <h1 className="text-4xl font-bold mb-4">Elevate Platform</h1>
      <p className="text-xl text-[#666] mb-8">
        10x platform speed, 20+ API integrations. Human risk management for
        Fortune 500 enterprises
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "10x", label: "Speed improvement" },
          { value: "20+", label: "API integrations" },
          { value: "$500K+", label: "Deal enabled" },
          { value: "90→5min", label: "Scoring time" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-4 text-center"
            style={{ background: bg, border: `1.5px solid ${border}` }}
          >
            <p className="text-2xl font-bold" style={{ color: accent }}>{m.value}</p>
            <p className="text-xs text-[#666] mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 text-[#555] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">The Problem</h2>
          <p>
            Elevate Security scored employee security behavior for enterprises
            with 5,000+ employees, ingesting data from tools like O365, Okta,
            Proofpoint, and more. For large Fortune500 organizations (100K+
            employees), scoring jobs took 90+ minutes. The database used a
            delete-and-reload approach that created severe performance
            bottlenecks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">What I Built</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Database optimization:</strong> Replaced delete-and-reload
              with hash-based upsert mechanism, only updating records that
              actually changed, achieving 10x platform speed improvement.
            </li>
            <li>
              <strong>20+ API integrations:</strong> Built connectors for O365,
              Okta MFA, Proofpoint, Cofense, SentinelOne, Zscaler, and more.
              Created reusable connector architecture with standardized config
              files.
            </li>
            <li>
              <strong>Customer data validation:</strong> Full-stack feature
              (Django + ReactJS) that reduced error rates and saved 10
              man-hours/week in error management.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">
            Enterprise Deployments
          </h2>
          <p>
            I worked on deploying the platform to Fortune 500 enterprises. Each
            had unique integration requirements and security constraints. The
            integrations I built directly enabled the company&apos;s largest
            client deal, valued at over $500K.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "Django",
              "ReactJS",
              "AWS",
              "PostgreSQL",
              "Docker",
              "CI/CD",
              "REST APIs",
              "pytest",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: bg, color: accent }}
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
