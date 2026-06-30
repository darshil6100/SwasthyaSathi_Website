"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Smart check-in",
    description:
      "Patients register and share history through a guided AI form - front desk reviews instead of re-typing.",
    accent: "#3eaee0",
    bg: "rgba(62, 174, 224, 0.07)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    title: "Clinical documentation",
    description:
      "Consultation notes are drafted as the doctor speaks, structured and ready for review in seconds.",
    accent: "#1b4f9c",
    bg: "rgba(27, 79, 156, 0.07)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Real-time insights",
    description:
      "A live dashboard surfaces patient load, no-show risk and revenue trends without manual reporting.",
    accent: "#3eaee0",
    bg: "rgba(62, 174, 224, 0.07)",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Lower running cost",
    description:
      "Less administrative headcount per patient seen, with savings that compound as your clinic grows.",
    accent: "#1b4f9c",
    bg: "rgba(27, 79, 156, 0.07)",
  },
];

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-7 rounded-2xl border cursor-default transition-all duration-300"
      style={{
        background: hovered ? feature.bg : "#ffffff",
        borderColor: hovered ? feature.accent + "40" : "#dcedf8",
        transform: visible
          ? hovered
            ? "translateY(-4px)"
            : "translateY(0)"
          : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.4s ease ${index * 80}ms, opacity 0.4s ease ${index * 80}ms, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease`,
        boxShadow: hovered
          ? `0 12px 32px ${feature.accent}20`
          : "0 1px 4px rgba(14,37,64,0.06)",
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
        style={{
          background: hovered ? feature.accent : feature.bg,
          color: hovered ? "#ffffff" : feature.accent,
        }}
      >
        {feature.icon}
      </div>

      <h3
        className="font-display font-semibold text-lg mb-2.5 transition-colors duration-300"
        style={{ color: hovered ? feature.accent : "#0e2540" }}
      >
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#5a7a96" }}>
        {feature.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 origin-left"
        style={{
          background: feature.accent,
          transform: hovered ? "scaleX(1)" : "scaleX(0)",
        }}
      />
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="max-w-xl mb-14">
          <h2 className="section-title">One assistant, four moments that matter</h2>
          <p className="section-subtitle">
            Swasthya Sathi sits at each step of a visit - not as another
            dashboard to check, but as the work getting done in the background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
