import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Best-effort in-memory rate limiting (per server instance)
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const projectType =
    typeof body.projectType === 'string' ? body.projectType.trim().slice(0, 100) : '';
  const budget =
    typeof body.budget === 'string' ? body.budget.trim().slice(0, 100) : '';
  const botcheck = body.botcheck;

  // Honeypot: silently accept bots without sending
  if (botcheck) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'All fields are required.' },
      { status: 422 }
    );
  }
  if (name.length > 100 || email.length > 150 || message.length > 5000) {
    return NextResponse.json(
      { success: false, error: 'Input is too long.' },
      { status: 422 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { success: false, error: 'Please provide a valid email address.' },
      { status: 422 }
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user;

  if (!host || !user || !pass) {
    console.error('Contact form: SMTP environment variables are not configured.');
    return NextResponse.json(
      { success: false, error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  try {
    const textLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      projectType ? `Project type: ${projectType}` : null,
      budget ? `Budget: ${budget}` : null,
      '',
      message
    ].filter((line) => line !== null);

    const htmlRow = (label: string, value: string) =>
      `<p style="margin:4px 0"><strong>${label}:</strong> ${escapeHtml(value)}</p>`;

    await transporter.sendMail({
      from: `"Portfolio website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: `New message from ${name}${projectType ? ` — ${projectType}` : ''}`,
      text: textLines.join('\n'),
      html: `
        <div style="font-family:system-ui,sans-serif;font-size:15px;color:#0f172a">
          <h2 style="margin:0 0 12px">New message from your website</h2>
          ${htmlRow('Name', name)}
          ${htmlRow('Email', email)}
          ${projectType ? htmlRow('Project type', projectType) : ''}
          ${budget ? htmlRow('Budget', budget) : ''}
          <p style="white-space:pre-wrap;margin-top:16px"><strong>Message:</strong><br/>${escapeHtml(
            message
          )}</p>
        </div>
      `
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form: failed to send email', err);
    return NextResponse.json(
      { success: false, error: 'Failed to send the message.' },
      { status: 502 }
    );
  }
}
