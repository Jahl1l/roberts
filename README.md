# Roberts Web Applications

High-converting business website for a Jamaican web app development agency built with Next.js 14, TypeScript, and Tailwind CSS.

## Local setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deployment notes

- Works on Vercel, Netlify (with Next.js support), or any Node hosting.
- Update `metadataBase` in `src/app/layout.tsx` and `sitemap.ts` to your production domain.
- Replace WhatsApp number in `src/lib/content.ts`.
- The contact form posts to `/api/contact` and logs requests to the server console.

## Project structure

```
src/
  app/
    about/
    contact/
    free-consultation/
    packages/
    portfolio/
    services/
    api/contact/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    Button.tsx
    CaseStudyCard.tsx
    ContactForm.tsx
    FAQItem.tsx
    Footer.tsx
    Navbar.tsx
    PricingCard.tsx
    Section.tsx
    ServiceCard.tsx
    WhatsAppFloating.tsx
  lib/
    content.ts
```
