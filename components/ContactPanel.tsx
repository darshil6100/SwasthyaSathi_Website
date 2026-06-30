"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function ContactPanel() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  return (
    <div
      className="rounded-3xl p-7 md:p-10 border"
      style={{ background: "#ffffff", borderColor: "#dcedf8", boxShadow: "0 4px 24px rgba(27,79,156,0.07)" }}
    >
      {formStatus === "success" && (
        <div
          className="mb-6 flex items-start gap-3 px-5 py-4 rounded-xl text-sm font-medium"
          style={{ background: "rgba(62,174,224,0.1)", color: "#1d8bbf", border: "1px solid rgba(62,174,224,0.25)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          Message sent. We&apos;ll be in touch within one business day.
        </div>
      )}
      {formStatus === "error" && (
        <div
          className="mb-6 flex items-start gap-3 px-5 py-4 rounded-xl text-sm font-medium"
          style={{ background: "rgba(232,77,110,0.08)", color: "#e84d6e", border: "1px solid rgba(232,77,110,0.2)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
          </svg>
          Something went wrong. Please try again.
        </div>
      )}
      <ContactForm setFormStatus={setFormStatus} />
    </div>
  );
}
