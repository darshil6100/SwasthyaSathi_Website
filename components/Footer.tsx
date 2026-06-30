import Link from "next/link";
import Image from "next/image";
import PulseLine from "./PulseLine";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0e2540", color: "#c8dff0" }}>
      {/* Pulse divider top */}
      <div className="opacity-10">
        <PulseLine className="w-full h-10" color="#3eaee0" strokeWidth={1} />
      </div>

      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl">
                <Image
                  src="/logo.png"
                  alt="SwasthyaSathi"
                  width={36}
                  height={36}
                  className="object-contain"
                  priority
                />
              </span>
              <span className="font-display font-bold text-lg" style={{ color: "#ffffff" }}>
                SwasthyaSathi</span>
              
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(200,223,240,0.55)" }}>
              An AI care companion that runs alongside Indian clinics, nursing
              homes and hospitals.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {["Features", "Documentation"].map((item) => (
                <li key={item}>
                  <Link
                    href="/product"
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Blog", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "#3eaee0" }}>
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {["Privacy policy", "Terms of service"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-colors duration-200 hover:text-white"
                    style={{ color: "rgba(200,223,240,0.6)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <p className="text-sm" style={{ color: "rgba(200,223,240,0.4)" }}>
            © {year} Swasthya Sathi. All rights reserved.
          </p>
          <div
            className="flex items-center gap-2 text-xs font-mono"
            style={{ color: "rgba(200,223,240,0.35)" }}
          >
          </div>
        </div>
      </div>
    </footer>
  );
}
