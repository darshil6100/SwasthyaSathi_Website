import CompanyStory from "@/components/CompanyStory";
import FoundersSection from "@/components/FoundersSection";
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[--sand] pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="section-title">
              Empowering healthcare providers to focus on what matters
            </h1>
            <p className="section-subtitle">
              Administrative work shouldn&apos;t take time away from patient care. We&apos;re building AI-powered solutions to help clinics and hospitals reduce the burden of paperwork and streamline operations.
            </p>
          </div>
        </div>
      </section>
      <CompanyStory />
      <FoundersSection />
      <CTA />
    </>
  );
}
