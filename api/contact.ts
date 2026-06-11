import type { IncomingMessage, ServerResponse } from 'http';

// ── Replace with your SMTP2GO API key from: Dashboard → Settings → API Keys ──
const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY || 'api-77184E6A6A4841398881E69DD161792C';
const SUPPORT_EMAIL = 'support@mikessatengineering.com';
const FROM_NAME = 'Mikessat Engineering';

function readBody(req: IncomingMessage): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try { resolve(JSON.parse(data)); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

async function sendEmail(to: string, toName: string, subject: string, html: string, replyTo?: string) {
  const payload = {
    api_key: SMTP2GO_API_KEY,
    to: [`${toName} <${to}>`],
    sender: `${FROM_NAME} <${SUPPORT_EMAIL}>`,
    subject,
    html_body: html,
    ...(replyTo ? { custom_headers: [{ header: 'Reply-To', value: replyTo }] } : {}),
  };

  const res = await fetch('https://api.smtp2go.com/v3/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json() as { data?: { succeeded?: number }; error?: string };
  if (!res.ok || data.data?.succeeded !== 1) {
    throw new Error(data.error || `SMTP2GO error: ${JSON.stringify(data)}`);
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }

  if (req.method !== 'POST') {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  let body: Record<string, string>;
  try {
    body = await readBody(req);
  } catch {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid request body' }));
    return;
  }

  const { name, email, phone, serviceType, message } = body;
  if (!name || !phone || !serviceType || !message) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Missing required fields' }));
    return;
  }

  const clientEmail = email?.trim() || null;
  const submittedAt = new Date().toLocaleString('en-GH', {
    timeZone: 'Africa/Accra', dateStyle: 'full', timeStyle: 'short',
  });

  const supportHtml = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f6f9;margin:0;padding:20px}
  .card{background:#fff;border-radius:10px;max-width:600px;margin:0 auto;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)}
  .header{background:#0A5C9E;color:#fff;padding:28px 32px}
  .header h1{margin:0;font-size:20px;font-weight:700}
  .header p{margin:4px 0 0;font-size:13px;opacity:.85}
  .body{padding:28px 32px}
  .label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#0A5C9E;margin-bottom:4px}
  .value{font-size:15px;font-weight:600;color:#1e293b;margin-bottom:18px}
  .msgbox{background:#f8fafc;border-left:4px solid #0A5C9E;padding:14px 16px;border-radius:4px;font-size:14px;color:#334155;line-height:1.6;white-space:pre-wrap}
  .footer{background:#f1f5f9;padding:16px 32px;font-size:12px;color:#64748b;text-align:center}
  .badge{display:inline-block;background:#0A5C9E;color:#fff;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700}
</style></head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Service Inquiry</h1>
      <p>Received via mikessatengineering.com &nbsp;•&nbsp; ${submittedAt}</p>
    </div>
    <div class="body">
      <div class="label">Service Requested</div>
      <div class="value"><span class="badge">${serviceType}</span></div>
      <div class="label">Client Name</div>
      <div class="value">${name}</div>
      <div class="label">Phone Number</div>
      <div class="value"><a href="tel:${phone}" style="color:#0A5C9E;text-decoration:none">${phone}</a></div>
      <div class="label">Email Address</div>
      <div class="value">${clientEmail ? `<a href="mailto:${clientEmail}" style="color:#0A5C9E;text-decoration:none">${clientEmail}</a>` : '<span style="color:#94a3b8">Not provided</span>'}</div>
      <div class="label">Project Details</div>
      <div class="msgbox">${message}</div>
    </div>
    <div class="footer">Mikessat Engineering &nbsp;•&nbsp; ${SUPPORT_EMAIL} &nbsp;•&nbsp; +233 246 445 790</div>
  </div>
</body></html>`;

  const clientHtml = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/>
<style>
  body{font-family:Arial,sans-serif;background:#f4f6f9;margin:0;padding:20px}
  .card{background:#fff;border-radius:10px;max-width:600px;margin:0 auto;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08)}
  .header{background:#062B5B;color:#fff;padding:28px 32px}
  .header h1{margin:0;font-size:20px;font-weight:700}
  .header p{margin:6px 0 0;font-size:13px;opacity:.8}
  .body{padding:28px 32px;font-size:15px;color:#334155;line-height:1.7}
  .box{background:#eff6ff;border-radius:8px;padding:16px 20px;margin:20px 0;font-size:14px}
  .box strong{color:#0A5C9E}
  .cta{display:block;background:#0A5C9E;color:#fff;text-align:center;padding:14px;border-radius:8px;font-weight:700;font-size:15px;text-decoration:none;margin:24px 0}
  .footer{background:#f1f5f9;padding:16px 32px;font-size:12px;color:#64748b;text-align:center}
</style></head>
<body>
  <div class="card">
    <div class="header">
      <h1>We've Received Your Inquiry</h1>
      <p>Thank you for choosing Mikessat Engineering, ${name}.</p>
    </div>
    <div class="body">
      <p>Hi <strong>${name}</strong>,</p>
      <p>We have received your service request and our technical team will get back to you within <strong>1 hour</strong> during business hours.</p>
      <div class="box">
        <strong>Service Requested:</strong> ${serviceType}<br/>
        <strong>Your Phone:</strong> ${phone}<br/>
        <strong>Submitted:</strong> ${submittedAt}
      </div>
      <p>If you need to speak with us immediately:</p>
      <a href="tel:+233246445790" class="cta">Call Us: +233 246 445 790</a>
      <p style="text-align:center;font-size:13px">or WhatsApp: <a href="https://wa.me/233246445790" style="color:#0A5C9E">wa.me/233246445790</a></p>
    </div>
    <div class="footer">Mikessat Engineering &nbsp;•&nbsp; Accra, Ghana &nbsp;•&nbsp; ${SUPPORT_EMAIL}</div>
  </div>
</body></html>`;

  try {
    await sendEmail(
      SUPPORT_EMAIL,
      'Mikessat Support',
      `New Inquiry: ${serviceType} – ${name}`,
      supportHtml,
      clientEmail ?? undefined,
    );

    if (clientEmail) {
      await sendEmail(
        clientEmail,
        name,
        'We received your inquiry – Mikessat Engineering',
        clientHtml,
      );
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    console.error('Email send error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to send email. Please try again.' }));
  }
}
