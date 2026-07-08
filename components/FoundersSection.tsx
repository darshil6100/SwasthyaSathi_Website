"use client";

import { useState } from "react";

interface Founder {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
  initials: string;
}

const founders: Record<string, Founder> = {
  darshil: {
    name: "Darshil Jadeja",
    title: "Co-Founder",
    bio: "With a vision to revolutionise healthcare through technology, Darshil leads our technical innovation. He has extensive experience building scalable AI systems and healthcare technology solutions that serve real clinical workflows.",
    expertise: ["AI / ML", "Cloud architecture", "Healthcare tech", "Product strategy"],
    initials: "DJ",
  },
  arin: {
    name: "Arin Danish",
    title: "Co-Founder",
    bio: "Arin brings strategic vision and deep industry knowledge to guide Swasthya Sathi's mission. With a background in healthcare operations and business development, he drives the company's growth and market expansion.",
    expertise: ["Healthcare operations", "Business strategy", "Market development", "Clinical insights"],
    initials: "AD",
  },
};

export default function FoundersSection() {
  const [selected, setSelected] = useState<"darshil" | "arin">("darshil");
  const founder = founders[selected];

  return (
    <section className="py-20 md:py-28" style={{ background: "#f5f9fd" }}>
      <div className="container">
        <div className="max-w-xl mb-12">
          <h2 className="section-title">Our co-founders</h2>
        </div>

        {/* Toggle pills */}
        <div
          className="inline-flex p-1 rounded-full mb-10"
          style={{ background: "#e8f0fa", border: "1px solid #dcedf8" }}
        >
          {(["darshil", "arin"] as const).map((key) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className="relative py-2.5 px-6 rounded-full font-semibold text-sm transition-all duration-250"
              style={{
                background: selected === key ? "#1b4f9c" : "transparent",
                color: selected === key ? "#ffffff" : "#5a7a96",
                boxShadow: selected === key ? "0 4px 12px rgba(27,79,156,0.3)" : "none",
              }}
            >
              {founders[key].name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="max-w-3xl">
          <div
            key={selected}
            className="rounded-3xl p-8 md:p-10 border"
            style={{
              background: "#ffffff",
              borderColor: "#dcedf8",
              boxShadow: "0 4px 24px rgba(27,79,156,0.07)",
              animation: "fadeIn 0.3s ease both",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {/* Avatar */}
              <div className="flex justify-center md:justify-start">
                <div
                  className="w-40 h-40 rounded-2xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
                  }}
                >
                  <span className="font-display font-bold text-5xl text-white opacity-90">
                    {founder.initials}
                  </span>
                  {/* Decorative cross pattern from logo */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="md:col-span-2">
                <h3
                  className="font-display font-bold text-2xl md:text-3xl mb-1"
                  style={{ color: "#0e2540", letterSpacing: "-0.02em" }}
                >
                  {founder.name}
                </h3>
                <p
                  className="font-semibold text-sm mb-4 font-mono tracking-wide"
                  style={{ color: "#3eaee0" }}
                >
                  {founder.title}
                </p>

                <p className="leading-relaxed mb-6" style={{ color: "#5a7a96" }}>
                  {founder.bio}
                </p>

                {/* Expertise tags */}
                <div>
                  <h4
                    className="font-mono text-xs uppercase tracking-wider mb-3"
                    style={{ color: "#5a7a96" }}
                  >
                    Areas of expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium px-3.5 py-1.5 rounded-full"
                        style={{
                          background: "rgba(62, 174, 224, 0.1)",
                          color: "#1b4f9c",
                          border: "1px solid rgba(62, 174, 224, 0.2)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div
                  className="mt-6 pt-6 flex gap-5 border-t"
                  style={{ borderColor: "#dcedf8" }}
                >
                  {["LinkedIn", "Twitter"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="font-semibold text-sm transition-colors duration-200 hover:text-[#3eaee0]"
                      style={{ color: "#1b4f9c" }}
                    >
                      {platform}
                    </a>
                  ))}
                  <a
                    href="mailto:contact@swasthyasathi.in"
                    className="font-semibold text-sm transition-colors duration-200 hover:text-[#0e2540]"
                    style={{ color: "#5a7a96" }}
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
