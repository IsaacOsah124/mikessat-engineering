import type { IncomingMessage, ServerResponse } from 'http';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.smtp2go.com',
  port: 2525,
  secure: false,
  auth: {
    user: 'mikessatengineering',
    pass: 'eOjO3OfKFDUEtEOL',
  },
});

function readBody(req: IncomingMessage): Promise<Record<string, string>> {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(data));
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

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
    timeZone: 'Africa/Accra',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  // ── Notification email to Mikessat support team ──
  const supportHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 10px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #0A5C9E; color: #fff; padding: 28px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 4px 0 0; font-size: 13px; opacity: 0.85; }
    .body { padding: 28px 32px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #0A5C9E; margin-bottom: 4px; }
    .value { font-size: 15px; font-weight: 600; color: #1e293b; margin-bottom: 18px; }
    .message-box { background: #f8fafc; border-left: 4px solid #0A5C9E; padding: 14px 16px; border-radius: 4px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap; }
    .footer { background: #f1f5f9; padding: 16px 32px; font-size: 12px; color: #64748b; text-align: center; }
    .badge { display: inline-block; background: #0A5C9E; color: #fff; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 700; }
  </style>
</head>
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
      <div class="value"><a href="tel:${phone}" style="color:#0A5C9E;text-decoration:none;">${phone}</a></div>

      <div class="label">Email Address</div>
      <div class="value">${clientEmail ? `<a href="mailto:${clientEmail}" style="color:#0A5C9E;text-decoration:none;">${clientEmail}</a>` : '<span style="color:#94a3b8;">Not provided</span>'}</div>

      <div class="label">Project Details</div>
      <div class="message-box">${message}</div>
    </div>
    <div class="footer">
      Mikessat Engineering &nbsp;•&nbsp; support@mikessatengineering.com &nbsp;•&nbsp; +233 246 445 790
    </div>
  </div>
</body>
</html>`;

  // ── Confirmation email to client ──
  const clientHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; }
    .card { background: #ffffff; border-radius: 10px; max-width: 600px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .header { background: #062B5B; color: #fff; padding: 28px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.8; }
    .body { padding: 28px 32px; font-size: 15px; color: #334155; line-height: 1.7; }
    .highlight { background: #eff6ff; border-radius: 8px; padding: 16px 20px; margin: 20px 0; font-size: 14px; }
    .highlight strong { color: #0A5C9E; }
    .cta { display: block; background: #0A5C9E; color: #fff; text-align: center; padding: 14px; border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; margin: 24px 0; }
    .footer { background: #f1f5f9; padding: 16px 32px; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>We've Received Your Inquiry</h1>
      <p>Thank you for choosing Mikessat Engineering, ${name}.</p>
    </div>
    <div class="body">
      <p>Hi <strong>${name}</strong>,</p>
      <p>We have received your service request and our technical team will get back to you within <strong>1 hour</strong> during business hours.</p>

      <div class="highlight">
        <strong>Service Requested:</strong> ${serviceType}<br/>
        <strong>Your Phone:</strong> ${phone}<br/>
        <strong>Submitted:</strong> ${submittedAt}
      </div>

      <p>If you need to speak with us immediately, please reach out via:</p>
      <a href="tel:+233246445790" class="cta">Call Us: +233 246 445 790</a>
      <p style="text-align:center; font-size:13px;">or chat on WhatsApp: <a href="https://wa.me/233246445790" style="color:#0A5C9E;">wa.me/233246445790</a></p>
    </div>
    <div class="footer">
      Mikessat Engineering &nbsp;•&nbsp; Accra, Ghana &nbsp;•&nbsp; support@mikessatengineering.com
    </div>
  </div>
</body>
</html>`;

  try {
    // Send notification to support team
    await transporter.sendMail({
      from: '"Mikessat Engineering" <support@mikessatengineering.com>',
      replyTo: clientEmail || 'support@mikessatengineering.com',
      to: 'support@mikessatengineering.com',
      subject: `New Inquiry: ${serviceType} – ${name}`,
      html: supportHtml,
    });

    // Send confirmation to client if they gave an email
    if (clientEmail) {
      await transporter.sendMail({
        from: '"Mikessat Engineering" <support@mikessatengineering.com>',
        replyTo: 'support@mikessatengineering.com',
        to: clientEmail,
        subject: `We received your inquiry – Mikessat Engineering`,
        html: clientHtml,
      });
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true }));
  } catch (err) {
    console.error('Email send error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Failed to send email. Please try again.' }));
  }
}
