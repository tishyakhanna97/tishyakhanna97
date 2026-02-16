import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy2Prompt | TikTok | Tishya Khanna",
  description:
    "Automated content moderation pipeline achieving 97.5% reduction in prompt development time.",
};

export default function Policy2PromptPage() {
  return (
    <div className="fade-in max-w-3xl mx-auto px-6 pt-28 pb-20">
      <Link
        href="/#projects"
        className="text-sm text-blue-600 hover:text-blue-700 font-mono mb-8 inline-block"
      >
        &larr; Back to Projects
      </Link>

      <p className="text-xs font-mono text-blue-600 mb-2 uppercase tracking-wider">
        TikTok &middot; Feb 2025 – Aug 2025
      </p>
      <h1 className="text-4xl font-bold mb-4">Policy2Prompt</h1>
      <p className="text-xl text-[#666] mb-8">
        97.5% reduction in prompt development time. Automated content moderation
        at global scale
      </p>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "97.5%", label: "Cycle reduction" },
          { value: "161", label: "Production prompts" },
          { value: ">90%", label: "Precision/Recall" },
          { value: "70%", label: "RCA time reduced" },
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

      {/* Content */}
      <div className="space-y-8 text-[#555] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">The Problem</h2>
          <p>
            TikTok&apos;s content moderation relied on LLMs to evaluate
            advertisements against 800+ global content moderation policies. Each
            policy required a custom prompt, and prompt engineers were spending
            40 hours (5 days) to create a single production-ready prompt. With
            hundreds of policies across different business lines and regions,
            this manual approach couldn&apos;t scale.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">What I Built</h2>
          <p className="mb-3">
            I identified the potential for an automated Policy-to-Prompt (P2P)
            pipeline and took ownership of scoping, designing, and building it.
            The system included:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Automated prompt generation from policy documents with
              auto-selection of reference document types
            </li>
            <li>
              Prompt optimization tools with analytics for tuning and evaluating
              output quality
            </li>
            <li>
              A Prompt Improver tool for prompt engineers to increase prompt
              quality
            </li>
            <li>Canary testing integration for safe production rollouts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">
            How did we do it?
          </h2>
          <p>
            I defined what &quot;good&quot; looked like, balancing risk and
            efficiency. I experimented with multiple approaches, comparing
            simple context stuffing vs. retrieval-based methods, and found that
            simpler methods actually performed better. I integrated
            auto-selection of reference document types per policy based on
            experimentation, and tuned hyperparameters and model selection along
            the way.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Impact</h2>
          <p>
            Shipped 161 production-ready prompts in 2 months including canary
            testing. Reduced prompt development from 5 days to 3 hours, a 97.5%
            reduction. Launched 20% of global content moderation policies. The
            prompts achieved &gt;90% precision/recall, outperforming human
            moderators. I also led a team of 4 prompt engineers who delivered
            80+ additional optimized prompts.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Flask",
              "FastAPI",
              "NextJS",
              "Python",
              "LLMs",
              "Prompt Engineering",
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
