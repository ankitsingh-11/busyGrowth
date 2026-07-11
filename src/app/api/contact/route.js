export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

// ─── Helpers ─────────────────────────────────────────────────────────────────

const interestLabels = {
  'growth-plan':        'Free Growth Plan (Strategy Call)',
  'ads':                'Meta / Google Ads Management',
  'content':            'Reels & Content Creation',
  'automation':         'WhatsApp / Email Automation',
  'course':             'Full Digital Marketing Course',
  'performance-course': 'Performance Marketing Course',
  'web-development':    'Web Development',
};

const businessLabels = {
  'd2c':     'D2C Brand',
  'service': 'Service Business',
  'creator': 'Content Creator / Influencer',
  'local':   'Local Business',
  'saas':    'SaaS / Tech',
  'other':   'Other',
};

function getInterestLabel(val) {
  return interestLabels[val] || val || 'Not specified';
}

function getBusinessLabel(val) {
  return businessLabels[val] || val || 'Not specified';
}

// ─── Email content builders ───────────────────────────────────────────────────

function buildAdminHtml(data) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">
    <div style="background:linear-gradient(135deg,#d4a017,#f5c76a);padding:30px;text-align:center;">
      <h1 style="color:white;margin:0;font-size:28px;">🚀 New Lead</h1>
      <p style="color:rgba(255,255,255,.9);margin:8px 0 0;">From BusyGrowth Website</p>
    </div>
    <div style="padding:30px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;">Full Name</td><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;">${data.name}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;">Email</td><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;">${data.email}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;">Phone</td><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;">${data.phone}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;">Business Type</td><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#0f172a;">${getBusinessLabel(data.businessType)}</td></tr>
        <tr><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;">Interested In</td><td style="padding:12px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#d4a017;">${getInterestLabel(data.interest)}</td></tr>
        <tr><td style="padding:12px 0;color:#64748b;font-size:12px;text-transform:uppercase;">Message</td><td style="padding:12px 0;font-weight:600;color:#0f172a;">${data.message ? data.message.replace(/\n/g, '<br>') : '<span style="color:#94a3b8;">No message</span>'}</td></tr>
      </table>
      <div style="margin-top:25px;padding:20px;background:#f8fafc;border-radius:12px;">
        <p style="margin:0 0 10px;font-weight:600;">⚡ Quick Actions</p>
        <a href="mailto:${data.email}" style="display:inline-block;background:#0099cc;color:white;padding:10px 20px;border-radius:30px;text-decoration:none;margin-right:10px;">📧 Reply via Email</a>
        <a href="https://wa.me/${data.phone.replace(/\D/g,'')}" style="display:inline-block;background:#25D366;color:white;padding:10px 20px;border-radius:30px;text-decoration:none;">💬 WhatsApp</a>
      </div>
    </div>
    <div style="padding:20px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;">
      BusyGrowth • Jaipur, India
    </div>
  </div>
</body>
</html>`;
}

function buildAdminText(data) {
  return `NEW LEAD: ${data.name}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Business Type: ${getBusinessLabel(data.businessType)}
Interest: ${getInterestLabel(data.interest)}
Message: ${data.message || 'No message'}`;
}

function buildUserHtml(data) {
  const firstName = data.name.split(' ')[0];
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:Arial,sans-serif;background:#f8fafc;padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:white;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">
    <div style="text-align:center;padding:30px;">
      <span style="font-size:28px;font-weight:bold;color:#d4a017;">BusyGrowth</span>
    </div>
    <div style="padding:0 30px 30px;">
      <h2 style="color:#0f172a;margin:0 0 10px;">Hey ${firstName}! 👋</h2>
      <p style="font-size:16px;color:#334155;">Thanks for reaching out! We received your request for <strong style="color:#d4a017;">${getInterestLabel(data.interest)}</strong>.</p>
      <div style="margin:25px 0;">
        <div style="display:flex;margin-bottom:15px;"><span style="min-width:30px;height:30px;background:#d4a017;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:15px;">1</span><div><strong>We'll reach out within 24 hours</strong><br><span style="color:#64748b;font-size:14px;">Expect a WhatsApp message or email from our team.</span></div></div>
        <div style="display:flex;margin-bottom:15px;"><span style="min-width:30px;height:30px;background:#d4a017;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:15px;">2</span><div><strong>30-45 min strategy session</strong><br><span style="color:#64748b;font-size:14px;">We'll audit your digital presence and map out growth levers.</span></div></div>
        <div style="display:flex;"><span style="min-width:30px;height:30px;background:#d4a017;color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:bold;margin-right:15px;">3</span><div><strong>Custom growth roadmap</strong><br><span style="color:#64748b;font-size:14px;">Walk away with a clear plan tailored to your goals.</span></div></div>
      </div>
      <div style="background:#f8fafc;border-radius:12px;padding:20px;margin-top:20px;">
        <p style="margin:0 0 10px;font-weight:600;">📞 Save our contact</p>
        <p style="margin:5px 0;">📱 WhatsApp: <strong>+91 93527 57834</strong></p>
        <p style="margin:5px 0;">📧 Email: <strong>busygrowth@busygrowth.in</strong></p>
      </div>
      <p style="margin-top:25px;">Talk soon,<br><strong>Team BusyGrowth</strong><br><span style="color:#64748b;font-size:13px;">Jaipur, India • Working worldwide 🌍</span></p>
    </div>
    <div style="padding:20px;text-align:center;font-size:12px;color:#94a3b8;border-top:1px solid #e2e8f0;">
      © ${new Date().getFullYear()} BusyGrowth. All rights reserved.
    </div>
  </div>
</body>
</html>`;
}

function buildUserText(data) {
  const firstName = data.name.split(' ')[0];
  return `Hey ${firstName}! 👋

Thanks for reaching out to BusyGrowth. We received your request for ${getInterestLabel(data.interest)}.

WHAT HAPPENS NEXT:
1. We'll reach out within 24 hours (WhatsApp or email)
2. Schedule a 30-45 min strategy session
3. You'll receive a custom growth roadmap

QUICK CONTACTS:
WhatsApp: +91 93527 57834
Email: busygrowth@busygrowth.in

Talk soon,
Team BusyGrowth
Jaipur, India`;
}

// ─── Email senders ────────────────────────────────────────────────────────────

async function sendViaResend(data) {
  const { Resend } = await import('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);

  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'BusyGrowth <onboarding@resend.dev>';
  const toEmails  = (process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || '').split(',').map(e => e.trim()).filter(Boolean);

  if (toEmails.length === 0) {
    throw new Error('No recipient email configured. Set CONTACT_TO_EMAIL.');
  }

  // Admin notification
  await resend.emails.send({
    from: fromEmail,
    to: toEmails,
    subject: `🎯 New Lead: ${data.name} — ${getBusinessLabel(data.businessType)}`,
    html: buildAdminHtml(data),
    text: buildAdminText(data),
  });

  // User auto-reply
  await resend.emails.send({
    from: fromEmail,
    to: [data.email],
    subject: `✅ Got your request, ${data.name.split(' ')[0]}! | BusyGrowth`,
    html: buildUserHtml(data),
    text: buildUserText(data),
  });
}

async function sendViaSMTP(data) {
  const nodemailer = await import('nodemailer');

  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST;
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT || '587', 10);
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  // NOTE: Gmail requires an App Password — not your normal Gmail password.
  // Generate one at: https://myaccount.google.com/apppasswords

  if (!host || !user || !pass) {
    throw new Error('SMTP not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS (or RESEND_API_KEY).');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.verify();

  const from       = `"BusyGrowth Leads" <${user}>`;
  const recipients = (process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || user).split(',').map(e => e.trim()).join(',');

  // Admin notification
  await transporter.sendMail({
    from,
    to: recipients,
    subject: `🎯 New Lead: ${data.name} — ${getBusinessLabel(data.businessType)}`,
    html: buildAdminHtml(data),
    text: buildAdminText(data),
  });

  // User auto-reply
  await transporter.sendMail({
    from: `"BusyGrowth" <${user}>`,
    to: data.email,
    subject: `✅ Got your request, ${data.name.split(' ')[0]}! | BusyGrowth`,
    html: buildUserHtml(data),
    text: buildUserText(data),
  });
}

// ─── Route handler ────────────────────────────────────────────────────────────

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 });
    }

    // Server-side validation
    const name  = (body.name  || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const phone = (body.phone || '').trim();

    if (!name)  return Response.json({ success: false, message: 'Name is required.' }, { status: 400 });
    if (!email) return Response.json({ success: false, message: 'Email is required.' }, { status: 400 });
    if (!phone) return Response.json({ success: false, message: 'Phone number is required.' }, { status: 400 });

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'Please enter a valid email address.' }, { status: 400 });
    }

    const data = {
      name,
      email,
      phone,
      businessType: (body.businessType || '').trim(),
      interest:     (body.interest     || 'growth-plan').trim(),
      message:      (body.message      || '').trim(),
    };

    // Send via Resend if key available, otherwise SMTP
    if (process.env.RESEND_API_KEY) {
      await sendViaResend(data);
    } else {
      await sendViaSMTP(data);
    }

    return Response.json(
      { success: true, message: "Thank you! We'll get back within 24 hours." },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error.message);
    // Return a safe message — never expose raw error details to client
    return Response.json(
      { success: false, message: 'Something went wrong. Please try again or contact us on WhatsApp.' },
      { status: 500 }
    );
  }
}
