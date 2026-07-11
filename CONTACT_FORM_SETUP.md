# Contact Form Setup

The contact form uses a prioritised email strategy:

1. **Resend** — if `RESEND_API_KEY` is set, emails are sent via Resend's API (zero SMTP config needed, works on Vercel Edge/Serverless).
2. **SMTP** — fallback; uses `SMTP_*` variables (or the legacy `EMAIL_*` names).

---

## Option 1 — Resend (recommended)

Resend is the easiest option for Vercel deployments. No port configuration needed.

1. Create a free account at <https://resend.com>
2. Verify your sending domain (or use the sandbox `onboarding@resend.dev` for testing)
3. Copy your API key

**Required env vars:**

| Variable | Example |
|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` |
| `CONTACT_TO_EMAIL` | `you@example.com,team@example.com` |
| `CONTACT_FROM_EMAIL` | `BusyGrowth <hello@yourdomain.com>` |

> **Note:** `CONTACT_FROM_EMAIL` must use a domain you've verified in Resend. During testing you can use `onboarding@resend.dev` as the from address.

---

## Option 2 — SMTP / Gmail

**Required env vars:**

| Variable | Example |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | `you@gmail.com` |
| `SMTP_PASS` | your Gmail App Password (see below) |
| `CONTACT_TO_EMAIL` | `you@example.com` |

### Gmail App Password

Gmail does **not** allow regular passwords via SMTP since May 2022. You must use an **App Password**:

1. Enable 2-Step Verification on your Google account
2. Go to <https://myaccount.google.com/apppasswords>
3. Choose App: **Mail**, Device: **Other** → enter "BusyGrowth"
4. Copy the 16-character password into `SMTP_PASS`

The error `535-5.7.8 Username and Password not accepted` almost always means a regular password is being used instead of an App Password.

---

## Vercel Deployment

Environment variables are **not** transferred when a project is transferred between Vercel accounts. After any ownership transfer you must re-add them:

1. Open your project in Vercel dashboard
2. Go to **Settings → Environment Variables**
3. Add all variables from the table above for **Production** (and optionally Preview/Development)
4. Redeploy the project for the changes to take effect

---

## Local Development

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

`.env.local` is git-ignored and will never be committed.
