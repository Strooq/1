# STROOQ React Site

## Local development

```bash
npm install
npm run dev
```

## Netlify deploy

Build command: `npm run build`
Publish directory: `dist`

## Required Netlify environment variables

- `VITE_CONTACT_API_URL` = `/api/contact`
- `SMTP_HOST` = `smtp.strato.de`
- `SMTP_PORT` = `465`
- `SMTP_USER` = `hello@strooq.nl`
- `SMTP_PASS` = your STRATO mailbox password
- `CONTACT_TO_EMAIL` = `hello@strooq.nl`
- `CONTACT_FROM_EMAIL` = `hello@strooq.nl`

## What the backend does

The aanvraag drawer posts to `/api/contact`.
The Netlify Function sends the aanvraag to your STRATO mailbox using SMTP.

## Payroll portal

The login button still points to `https://www.strooq.nl` for now.
Swap that later when your payroll portal is ready.


## Clean Git upload
This package intentionally excludes `node_modules` and `dist`. Upload only these files to GitHub. Netlify will install dependencies and build the site itself.
