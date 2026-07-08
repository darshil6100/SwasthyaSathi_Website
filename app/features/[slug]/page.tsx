import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { features, getFeatureBySlug } from "@/lib/features";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* Pre-render every feature page at build time */
export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};
  return {
    title: `${feature.title} — SwasthyaSathi`,
    description: feature.tagline,
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();

  const otherFeatures = features.filter((f) => f.slug !== feature.slug);

  return (
    <main style={{ background: "#ffffff" }}>
      {/* ── Hero: image only ── */}
        <section
          style={{
            position: "relative",
            background: "#0A1628",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "clamp(360px, 62vh, 640px)",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              priority
              quality={95}
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(6,12,30,0.55) 0%, transparent 30%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 120,
                background: `linear-gradient(to top, ${feature.accent}25, transparent)`,
                pointerEvents: "none",
              }}
            />
                    
            <div className="container" style={{ position: "relative", height: "100%" }}>
              <div
                style={{
                  position: "absolute",
                  top: 28,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.8rem",
                }}
              >
                <Link
                  href="/product"
                  style={{
                    color: "rgba(241,245,255,0.7)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  All features
                </Link>
              </div>
            </div>
          </div>
        </section>
                
        {/* ── Title block: eyebrow, title, tagline ── */}
        <section className="pt-14 pb-4 md:pt-16" style={{ background: "#ffffff" }}>
          <div className="container">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-5 font-mono text-xs font-semibold tracking-wide uppercase"
                style={{
                  background: `${feature.accent}14`,
                  color: feature.accent,
                  border: `1px solid ${feature.accent}30`,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a3 3 0 00-3 3v6a3 3 0 006 0V5a3 3 0 00-3-3z" />
                  <path d="M19 11a7 7 0 01-14 0H3a9 9 0 008 8.94V22h2v-2.06A9 9 0 0021 11h-2z" />
                </svg>
                {feature.eyebrow}
              </div>
              
              <h1
                className="font-display font-bold leading-[1.05] mb-5"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                  letterSpacing: "-0.025em",
                  color: "#0e2540",
                }}
              >
                {feature.title}
              </h1>
              
              <p
                className="leading-relaxed"
                style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)", color: "#5a7a96" }}
              >
                {feature.tagline}
              </p>
            </div>
          </div>
        </section>
              
        {/* ── What it is / Why it matters ── */}
        <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
            <div>
              <h2
                className="font-display font-bold text-2xl mb-4"
                style={{ color: "#0e2540" }}
              >
                What this feature is
              </h2>
              <p className="leading-relaxed" style={{ color: "#5a7a96" }}>
                {feature.whatItIs}
              </p>
            </div>
            <div>
              <h2
                className="font-display font-bold text-2xl mb-4"
                style={{ color: "#0e2540" }}
              >
                Why it&apos;s needed
              </h2>
              <p className="leading-relaxed" style={{ color: "#5a7a96" }}>
                {feature.whyItMatters}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problems it solves ── */}
      <section className="py-16 md:py-24" style={{ background: "#f5f9fd" }}>
        <div className="container">
          <div className="max-w-xl mb-12">
            <p
              className="font-mono text-xs tracking-widest uppercase font-semibold mb-3"
              style={{ color: feature.accent }}
            >
              The problem
            </p>
            <h2 className="section-title">What it actually solves</h2>
            <p className="section-subtitle">
              The everyday friction this feature is built to remove from a clinic&apos;s day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {feature.problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl p-6 border"
                style={{
                  background: "#ffffff",
                  borderColor: "#dcedf8",
                  boxShadow: "0 1px 4px rgba(14,37,64,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: `${feature.accent}18`, color: feature.accent }}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1.5"
                      style={{ color: "#0e2540" }}
                    >
                      {problem.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5a7a96" }}>
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-16 md:py-24" style={{ background: "#ffffff" }}>
        <div className="container">
          <div className="max-w-xl mb-12">
            <p
              className="font-mono text-xs tracking-widest uppercase font-semibold mb-3"
              style={{ color: feature.accent }}
            >
              How it works
            </p>
            <h2 className="section-title">From consult to record, automatically</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl">
            {feature.howItWorks.map((step, i) => (
              <div key={step.title} className="relative">
                <div
                  className="rounded-2xl p-6 h-full border"
                  style={{ background: "#f5f9fd", borderColor: "#dcedf8" }}
                >
                  <span
                    className="font-mono text-xs font-bold inline-flex items-center justify-center w-7 h-7 rounded-full mb-4"
                    style={{
                      background: feature.accent,
                      color: "#ffffff",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="font-display font-semibold text-base mb-2"
                    style={{ color: "#0e2540" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5a7a96" }}>
                    {step.description}
                  </p>
                </div>
                {i < feature.howItWorks.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2"
                    style={{ color: "#c8dff0" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 relative overflow-hidden text-white"
        style={{ background: "linear-gradient(150deg, #0f3270 0%, #1b4f9c 55%, #2563bb 100%)" }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(62, 174, 224, 0.14) 0%, transparent 70%)",
          }}
        />
        <div className="container relative">
          <div className="max-w-xl mx-auto text-center">
            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", letterSpacing: "-0.02em" }}
            >
              See {feature.title.toLowerCase()} on a real patient day.
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              A short walkthrough using your own clinic&apos;s flow, no slides, no sales script.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 font-semibold py-3.5 px-8 rounded-full text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #3eaee0 0%, #1d8bbf 100%)",
                  boxShadow: "0 8px 28px rgba(62, 174, 224, 0.4)",
                }}
              >
                Request a demo
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center justify-center font-semibold py-3.5 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  border: "2px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.85)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                View full product
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other features ── */}
      <section className="py-16 md:py-20" style={{ background: "#f5f9fd" }}>
        <div className="container">
          <h2
            className="font-display font-bold text-xl mb-6"
            style={{ color: "#0e2540" }}
          >
            Explore other features
          </h2>
          <div
            style={{
              display: "flex",
              gap: 12,
              overflowX: "auto",
              paddingBottom: 6,
            }}
          >
            {otherFeatures.map((f) => (
              <Link
                key={f.slug}
                href={`/features/${f.slug}`}
                style={{
                  flexShrink: 0,
                  width: 220,
                  borderRadius: 14,
                  overflow: "hidden",
                  position: "relative",
                  height: 130,
                  border: "1px solid #dcedf8",
                }}
              >
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  sizes="220px"
                  quality={70}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(6,12,30,0.85) 0%, rgba(6,12,30,0.2) 60%, transparent 100%)",
                  }}
                />
                <p
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 12,
                    right: 12,
                    color: "#ffffff",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
