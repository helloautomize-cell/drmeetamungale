# drmeetamungale

## Booking email setup

Booking requests from /contact-us/ are emailed to the hospital via Gmail SMTP
(`lib/booking-mailer.ts`, called only from `app/api/booking/route.ts`).

1. On the hospital Gmail account, turn on 2-Step Verification, then create an
   App Password (Google Account → Security → App passwords).
2. In Vercel → Project → Settings → Environment Variables, add for both
   **Production** and **Preview**:
   - `GMAIL_USER` — the Gmail address that sends (the same account)
   - `GMAIL_APP_PASSWORD` — the 16-character app password
   - `BOOKING_TO_EMAIL` — recipient (defaults to the siteConfig email if unset)
3. Redeploy so the variables are picked up.
4. Test the form on the live site and confirm the email arrives.

For local testing without credentials set `BOOKING_DRY_RUN=true` — the API
validates and returns success without sending. Secrets live only in env vars;
nothing is committed (see `.env.example` for the variable names).

Built and marketed by Automize Media Labs - https://www.automizemedialabs.com/
