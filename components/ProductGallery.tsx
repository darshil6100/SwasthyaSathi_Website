"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const screens = [
  {
    id: 1,
    title: "Doctor dashboard",
    headline: "Your entire clinic, at a glance",
    description:
      "Live KPIs, patient load, revenue trends, and pending actions — all surfaced before your first consultation.",
    src: "/Dashboard Images/Doctor Dashboard.png",
    accent: "#00D4AA",
  },
  {
    id: 2,
    title: "Appointment scheduling",
    headline: "Zero scheduling conflicts, ever",
    description:
      "AI-optimised slots, automated reminders, and real-time waitlist management reduce no-shows by up to 40%.",
    src: "/Dashboard Images/Appointment Schedule.png",
    accent: "#5B8BF5",
  },
  {
    id: 3,
    title: "Clinical notes",
    headline: "Charting in seconds, not minutes",
    description:
      "Voice-to-text with clinical intelligence fills structured notes while you focus on the patient in front of you.",
    src: "/Dashboard Images/Clinical Notes.png",
    accent: "#A78BFA",
  },
  {
    id: 4,
    title: "Inventory analysis",
    headline: "Never run short on critical stock",
    description:
      "Predictive restocking alerts and supplier tracking keep consumables and medications in perfect supply.",
    src: "/Dashboard Images/Inventory Analysis.png",
    accent: "#FB923C",
  },
  {
    id: 5,
    title: "Revenue intelligence",
    headline: "Understand every rupee earned",
    description:
      "Deep-dive financial dashboards surface billing gaps, top procedures, and month-over-month growth in one view.",
    src: "/Dashboard Images/Revenue Intelligence.png",
    accent: "#34D399",
  },
];

export default function ProductGallery() {
  const [activeId, setActiveId] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const active = screens.find((s) => s.id === activeId)!;

  const handleSelect = (id: number) => {
    if (id === activeId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveId(id);
      setIsTransitioning(false);
    }, 180);
  };

  // Auto-cycle
  useEffect(() => {
    const t = setInterval(() => {
      setActiveId((prev) => {
        const idx = screens.findIndex((s) => s.id === prev);
        return screens[(idx + 1) % screens.length].id;
      });
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        background: "#060F23",
        padding: "96px 0 112px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 10%, rgba(0,212,170,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 56, maxWidth: 560 }}>
          <h2
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#F1F5FF",
              margin: 0,
            }}
          >
            A look at the screens
          </h2>
          <p
            style={{
              marginTop: 14,
              color: "rgba(241,245,255,0.45)",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            A peek inside the platform your team will actually use, every day.
          </p>
        </div>

        {/* Main layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 260px",
            gap: 20,
            alignItems: "start",
          }}
          className="product-gallery-grid"
        >
          {/* ── Left: Featured panel ── */}
          <div>
            {/* Browser chrome */}
            <div
              style={{
                borderRadius: "14px 14px 0 0",
                background: "#0D1B35",
                border: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "none",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", gap: 6 }}>
                {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                      opacity: 0.8,
                      display: "block",
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  flex: 1,
                  height: 20,
                  borderRadius: 4,
                  background: "rgba(255,255,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6rem",
                    color: "rgba(255,255,255,0.25)",
                  }}
                >
                  swasthyasathi.in/dashboard
                </span>
              </div>
            </div>

            {/* Screenshot area */}
            <div
              style={{
                position: "relative",
                borderRadius: "0 0 14px 14px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                borderTop: "none",
                background: "#0A1628",
              }}
            >
              {/* Glow halo behind screenshot */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -40,
                  background: `radial-gradient(ellipse 60% 40% at 50% 50%, ${active.accent}22 0%, transparent 70%)`,
                  transition: "background 0.5s ease",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? "scale(0.985)" : "scale(1)",
                  transition: "opacity 0.2s ease, transform 0.2s ease",
                  zIndex: 1,
                  lineHeight: 0,
                }}
              >
                <Image
                  src={active.src}
                  alt={active.title}
                  width={1600}
                  height={1000}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 860px"
                  priority
                  quality={95}
                />
              </div>

              {/* Bottom overlay info strip */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "60px 24px 24px",
                  background:
                    "linear-gradient(0deg, rgba(6,15,35,0.97) 0%, rgba(6,15,35,0.7) 55%, transparent 100%)",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: active.accent,
                    marginBottom: 6,
                    transition: "color 0.3s ease",
                  }}
                >
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                    fontWeight: 700,
                    color: "#F1F5FF",
                    margin: 0,
                  }}
                >
                  {active.headline}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "rgba(241,245,255,0.55)",
                    marginTop: 6,
                    lineHeight: 1.6,
                    maxWidth: 480,
                  }}
                >
                  {active.description}
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div
              style={{
                display: "flex",
                gap: 4,
                marginTop: 12,
              }}
            >
              {screens.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSelect(s.id)}
                  title={s.title}
                  style={{
                    flex: 1,
                    height: 3,
                    borderRadius: 2,
                    border: "none",
                    cursor: "pointer",
                    background:
                      s.id === activeId
                        ? active.accent
                        : "rgba(255,255,255,0.12)",
                    transition: "background 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Thumbnail strip ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {screens.map((screen) => {
              const isActive = screen.id === activeId;
              return (
                <button
                  key={screen.id}
                  onClick={() => handleSelect(screen.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: `1px solid ${
                      isActive
                        ? `${screen.accent}50`
                        : "rgba(255,255,255,0.07)"
                    }`,
                    background: isActive
                      ? `${screen.accent}12`
                      : "rgba(255,255,255,0.03)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "20%",
                        bottom: "20%",
                        width: 3,
                        borderRadius: 2,
                        background: screen.accent,
                      }}
                    />
                  )}

                  {/* Thumbnail */}
                  <div
                    style={{
                      width: 64,
                      height: 42,
                      borderRadius: 5,
                      overflow: "hidden",
                      flexShrink: 0,
                      position: "relative",
                      background: "#0A1628",
                      border: `1px solid ${
                        isActive ? `${screen.accent}40` : "rgba(255,255,255,0.08)"
                      }`,
                    }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      width={160}
                      height={100}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "top left",
                      }}
                      sizes="60px"
                      quality={80}
                    />
                  </div>

                  {/* Label */}
                  <div style={{ minWidth: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-mono, monospace)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: isActive
                          ? screen.accent
                          : "rgba(241,245,255,0.3)",
                        marginBottom: 3,
                        transition: "color 0.2s",
                      }}
                    >
                    </p>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: isActive ? 600 : 400,
                        color: isActive
                          ? "#F1F5FF"
                          : "rgba(241,245,255,0.45)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        transition: "color 0.2s, font-weight 0.2s",
                        margin: 0,
                      }}
                    >
                      {screen.title}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* CTA underneath thumbnails */}
            <div
              style={{
                marginTop: 16,
                padding: "18px 16px",
                borderRadius: 12,
                background:
                  "linear-gradient(135deg, rgba(0,212,170,0.1) 0%, rgba(27,79,156,0.12) 100%)",
                border: "1px solid rgba(0,212,170,0.18)",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#F1F5FF",
                  marginBottom: 4,
                }}
              >
                See it live
              </p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(241,245,255,0.45)",
                  lineHeight: 1.5,
                  marginBottom: 14,
                }}
              >
                Walk through every screen with a product specialist.
              </p>
              <a
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  padding: "9px 16px",
                  borderRadius: 8,
                  background: "#00D4AA",
                  color: "#060F23",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                Book a demo
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .product-gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}