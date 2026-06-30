"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const prefetchedRef = useRef(new Set<string>());

  /* ─ Prefetch all routes immediately on mount ─ */
  useEffect(() => {
    links.forEach((link) => {
      if (!prefetchedRef.current.has(link.href)) {
        router.prefetch(link.href);
        prefetchedRef.current.add(link.href);
      }
    });
  }, [router]);

  /* ─ Close mobile menu on route change ─ */
  useEffect(() => { setIsOpen(false); }, [pathname]);

  /* ─ Scroll shadow ─ */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ─ Lock body scroll when mobile menu open ─ */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-[--line] shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent"
        }`}
        style={{ "--line": "#dcedf8" } as React.CSSProperties}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* ── Logo ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="SwasthyaSathi"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </span>
              <span
                className="font-display font-bold text-lg tracking-tight"
                style={{ color: "#0e2540" }}
              >
                SwasthyaSathi
              </span>
            </Link>

            {/* ── Desktop links ── */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-[#1b4f9c] bg-[#eef5ff]"
                        : "text-[#5a7a96] hover:text-[#1b4f9c] hover:bg-[#f0f7ff]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full"
                        style={{ background: "#3eaee0" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* ── Desktop CTA ── */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 font-semibold text-sm py-2.5 px-5 rounded-full text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
                boxShadow: "0 4px 16px rgba(27, 79, 156, 0.3)",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
              </svg>
              Book a demo
            </Link>

            {/* ── Mobile hamburger ── */}
            <button
              className="md:hidden relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors hover:bg-[#f0f7ff]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{
                  background: "#0e2540",
                  transform: isOpen ? "translateY(3px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full my-1 transition-all duration-300"
                style={{
                  background: "#0e2540",
                  opacity: isOpen ? 0 : 1,
                  transform: isOpen ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="block w-5 h-0.5 rounded-full transition-all duration-300 origin-center"
                style={{
                  background: "#0e2540",
                  transform: isOpen ? "translateY(-5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className="md:hidden fixed inset-0 z-40 transition-all duration-300"
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
          background: "rgba(14, 37, 64, 0.5)",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <div
        className="md:hidden fixed top-0 right-0 z-50 h-full w-72 bg-white flex flex-col transition-transform duration-300 ease-in-out"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          boxShadow: "-8px 0 40px rgba(14, 37, 64, 0.15)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 h-16 border-b"
          style={{ borderColor: "#dcedf8" }}
        >
          <span className="font-display font-bold text-lg" style={{ color: "#0e2540" }}>
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#f0f7ff]"
            aria-label="Close menu"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a96" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <div className="flex flex-col p-6 gap-1 flex-1">
          {links.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                  active
                    ? "bg-[#eef5ff] text-[#1b4f9c]"
                    : "text-[#5a7a96] hover:bg-[#f0f7ff] hover:text-[#1b4f9c]"
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {active && (
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#3eaee0" }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}

          <div className="mt-auto pt-6 border-t" style={{ borderColor: "#dcedf8" }}>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full font-semibold py-3.5 px-6 rounded-full text-white transition-all duration-200 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
                boxShadow: "0 4px 16px rgba(27, 79, 156, 0.3)",
              }}
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
