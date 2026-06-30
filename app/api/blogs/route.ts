import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";

type BlogRow = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

function getBlogTableName() {
  const tableName = process.env.MYSQL_BLOG_TABLE ?? "blog";

  if (!/^[a-zA-Z0-9_]+$/.test(tableName)) {
    throw new Error("Invalid blog table name.");
  }

  return tableName;
}

export async function GET() {
  try {
    const tableName = getBlogTableName();
    const [rows] = await pool.query(
      `SELECT
        id,
        category,
        title,
        excerpt,
        read_time AS readTime
       FROM ${tableName}
       WHERE is_active = 1
       ORDER BY created_at DESC, id DESC
       LIMIT 3`
    );

    return NextResponse.json(
      { blogs: rows as BlogRow[] },
      {
        headers: {
          "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        },
      }
    );
  } catch (error) {
    console.error("Blog fetch failed:", error);

    return NextResponse.json(
      { error: "Unable to load blog posts." },
      { status: 500 }
    );
  }
}
