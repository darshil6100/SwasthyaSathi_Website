export default function Loading() {
  return (
    <section className="bg-[--sand] py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <div className="h-3 w-28 bg-[--sage] rounded animate-pulse mb-5" />
          <div className="h-12 w-4/5 bg-[--sage] rounded animate-pulse mb-4" />
          <div className="h-4 w-full max-w-xl bg-[--sage] rounded animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-48 bg-white border border-[--line] rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

