# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a static marketing website for **Util** — a compute scheduling tool for energy-aware workload optimization. It uses Next.js 15 App Router with Tailwind CSS v4 and TypeScript.

### Routes

All routes are under `app/` using the App Router: `/` (home), `/about`, `/demo`, `/download`, `/roadmap`, `/contact`.

### Key Components

- **[components/marketing.tsx](components/marketing.tsx)** — Shared UI primitives: `PageShell` (page header/intro), `Section` (content block), `Eyebrow`, `InfoCard`, `Metric`, `PrimaryLink`, `SecondaryLink`. Most pages are built entirely from these.
- **[components/reveal.tsx](components/reveal.tsx)** — Client-side scroll animation via IntersectionObserver. Use `<Reveal variant="up|blur|left|right" delay={n}>` to animate content on scroll.
- **[components/asset-slot.tsx](components/asset-slot.tsx)** — Conditional image/video/logo rendering with graceful fallback placeholders when assets are missing from `/public`. Depends on `lib/assets.ts`.
- **[components/site-nav.tsx](components/site-nav.tsx)** — Sticky nav with active route detection.

### Asset Pattern

`lib/assets.ts` exports a server-only `assetExists(path)` utility that checks the filesystem before rendering images. Page components call this in server context and pass the boolean down to `AssetImageSlot` / `AssetVideoSlot` / `LogoMark`. This allows pages to render without broken image placeholders when marketing assets aren't yet available.

### Styling

Tailwind CSS v4 with a dark design system defined in `app/globals.css` CSS variables. Core palette: background `#111216`, accent violet `#7E47E7`, accent blue `#367EC1`. Custom animations (float, glow, shimmer, reveal variants) are also defined there.
