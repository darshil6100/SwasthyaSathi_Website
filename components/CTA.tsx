import Link from "next/link";
import PulseLine from "./PulseLine";

export default function CTA() {
  return (
    <section
      className="relative py-24 overflow-hidden text-white"
      style={{
        background: "linear-gradient(150deg, #0f3270 0%, #1b4f9c 55%, #2563bb 100%)",
      }}
    >
      {/* Decorative pulse line top */}
      <PulseLine
        className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full opacity-15"
        color="#3eaee0"
        strokeWidth={1.5}
        animated
      />

      {/* Decorative pulse line bottom (flipped) */}
      <PulseLine
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full opacity-10 rotate-180"
        color="#7acfef"
        strokeWidth={1}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(62, 174, 224, 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          

          <h2
            className="font-display font-bold leading-tight mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.8vw, 3rem)", letterSpacing: "-0.02em" }}
          >
            Let&apos;s see it run on a real day
            <br />
            <span style={{ color: "#3eaee0" }}>at your clinic.</span>
          </h2>

          <p
            className="text-lg mb-10 max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            A 20-minute walkthrough, using your own patient flow - no slides,
            no sales script.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 font-semibold py-4 px-9 rounded-full text-white transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #3eaee0 0%, #1d8bbf 100%)",
                boxShadow: "0 8px 28px rgba(62, 174, 224, 0.4)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
              </svg>
              Request a demo today
            </Link>
            <Link
              href="/product"
              className="inline-flex items-center justify-center font-semibold py-4 px-9 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                border: "2px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              View the product
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
