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
              We started where the paperwork was
            </h1>
            <p className="section-subtitle">
              Swasthya Sathi exists because clinical teams were spending more
              time on forms than on patients. Here&apos;s who we are and why we
              build the way we do.
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
