import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Genie + Oracle | EnterpriseSG | Tishya Khanna",
  description:
    "LLM-powered data analytics tools that scaled data access to 700+ non-technical government users.",
};

export default function GenieOraclePage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/#projects"
        className="text-sm text-blue-600 hover:text-blue-700 font-mono mb-8 inline-block"
      >
        &larr; Back to Projects
      </Link>

      <p className="text-xs font-mono text-blue-600 mb-2 uppercase tracking-wider">
        EnterpriseSG &middot; Aug 2022 – Feb 2025
      </p>
      <h1 className="text-4xl font-bold mb-4">Genie + Oracle</h1>
      <p className="text-xl text-[#666] mb-4">
        700+ non-technical users querying data via natural language.
        Agency&apos;s first LLM applications
      </p>
      <a
        href="https://www.linkedin.com/posts/audrey-lok-6966ab178_innofest2024-ugcPost-7262806756706123776-D_X9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm font-mono text-blue-600 hover:text-blue-700 mb-8 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-50 transition-colors"
      >
        Spot me teaching SQL! (LinkedIn) &rarr;
      </a>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "700+", label: "Active users" },
          { value: "1,060", label: "Prompts processed" },
          { value: "36%", label: "SQL query increase" },
          { value: "4/5", label: "User satisfaction" },
        ].map((m) => (
          <div
            key={m.label}
            className="border border-[#e0e0e0] rounded-xl p-4 bg-[#f0efed] text-center"
          >
            <p className="text-2xl font-bold gradient-text">{m.value}</p>
            <p className="text-xs text-[#666] mt-1">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-8 text-[#555] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">The Problem</h2>
          <p>
            EnterpriseSG is a Singapore government agency with 800+ employees.
            Institutional knowledge was locked in long reports, databases, and
            meeting minutes. Officers spent days searching for insights and
            there were no AI tools in the organization.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">What I Built</h2>
          <p className="mb-3">Two complementary LLM applications:</p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="border border-[#e0e0e0] rounded-xl p-4 bg-[#f0efed]">
              <h3 className="font-bold text-blue-600 mb-2">Genie</h3>
              <p className="text-sm">
                Text-to-SQL tool enabling natural language database queries.
                Reduced SQL writing time from 15 minutes to 30 seconds.
              </p>
            </div>
            <div className="border border-[#e0e0e0] rounded-xl p-4 bg-[#f0efed]">
              <h3 className="font-bold text-blue-600 mb-2">Oracle</h3>
              <p className="text-sm">
                LLM chatbot for searching and summarizing meeting insights.
                Reduced search time from 3 days to 4 hours.
              </p>
            </div>
          </div>
          <p>
            I also built an automated evaluation pipeline using LangChain to
            assess response quality, designed template/default prompt features
            (accounting for ~15% of all queries), and used KMeans clustering to
            analyze usage patterns and improve the product.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">
            Shipping AI in Government
          </h2>
          <p>
            I created EnterpriseSG&apos;s first internal LLM policy, conducted a
            comprehensive risk assessment, and secured buy-in across 8 internal
            and external stakeholder platforms. I ran 10+ user testing sessions
            and sharing sessions reaching 300+ users, and gathered data from a
            100+ participant survey to shape the roadmap.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">
            Data-Driven Iteration
          </h2>
          <p>
            To diagnose declining usage, I used KMeans clustering to segment
            query types, identified that users were trying to ask quantitative
            questions Oracle wasn&apos;t designed for, and built a sentiment
            extraction feature that processed meeting minutes at scale to handle
            that need.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "LangChain",
              "OpenAI",
              "ReactJS",
              "Flask",
              "SQL",
              "Streamlit",
              "KMeans",
            ].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-mono"
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
