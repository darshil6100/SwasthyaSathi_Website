"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const slides = [
  {
    title: "Multilingual voice capture",
    description:
      "Patients speak in their own regional language and auto language transcription lets the doctor follow along in real time, in-person or over video consults.",
    image: "/features_images/Multilingual Voice.png",
    accent: "#3B82F6",
  },
  {
    title: "AI diagnosis & smart prescription",
    description:
      "Symptoms and history are turned into a structured clinical picture, with prescription suggestions the doctor reviews and signs off in seconds.",
    image: "/features_images/AI Diagnosis & Smart Prescription.png",
    accent: "#8B5CF6",
  },
  {
    title: "AI alerts",
    description:
      "Drug interactions, abnormal vitals and follow-up risks are flagged automatically so nothing slips through during a busy clinic day.",
    image: "/features_images/AI Alerts.png",
    accent: "#EF4444",
  },
  {
    title: "Lab to clinic integration & analysis",
    description:
      "Lab results flow straight into the patient record, with AI analysis surfacing what matters before the doctor even opens the report.",
    image: "/features_images/Lab to clinic Integration.png",
    accent: "#06B6D4",
  },
  {
    title: "AI call assistant & scheduler",
    description:
      "An AI voice assistant answers calls, books and reschedules appointments, and sends reminders without adding to your front-desk headcount.",
    image: "/features_images/AI call assistant & schedular.png",
    accent: "#10B981",
  },
  {
    title: "Inventory management",
    description:
      "Stock levels, expiries and reorder points are tracked automatically, with low-stock alerts before they become a problem.",
    image: "/features_images/Inventory Management.png",
    accent: "#F59E0B",
  },
  {
    title: "Revenue intelligence",
    description:
      "AI surfaces revenue trends, leakage and growth opportunities across your clinic so decisions are backed by data, not guesswork.",
    image: "/features_images/Revenue Intelligence.png",
    accent: "#00D4AA",
  },
];

const AUTO_PLAY_MS = 4500;

export default function ShowcaseSlider() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) => {
    const next = (i + slides.length) % slides.length;
    if (next === active) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActive(next);
      setIsTransitioning(false);
    }, 200);
    setPaused(true);
  };

  const slide = slides[active];

  return (
    <section className="py-12 md:py-16" style={{ background: "#f5f9fd" }}>
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div className="max-w-xl">
            <p
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.625rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
                color: "#1b4f9c",
                marginBottom: 8,
              }}
            >
              Platform features
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight mb-2"
              style={{ color: "#0f1f3d", fontFamily: "var(--font-display, sans-serif)" }}
            >
              A walkthrough of the platform
            </h2>
            <p style={{ color: "#4a6080", lineHeight: "1.6", fontSize: "0.875rem" }}>
              Explore the moments SwasthyaSathi handles for your clinic — click any
              feature to explore it on the product page.
            </p>
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              aria-label="Previous slide"
              onClick={() => goTo(active - 1)}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid #cce0f5",
                background: "#ffffff",
                color: "#1b4f9c",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(27,79,156,0.08)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span style={{ fontFamily: "monospace", fontSize: "0.75rem", color: "#8aa5be", minWidth: 36, textAlign: "center" }}>
              {active + 1} / {slides.length}
            </span>
            <button
              aria-label="Next slide"
              onClick={() => goTo(active + 1)}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid #cce0f5",
                background: "#ffffff",
                color: "#1b4f9c",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(27,79,156,0.08)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Main slide ── */}
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 16px 48px rgba(15,31,61,0.18)",
            background: "#0A1628",
            /* KEY FIX: fixed height so it doesn't blow out the viewport */
            height: "clamp(320px, 45vh, 500px)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* All slide images stacked; only active is visible */}
          {slides.map((s, i) => (
            <div
              key={s.title}
              style={{
                position: "absolute",
                inset: 0,
                opacity: i === active ? (isTransitioning ? 0 : 1) : 0,
                transition: "opacity 0.35s ease",
                zIndex: i === active ? 1 : 0,
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                quality={95}
                priority={i === 0}
                style={{
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          ))}

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(6,12,30,0.92) 0%, rgba(6,12,30,0.45) 45%, rgba(6,12,30,0.05) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Accent glow at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              background: slide.accent,
              zIndex: 5,
              transition: "background 0.4s ease",
              boxShadow: `0 0 20px ${slide.accent}80`,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 3,
              padding: "clamp(24px, 4vw, 40px) clamp(20px, 4vw, 36px) clamp(20px, 3vw, 28px)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "clamp(1.15rem, 2.2vw, 1.6rem)",
                fontWeight: 700,
                color: "#F1F5FF",
                margin: "0 0 6px",
                lineHeight: 1.25,
                maxWidth: 560,
              }}
            >
              {slide.title}
            </h3>

            <p
              style={{
                color: "rgba(241,245,255,0.65)",
                fontSize: "clamp(0.78rem, 1.2vw, 0.875rem)",
                lineHeight: 1.6,
                maxWidth: 480,
                margin: "0 0 16px",
              }}
            >
              {slide.description}
            </p>

            <button
              onClick={() => router.push("/product")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 16px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              Explore in product
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Thumbnail strip ── */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 12,
            overflowX: "auto",
            paddingBottom: 4,
            scrollbarWidth: "none",
          }}
        >
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              aria-label={`Go to: ${s.title}`}
              style={{
                flexShrink: 0,
                position: "relative",
                width: 96,
                height: 58,
                borderRadius: 8,
                overflow: "hidden",
                border: `2px solid ${active === i ? s.accent : "transparent"}`,
                opacity: active === i ? 1 : 0.5,
                transform: active === i ? "scale(1.05)" : "scale(1)",
                transition: "all 0.25s ease",
                cursor: "pointer",
                background: "#0A1628",
                padding: 0,
              }}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                sizes="96px"
                quality={60}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(6,12,30,0.45)" }} />
              <span
                style={{
                  position: "absolute",
                  bottom: 4,
                  left: 5,
                  right: 5,
                  color: "#fff",
                  fontSize: "7px",
                  fontWeight: 600,
                  lineHeight: 1.3,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                }}
              >
                {s.title}
              </span>
              {active === i && (
                <div
                  style={{
                    position: "absolute", bottom: 0, left: 0, right: 0,
                    height: 2, background: s.accent,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* ── Progress dots ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 5, marginTop: 12 }}>
          {slides.map((s, i) => (
            <button
              key={s.title}
              onClick={() => goTo(i)}
              style={{
                height: 5,
                width: active === i ? 24 : 5,
                borderRadius: 3,
                background: active === i ? slide.accent : "#c8dff0",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}