import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MySoil | Entrepreneurship | Tishya Khanna",
  description:
    "D2C customized soil venture with $60K revenue and top 3 Shopee seller status.",
};

const bg = "#e4efec";
const border = "#bcd4ce";
const accent = "#4a8878";

export default function MySoilPage() {
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
        Founder &middot; 2021 – 2022
      </p>
      <h1 className="text-4xl font-bold mb-4">MySoil</h1>
      <p className="text-xl text-[#666] mb-4">
        $60K revenue, top 3 Shopee seller. D2C customized soil venture
      </p>
      <a
        href="https://drive.google.com/file/d/1hhD-L-XURvRKNqffGD2oqLLtVoHx4XXW/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-sm mb-8 rounded-lg px-4 py-2 transition-colors"
        style={{ color: accent, border: `1.5px solid ${border}` }}
      >
        View Pitch Deck (PDF) &rarr;
      </a>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "$61.9K", label: "Total revenue" },
          { value: "5,851", label: "Products sold" },
          { value: "Top 3", label: "Shopee ranking" },
          { value: "19.7%", label: "Return customers" },
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

      {/* Screenshots */}
      <div className="grid grid-cols-2 gap-4 mb-12 items-start">
        <div className="rounded-xl overflow-hidden" style={{ border: `1.5px solid ${border}` }}>
          <Image
            src="/images/first_big_sale.png"
            alt="Top 3 soil seller on Shopee"
            width={600}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: `1.5px solid ${border}` }}>
          <Image
            src="/images/photo_6053144294019150551_y.jpg"
            alt="MySoil first big sale"
            width={600}
            height={1000}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="space-y-8 text-[#555] leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-black mb-3">The Problem</h2>
          <p>
            Singapore home gardeners lacked quality, customized soil options.
            The market was split between cheap mass-market products and
            expensive specialty stores, with nothing in between for the growing
            community of hobbyist gardeners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">What I Built</h2>
          <p>
            I launched MySoil as a direct-to-consumer soil business on Shopee
            and Lazada, handling everything end-to-end: sourcing raw materials,
            developing soil mix formulations, packaging, fulfillment, customer
            service, and platform marketing. I validated product-market fit
            through customer surveys and pilots, then iteratively pivoted
            product lines based on real feedback.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">
            Customer-Driven Iteration
          </h2>
          <p>
            When certain product lines underperformed, I quickly adapted based
            on what customers were actually buying and requesting. This
            feedback-driven approach led to a 19.7% return customer rate overall
            and 40% repeat-purchase rate for our best products. We became a top
            3 soil seller on Shopee Singapore.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-3">By the Numbers</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg p-3" style={{ background: bg, border: `1.5px solid ${border}` }}>
              <p className="text-[#666]">Shopee</p>
              <p className="font-bold">4,992 products &middot; $52,745</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: bg, border: `1.5px solid ${border}` }}>
              <p className="text-[#666]">Lazada</p>
              <p className="font-bold">776 products &middot; $7,913</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
