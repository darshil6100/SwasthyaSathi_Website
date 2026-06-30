export default function CompanyStory() {
  return (
    <section className="py-20 md:py-28" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title">
            Transforming healthcare through intelligent technology
          </h2>

          <div className="space-y-6 mt-12">
            <div
              className="pl-7 py-2 rounded-r-xl"
              style={{ borderLeft: "3px solid #3eaee0" }}
            >
              <h3
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "#0e2540" }}
              >
                What we believe
              </h3>
              <p className="leading-relaxed" style={{ color: "#5a7a96" }}>
                Every clinic, regardless of size, deserves access to world-class
                AI technology that improves patient care and operational
                efficiency. By pairing AI with deep healthcare expertise, we
                build tools that give time back to healthcare professionals and
                better outcomes to patients.
              </p>
            </div>

            <div
              className="pl-7 py-2 rounded-r-xl"
              style={{ borderLeft: "3px solid #1b4f9c" }}
            >
              <h3
                className="font-display font-bold text-2xl mb-3"
                style={{ color: "#0e2540" }}
              >
                Our journey
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: "#5a7a96" }}>
                Founded in 2024, Swasthya Sathi began with a simple
                observation: healthcare providers spend more time on
                administrative work than on patient care. Our founders,
                combining technology and healthcare-operations expertise, set
                out to fix that with AI.
              </p>
              <p className="leading-relaxed" style={{ color: "#5a7a96" }}>
                Today, we support clinics across India in delivering better
                care while carrying less administrative weight.
              </p>
            </div>

            {/* Values */}
            <div
              className="rounded-2xl p-8 mt-8"
              style={{ background: "#f5f9fd", border: "1px solid #dcedf8" }}
            >
              <h3
                className="font-display font-bold text-2xl mb-6"
                style={{ color: "#0e2540" }}
              >
                Our values
              </h3>
              <ul className="space-y-5">
                {[
                  {
                    title: "Innovation",
                    description:
                      "We push past the obvious answer to deliver something genuinely useful.",
                    color: "#3eaee0",
                  },
                  {
                    title: "Patient care",
                    description:
                      "Everything we build is judged by whether it improves a patient outcome.",
                    color: "#1b4f9c",
                  },
                  {
                    title: "Integrity",
                    description:
                      "We hold ourselves to the highest standard of data security and ethics.",
                    color: "#3eaee0",
                  },
                  {
                    title: "Collaboration",
                    description:
                      "We build alongside healthcare providers, not in spite of their workflow.",
                    color: "#1b4f9c",
                  },
                ].map((value) => (
                  <li key={value.title} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: value.color + "18", color: value.color }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-semibold mb-0.5" style={{ color: "#0e2540" }}>
                        {value.title}
                      </h4>
                      <p className="text-sm" style={{ color: "#5a7a96" }}>
                        {value.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
