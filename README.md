# DevStudio — Web Development Portfolio

A modern, fully responsive multilingual business-card website for web development services.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **next-intl** and **Framer Motion**.

## Features

- Trilingual: English, ქართული (Georgian), Русский — with an instant language switcher
- Fully responsive — looks great on mobile, tablet and desktop
- Modern dark UI with gradients, glassmorphism and smooth scroll animations
- SEO-ready: localized metadata, semantic markup, fast load times
- Sections: Hero, Services, Tech Stack, Portfolio, Process, Contact, Footer

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to your preferred locale (`/en`, `/ka`, or `/ru`).

## Build for production

```bash
npm run build
npm start
```

## Customization

- **Text & translations:** edit `messages/en.json`, `messages/ka.json`, `messages/ru.json`. The keys are identical across all three files.
- **Contact details / social links:** update the `CHANNELS` and `SOCIALS` arrays in `src/components/Contact.tsx`.
- **Brand name & logo:** edit `src/components/Navbar.tsx` and `src/components/Footer.tsx`.
- **Colors:** adjust the `brand` / `accent` palettes in `tailwind.config.ts`.
- **Languages:** add or remove locales in `src/i18n/routing.ts` and add a matching `messages/<locale>.json`.

## Project structure

```
src/
  app/[locale]/      # localized pages & layout
  components/        # UI sections and shared components
  i18n/              # next-intl routing & request config
  middleware.ts      # locale detection & routing
messages/            # translation files (en, ka, ru)
```
