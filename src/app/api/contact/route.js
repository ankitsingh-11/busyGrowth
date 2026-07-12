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
     <div style="display:flex;margin-bottom:15px;">
  <span
    style="
      display:inline-block;
      width:30px;
      height:30px;
      line-height:30px;
      text-align:center;
      background:#d4a017;
      color:#ffffff;
      border-radius:50%;
      font-weight:bold;
      font-size:14px;
      margin-right:15px;
      vertical-align:top;
      flex-shrink:0;
    "
  >
    1
  </span>

  <div>
    <strong>We'll reach out within 24 hours</strong><br>
    <span style="color:#64748b;font-size:14px;">
      Expect a WhatsApp message or email from our team.
    </span>
  </div>
</div>

<div style="display:flex;margin-bottom:15px;">
  <span
    style="
      display:inline-block;
      width:30px;
      height:30px;
      line-height:30px;
      text-align:center;
      background:#d4a017;
      color:#ffffff;
      border-radius:50%;
      font-weight:bold;
      font-size:14px;
      margin-right:15px;
      vertical-align:top;
      flex-shrink:0;
    "
  >
    2
  </span>

  <div>
    <strong>30-45 min strategy session</strong><br>
    <span style="color:#64748b;font-size:14px;">
      We'll audit your digital presence and map out growth levers.
    </span>
  </div>
</div>

<div style="display:flex;">
  <span
    style="
      display:inline-block;
      width:30px;
      height:30px;
      line-height:30px;
      text-align:center;
      background:#d4a017;
      color:#ffffff;
      border-radius:50%;
      font-weight:bold;
      font-size:14px;
      margin-right:15px;
      vertical-align:top;
      flex-shrink:0;
    "
  >
    3
  </span>

  <div>
    <strong>Custom growth roadmap</strong><br>
    <span style="color:#64748b;font-size:14px;">
      Walk away with a clear plan tailored to your goals.
    </span>
  </div>
</div>
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
Email: ankitsinghlakhnot@gmail.com

Talk soon,
Team BusyGrowth
Jaipur, India`;
}

// ─── Email senders ────────────────────────────────────────────────────────────


async function sendViaSMTP(data) {
  const nodemailer = await import("nodemailer");

  const transporter = nodemailer.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Verify SMTP connection
  await transporter.verify();
  console.log("✅ SMTP Connected");

  const recipients = process.env.EMAIL_TO
    .split(",")
    .map((e) => e.trim());

  // Admin Mail
  await transporter.sendMail({
    from: `"BusyGrowth Leads" <${process.env.EMAIL_USER}>`,
    to: recipients,
    subject: `🎯 New Lead: ${data.name}`,
    html: buildAdminHtml(data),
    text: buildAdminText(data),
  });

  // Auto Reply
  await transporter.sendMail({
    from: `"BusyGrowth" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: `✅ We received your request | BusyGrowth`,
    html: buildUserHtml(data),
    text: buildUserText(data),
  });

  console.log("✅ Emails Sent Successfully");
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

    
  // Always use Nodemailer SMTP
await sendViaSMTP(data);

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
