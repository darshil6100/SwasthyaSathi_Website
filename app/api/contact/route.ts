import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim() || null;
    const company = body.company?.trim() || null;
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Name, email, subject, and message are required." },
        { status: 400 }
      );
    }

    await pool.execute(
      `INSERT INTO contact (name, email, phone, company, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [name, email, phone, company, subject, message]
    );

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form insert failed:", error);

    return NextResponse.json(
      { error: "Unable to save contact message." },
      { status: 500 }
    );
  }
}
