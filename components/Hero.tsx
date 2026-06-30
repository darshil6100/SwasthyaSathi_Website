import Link from "next/link";
import PulseLine from "./PulseLine";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32"
      style={{
        background: "linear-gradient(160deg, #f5f9fd 0%, #eef5fb 40%, #e8f0fa 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, #3eaee0 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-16 w-72 h-72 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #1b4f9c 0%, transparent 70%)",
        }}
      />

      {/* Faint ECG line behind content */}
      <PulseLine
        className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-36 w-[130%] -translate-x-[5%] opacity-[0.06]"
        color="#1b4f9c"
        strokeWidth={1.5}
      />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          {/* ── Left: copy ── */}
          <div>

            <h1
              className="font-display font-bold leading-[1.04] tracking-tight overflow-visible"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 4rem)",
                color: "#0e2540",
              }}
            >
              The quiet assistant
              <br />
              running beside{" "}
              <span
                className="italic"
                style={{
                  color: "#3eaee0",
                }}
              >
                every
              </span>
              <br />
              patient visit.
            </h1>

            <p
              className="mt-6 text-lg leading-relaxed max-w-md"
              style={{ color: "#5a7a96" }}
            >
              Swasthya Sathi automates check-in, clinical notes and follow-up
              with AI built for the realities of Indian clinics, nursing homes
              and hospitals, so your team spends less time on paperwork and
              more time on care.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mt-9">
              <Link
                href="/contact"
                className="text-center font-semibold py-3.5 px-8 rounded-full text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
                  boxShadow: "0 6px 24px rgba(27, 79, 156, 0.35)",
                }}
              >
                Book a demo
              </Link>
              <Link
                href="/product"
                className="text-center font-semibold py-3.5 px-8 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  border: "2px solid rgba(27, 79, 156, 0.25)",
                  color: "#1b4f9c",
                  background: "rgba(27, 79, 156, 0.04)",
                }}
              >
                See the product
              </Link>
            </div>

            {/* Trust bar */}
            <div
              className="flex items-center gap-6 mt-10 pt-8 border-t"
              style={{ borderColor: "rgba(27, 79, 156, 0.1)" }}
            >
              {[
                { val: "60%", label: "less admin time" },
                { val: "24/7", label: "automated check-in" },
                { val: "30 days", label: "free trial" },
              ].map((stat) => (
                <div key={stat.val}>
                  <p className="font-display font-bold text-xl" style={{ color: "#1b4f9c" }}>
                    {stat.val}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#5a7a96" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: floating card ── */}
          <div className="relative">
            <div
              className="rounded-3xl p-7 text-white"
              style={{
                background: "linear-gradient(150deg, #0f3270 0%, #1b4f9c 50%, #2d69c4 100%)",
                boxShadow: "0 24px 64px rgba(15, 50, 112, 0.4)",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-6">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(62, 174, 224, 0.2)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3eaee0" strokeWidth="2.5" strokeLinecap="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "#7acfef" }}>
                  Inside a typical week
                </span>
              </div>

              {/* Metrics */}
              <div className="space-y-5">
                {[
                  { val: "60%", label: "less time on admin and documentation", color: "#3eaee0" },
                  { val: "24 / 7", label: "automated check-in and reminders, no extra staff", color: "#7acfef" },
                  { val: "₹0", label: "upfront cost during your 30-day trial", color: "#3eaee0" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-baseline gap-2">
                      <p
                        className="font-display font-bold"
                        style={{ fontSize: "2rem", color: item.color }}
                      >
                        {item.val}
                      </p>
                    </div>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {item.label}
                    </p>
                    {i < 2 && (
                      <div
                        className="mt-4 h-px"
                        style={{ background: "rgba(255,255,255,0.08)" }}
                      />
                    )}
                    {i < 2 && <div style={{ marginBottom: "1.25rem" }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative accents */}
            <div
              className="absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl -z-10"
              style={{ background: "rgba(62, 174, 224, 0.12)" }}
            />
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-xl -z-10"
              style={{ background: "rgba(27, 79, 156, 0.1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
