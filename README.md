# DIVI // CREATOR
> **Divine Orji** — Software Engineer, Product Builder, Systems Writer.  
> Building fast, reliable software that works and helps businesses grow.

[![Portfolio](https://img.shields.io/badge/Live_Site-dpkreativ.com-111111?style=flat-square)](https://dpkreativ.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-111111?style=flat-square)](LICENSE)

---

## Overview

A high-performance personal portfolio, engineering journal, and case-study showcase built with an editorial, architectural design system. Designed with a strict monochrome palette, 0px border-radius, zero box-shadows, and smooth micro-interactions.

- **Live URL**: [dpkreativ.com](https://dpkreativ.com) / [dpkreativ.vercel.app](https://dpkreativ.vercel.app)
- **Direct Contact**: [dpkreativ@gmail.com](mailto:dpkreativ@gmail.com)

---

## Design System & Aesthetic Principles

- **Strict 0px Border Radius**: Crisp, sharp, architectural edges across all components, containers, and inputs.
- **Zero Box Shadows**: Pure flat, hairline borders (`border-black/10` / `border-white/10`) creating spatial hierarchy without faux drop shadows.
- **Editorial Monochrome Palette**: Calibrated grayscale ranging from deep charcoal (`#111111`) to warm whites and silvers, avoiding retinal glare in both light and dark modes.
- **Natural Color Fidelity**: Project case studies and imagery are presented in their authentic, unadulterated color palette without artificial dark scrims or monochrome overlays.
- **Kinetic Typography & Motion**: Fluid GSAP animations, split headings, interactive project showreel, and Lenis smooth momentum scrolling.

---

## Architecture & Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router, Server & Client Components) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict type-checking) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with `@tailwindcss/typography` |
| **Motion & Interaction** | [GSAP](https://gsap.com/) (ScrollTrigger, SplitText), [Lenis](https://lenis.darkroom.engineering/) Smooth Scroll |
| **Theme & UI Primitives** | Custom Theme Provider (Light/Dark mode), Radix UI / Vaul Drawer primitives |
| **Testing** | [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## Project Structure

```
dpkreativ/
├── src/
│   ├── app/                    # Next.js App Router pages & API routes
│   │   ├── about/              # Career track record, credentials, CV download
│   │   ├── blog/               # Technical writing, systems essays & guides
│   │   ├── contact/            # Direct consultation suite & embedded form
│   │   ├── work/               # Featured projects showcase & dynamic case studies
│   │   │   └── [id]/           # Deep-dive project breakdown
│   │   ├── globals.css         # Global resets, hairline rules, typography
│   │   └── page.tsx            # Editorial homepage, hero, showreel & marquee
│   ├── assets/                 # Brand logos, icons, static data manifests
│   ├── components/             # Reusable UI components
│   │   ├── button.tsx          # Calibrated design-system buttons
│   │   ├── header.tsx          # 3-column symmetrical header with menu drawer
│   │   ├── hero-showreel.tsx   # Interactive projects showreel with header controls
│   │   ├── footer.tsx          # Route-aware global footer with centered copyright
│   │   └── ...
│   └── utils/                  # GSAP helpers, animation builders, formatters
├── public/                     # Static media, project snapshots, CV asset
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dpkreativ/dpkreativ.git
cd dpkreativ

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Compile optimized production build
npm run start    # Start production server
npm run lint     # Run ESLint validation
npm test         # Execute Jest unit and integration test suite
```

---

## License

MIT © [Divine Orji](https://dpkreativ.com)
