"use client";

import { useState } from "react";

const sections = [
  {
    id: "features",
    title: "Key features",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    accentColor: "#1b4f9c",
    accentLight: "#e8f1fc",
    content: [
      {
        heading: "Smart patient check-in",
        description: "Automated registration and data capture with AI-powered form intelligence that learns your clinic's patterns over time.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        ),
      },
      {
        heading: "Appointment management",
        description: "Intelligent scheduling that optimises clinic time, reduces no-shows, and sends automated reminders to patients.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        ),
      },
      {
        heading: "Clinical documentation",
        description: "AI-assisted medical record creation that cuts charting time by up to 70% while improving accuracy and completeness.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        ),
      },
      {
        heading: "Real-time insights",
        description: "A live dashboard with actionable analytics on clinic operations, revenue trends, and patient health patterns.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: "technical",
    title: "Technical specifications",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    accentColor: "#0f6e56",
    accentLight: "#e1f5ee",
    content: [
      {
        heading: "Platform",
        description: "Cloud-based and accessible from any device with an internet connection — no hardware purchases or IT team required.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        ),
      },
      {
        heading: "Security",
        description: "HIPAA-aligned with end-to-end encryption, role-based access control, and regular independent security audits.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
        ),
      },
      {
        heading: "Integration",
        description: "Connects via open APIs with the clinic management, billing, and lab systems you already use — no migration needed.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>
          </svg>
        ),
      },
      {
        heading: "Support",
        description: "24/7 customer support in Hindi and English, with a dedicated account manager for Professional and Enterprise plans.",
        icon: (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        ),
      },
    ],
  },
  {
  id: "deployment",
  title: "Implementation & scalability",
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20"/>
    </svg>
  ),
  accentColor: "#854f0b",
  accentLight: "#faeeda",
  content: [
    {
      heading: "Quick setup",
      description:
        "Get started with a streamlined onboarding process designed to integrate smoothly into your clinic’s existing workflow.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
    },
    {
      heading: "Tailored to your practice",
      description:
        "Flexible configurations adapted to your clinic size, specialty, and patient flow for a personalized operational experience.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 7L9 18l-5-5"/>
        </svg>
      ),
    },
    {
      heading: "Built to scale",
      description:
        "Designed to support growing practices, multi-doctor teams, and multi-location healthcare networks with ease.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18"/>
          <path d="M12 3v18"/>
        </svg>
      ),
    },
    {
      heading: "Continuous support",
      description:
        "Dedicated onboarding, training, and ongoing assistance to ensure your team gets maximum value from the platform.",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M8 2v4M16 2v4"/>
        </svg>
      ),
    },
  ],
}
];

export default function ProductDetails() {
  const [expanded, setExpanded] = useState<string | null>("features");

  return (
    <section className="py-20 md:py-28" style={{ background: "#f5f9fd" }}>
      <div className="container">

        {/* Header */}
        <div className="max-w-xl mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#0f1f3d", fontFamily: "var(--font-display, sans-serif)" }}
          >
            Product details
          </h2>
          <p style={{ color: "#4a6080", lineHeight: "1.7" }}>
            Everything your clinic needs, built into one platform — from the first patient
            interaction to end-of-day revenue reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl">

          {/* Left: accordion */}
          <div className="lg:col-span-3 space-y-3">
            {sections.map((section) => {
              const open = expanded === section.id;
              return (
                <div
                  key={section.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "#ffffff",
                    border: open
                      ? `1.5px solid ${section.accentColor}30`
                      : "1.5px solid #dcedf8",
                    boxShadow: open
                      ? `0 8px 32px ${section.accentColor}12`
                      : "0 1px 4px rgba(27,79,156,0.04)",
                  }}
                >
                  {/* Trigger */}
                  <button
                    onClick={() => setExpanded(open ? null : section.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    style={{ background: "transparent" }}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: open ? section.accentColor : section.accentLight,
                          color: open ? "#ffffff" : section.accentColor,
                        }}
                      >
                        {section.icon}
                      </span>
                      <div>
                        <p
                          className="font-semibold text-base leading-tight"
                          style={{ color: open ? section.accentColor : "#0f1f3d" }}
                        >
                          {section.title}
                        </p>
                      </div>
                    </div>

                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: open ? section.accentColor : "#f0f7ff",
                        color: open ? "#ffffff" : "#8aa5be",
                        transform: open ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </span>
                  </button>

                  {/* Panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <div
                        className="px-6 pb-5 pt-1 border-t"
                        style={{ borderColor: "#f0f7ff" }}
                      >
                        <div className="space-y-0">
                          {section.content.map((item, i) => (
                            <div
                              key={i}
                              className="flex gap-4 py-4 border-b last:border-b-0"
                              style={{ borderColor: "#f0f7ff" }}
                            >
                              <span
                                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{
                                  background: section.accentLight,
                                  color: section.accentColor,
                                }}
                              >
                                {item.icon}
                              </span>
                              <div>
                                <h4
                                  className="font-semibold text-sm mb-1"
                                  style={{ color: "#0f1f3d" }}
                                >
                                  {item.heading}
                                </h4>
                                <p
                                  className="text-sm leading-relaxed"
                                  style={{ color: "#5a7a96" }}
                                >
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: sticky info card + CTA */}
          <div className="lg:col-span-2 flex flex-col gap-5">

            {/* Trust card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "#ffffff",
                border: "1.5px solid #dcedf8",
                boxShadow: "0 1px 4px rgba(27,79,156,0.04)",
              }}
            >
              <p
                className="font-mono text-[0.6rem] tracking-widest uppercase font-semibold mb-4"
                style={{ color: "#8aa5be" }}
              >
                Why clinics choose us
              </p>
            
              <div className="space-y-4">
                {[
                  {
                    title: "Streamlined clinical documentation",
                    label: "Reduce manual effort with AI-assisted charting",
                  },
                  {
                    title: "Faster patient workflows",
                    label: "Designed to improve consultation efficiency",
                  },
                  {
                    title: "Reliable cloud-based platform",
                    label: "Built for secure and scalable operations",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <span
                      className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: "#1b4f9c" }}
                    />
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#0f1f3d" }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-sm leading-snug mt-1"
                        style={{ color: "#5a7a96" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div
                className="mt-5 pt-5 border-t space-y-2"
                style={{ borderColor: "#f0f7ff" }}
              >
                {[
                  "No hardware purchases required",
                  "Quick onboarding and guided setup",
                  "Supports Multi Languages",
                  "Flexible for every clinic workflow",
                  "Dedicated training and support",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2.5 text-sm"
                    style={{ color: "#4a6080" }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "#e8f1fc", color: "#1b4f9c" }}
                    >
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {point}
                  </div>
                ))}
              </div>
            </div>
              
            {/* CTA card */}
            <div
              className="rounded-2xl p-6 text-white"
              style={{
                background: "linear-gradient(145deg, #0f2d5e 0%, #1b4f9c 55%, #2563c4 100%)",
                boxShadow: "0 12px 40px rgba(27,79,156,0.28)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>

              <h3
                className="font-bold text-lg mb-2"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                Ready to get started?
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                Tell us about your clinic and we&apos;ll tailor a setup to your specific
                workflow and patient volume.
              </p>

              <a
                href="/contact"
                className="flex items-center justify-center gap-2 font-semibold text-sm py-3 px-5 rounded-xl transition-all duration-200 hover:scale-[1.02] w-full"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#ffffff",
                  backdropFilter: "blur(4px)",
                }}
              >
                Schedule a demo
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>

              <p className="text-center text-xs mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Usually responds within 2 business hours
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}