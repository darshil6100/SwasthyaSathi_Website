import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import CTA from "@/components/CTA";

export default function ProductPage() {
  return (
    <>
      <section className="bg-[--sand] pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="section-title">
              Built for the clinic you actually run
            </h1>
            <p className="section-subtitle">
              From the front desk to the consultation room, Swasthya Sathi
              handles the repetitive work so your staff can stay focused on
              people.
            </p>
          </div>
        </div>
      </section>
      <ProductGallery />
      <ProductDetails />
      <CTA />
    </>
  );
}
