// app/blog/page.tsx

import { client } from "@/lib/sanity";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Blog — SwasthyaSathi",
description: "Notes on building AI for Indian clinics, from the SwasthyaSathi team.",
};

interface BlogListItem {
slug: string;
title: string;
category: string;
readTime: string;
publishedAt: string;
excerpt: string | null;
}

const POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  category,
  readTime,
  publishedAt,
  excerpt
}`;

async function getPosts(): Promise<BlogListItem[]> {
return client.fetch(POSTS_QUERY);
}

function formatDate(dateStr: string): string {
return new Date(dateStr).toLocaleDateString("en-IN", {
year: "numeric",
month: "long",
day: "numeric",
});
}

export default async function BlogPage() {
const posts = await getPosts();
const [featured, ...rest] = posts;

return (
<main style={{ background: "#ffffff" }}>
{/* Header */}
<section
className="pt-32 pb-14 md:pt-40 md:pb-20"
style={{ background: "#f5f9fd" }}
> <div className="container">
<p
className="font-mono text-xs tracking-widest uppercase font-semibold mb-3"
style={{ color: "#3eaee0" }}
>
Blog </p>
<h1
className="font-display font-bold leading-tight mb-4"
style={{
fontSize: "clamp(2rem, 4.5vw, 3rem)",
letterSpacing: "-0.02em",
color: "#0e2540",
}}
>
Notes from the SwasthyaSathi team </h1>
<p className="max-w-xl leading-relaxed" style={{ color: "#5a7a96" }}>
Thoughts on clinical AI, product decisions, and what actually
changes when technology fits into a real clinic&apos;s day. </p> </div> </section>

```
  {posts.length === 0 && (
    <section className="py-24">
      <div className="container text-center">
        <p style={{ color: "#5a7a96" }}>
          No posts published yet — check back soon.
        </p>
      </div>
    </section>
  )}

  {/* Featured Post */}
  {featured && (
    <section className="py-14 md:py-16">
      <div className="container">
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-3xl border p-8 transition-shadow duration-200 hover:shadow-xl"
          style={{ borderColor: "#dcedf8" }}
        >
          <span
            className="inline-block font-mono text-xs uppercase tracking-wider font-semibold mb-4 px-3 py-1 rounded-full"
            style={{
              color: "#1d8bbf",
              background: "rgba(62,174,224,0.1)",
            }}
          >
            {featured.category}
          </span>

          <h2
            className="font-display font-bold leading-tight mb-3 transition-colors duration-200 group-hover:text-[#1b4f9c]"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
              color: "#0e2540",
            }}
          >
            {featured.title}
          </h2>

          {featured.excerpt && (
            <p
              className="leading-relaxed mb-5 line-clamp-3"
              style={{ color: "#5a7a96" }}
            >
              {featured.excerpt}
            </p>
          )}

          <div
            className="flex items-center gap-3 text-sm"
            style={{ color: "#5a7a96" }}
          >
            <span>{formatDate(featured.publishedAt)}</span>
            <span>·</span>
            <span>{featured.readTime}</span>
          </div>
        </Link>
      </div>
    </section>
  )}

  {/* Other Posts */}
  {rest.length > 0 && (
    <section className="pb-20 md:pb-28">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border p-5 transition-shadow duration-200 hover:shadow-lg"
              style={{ borderColor: "#dcedf8" }}
            >
              <span
                className="inline-block font-mono text-[0.7rem] uppercase tracking-wider font-semibold mb-3"
                style={{ color: "#3eaee0" }}
              >
                {post.category}
              </span>

              <h3
                className="font-display font-bold text-base leading-snug mb-3 transition-colors duration-200 group-hover:text-[#1b4f9c]"
                style={{ color: "#0e2540" }}
              >
                {post.title}
              </h3>

              {post.excerpt && (
                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-2"
                  style={{ color: "#5a7a96" }}
                >
                  {post.excerpt}
                </p>
              )}

              <div
                className="flex items-center gap-2 text-xs"
                style={{ color: "#5a7a96" }}
              >
                <span>{formatDate(post.publishedAt)}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )}
</main>
);
}
