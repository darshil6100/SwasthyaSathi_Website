"use client";

import { useEffect, useState } from "react";

type BlogPost = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [blogStatus, setBlogStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const res = await fetch("/api/blogs", { signal: controller.signal });
        if (!res.ok) throw new Error("Failed");
        const data = (await res.json()) as { blogs: BlogPost[] };
        setBlogPosts(data.blogs);
        setBlogStatus("success");
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error(err);
        setBlogStatus("error");
      }
    };

    load();
    return () => controller.abort();
  }, []);

  return (
    <div className="mt-20 md:mt-24">
      <div className="max-w-2xl mb-10">
        <h2 className="section-title">Ideas for calmer clinic days</h2>
        <p className="section-subtitle">
          Notes on patient flow, clinical operations, and using AI where it
          actually saves time.
        </p>
      </div>

      {blogStatus === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border p-6 min-h-64 overflow-hidden relative"
              style={{ background: "#ffffff", borderColor: "#dcedf8" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(62,174,224,0.06) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.5s infinite",
                }}
              />
              <div className="h-3 w-20 rounded-full mb-5" style={{ background: "#dcedf8" }} />
              <div className="h-6 w-4/5 rounded-lg mb-3" style={{ background: "#dcedf8" }} />
              <div className="space-y-2">
                <div className="h-3 rounded-full" style={{ background: "#eef5fb" }} />
                <div className="h-3 w-5/6 rounded-full" style={{ background: "#eef5fb" }} />
                <div className="h-3 w-2/3 rounded-full" style={{ background: "#eef5fb" }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {blogStatus === "error" && (
        <div
          className="rounded-2xl border p-6"
          style={{ background: "#ffffff", borderColor: "#dcedf8", color: "#5a7a96" }}
        >
          Blog posts are unavailable right now.
        </div>
      )}

      {blogStatus === "success" && blogPosts.length === 0 && (
        <div
          className="rounded-2xl border p-6"
          style={{ background: "#ffffff", borderColor: "#dcedf8", color: "#5a7a96" }}
        >
          No blog posts have been added yet.
        </div>
      )}

      {blogStatus === "success" && blogPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border p-6 flex flex-col min-h-64 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              style={{
                background: "#ffffff",
                borderColor: "#dcedf8",
                boxShadow: "0 2px 8px rgba(27,79,156,0.05)",
              }}
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <p
                  className="font-mono text-[0.68rem] uppercase tracking-wider font-semibold"
                  style={{ color: "#3eaee0" }}
                >
                  {post.category}
                </p>
                <span className="text-xs" style={{ color: "#5a7a96" }}>
                  {post.readTime}
                </span>
              </div>
              <h3
                className="font-display font-bold text-xl leading-tight mb-3"
                style={{ color: "#0e2540" }}
              >
                {post.title}
              </h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "#5a7a96" }}>
                {post.excerpt}
              </p>
              <button
                type="button"
                className="mt-6 self-start text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200 hover:gap-2.5"
                style={{ color: "#1b4f9c" }}
              >
                Read article
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
