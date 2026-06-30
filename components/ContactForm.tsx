"use client";

import { useState } from "react";

interface ContactFormProps {
  setFormStatus: (status: "idle" | "loading" | "success" | "error") => void;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1.5px solid #dcedf8",
  borderRadius: "0.75rem",
  background: "#f5f9fd",
  color: "#0e2540",
  fontSize: "0.9375rem",
  outline: "none",
  transition: "border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
};

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-sm font-semibold mb-2"
        style={{ color: "#0e2540" }}
      >
        {label}
        {required && <span style={{ color: "#3eaee0" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm({ setFormStatus }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const getFocusStyle = (name: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: focused === name ? "#3eaee0" : "#dcedf8",
    boxShadow: focused === name ? "0 0 0 3px rgba(62,174,224,0.15)" : "none",
    background: focused === name ? "#ffffff" : "#f5f9fd",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setFormStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" required>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            required
            placeholder="Your name"
            style={getFocusStyle("name")}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            required
            placeholder="your@email.com"
            style={getFocusStyle("email")}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Phone number">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            placeholder="+91 XXXXX XXXXX"
            style={getFocusStyle("phone")}
          />
        </Field>
        <Field label="Clinic / company name">
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
            placeholder="Your clinic or company"
            style={getFocusStyle("company")}
          />
        </Field>
      </div>

      <Field label="Subject" required>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          required
          style={getFocusStyle("subject")}
        >
          <option value="">Select a subject</option>
          <option value="demo">Request a demo</option>
          <option value="pricing">Pricing inquiry</option>
          <option value="support">Support</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
      </Field>

      <Field label="Message" required>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          required
          rows={5}
          placeholder="Tell us how we can help..."
          style={{ ...getFocusStyle("message"), resize: "none" }}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full font-semibold py-3.5 px-6 rounded-full text-white transition-all duration-200 hover:scale-[1.01] hover:shadow-lg active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
        style={{
          background: isSubmitting
            ? "#5a7a96"
            : "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
          boxShadow: isSubmitting ? "none" : "0 6px 20px rgba(27,79,156,0.3)",
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
            Sending…
          </span>
        ) : (
          "Send message"
        )}
      </button>

      <p className="text-xs" style={{ color: "#5a7a96" }}>
        <span style={{ color: "#3eaee0" }}>*</span> Required fields. We respect your privacy and
        will only use your information to respond to your inquiry.
      </p>
    </form>
  );
}
