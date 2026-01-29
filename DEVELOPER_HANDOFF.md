# LUTs Store — Developer Handoff

## Overview

A skeleton e-commerce site for selling LUT packs (color grading presets for video editors). Built as a subdomain project for MediaGeekz (`luts.mediageekz.com`).

**Repo:** https://github.com/DanielSensual/Lutz  
**Stack:** Next.js 16 + TypeScript + Tailwind CSS v4  
**Status:** Skeleton complete, awaiting real content and Stripe integration

---

## Project Structure

```
luts-store/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system (tokens, utilities, components)
│   │   ├── layout.tsx       # Root layout with Inter font + film grain overlay
│   │   └── page.tsx         # Main landing page (all sections)
│   ├── components/
│   │   ├── BeforeAfterSlider.tsx   # Interactive drag-to-compare component
│   │   └── PackageCard.tsx         # Product card with video preview
│   └── data/
│       └── packages.ts      # Product data (4 LUT packs)
├── public/
│   └── textures/grain.png   # Film grain overlay texture
└── package.json
```

---

## Design System

Inherited from MediaGeekz main site. Key tokens in `globals.css`:

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#05060a` | Background |
| `--accent` | `#ff5c2b` | Primary orange |
| `--accent-bright` | `#ff7a4d` | Hover states |
| `--card` | `#10131b` | Card backgrounds |
| `--muted` | `#9ca3af` | Secondary text |
| `--radius-lg` | `24px` | Large border radius |

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.container-center` | Horizontal centering (`margin: 0 auto`) — use instead of Tailwind's `mx-auto` which has issues in v4 |
| `.glass-panel` | Glassmorphism effect with blur + subtle border |
| `.btn-primary` | Orange gradient button with hover lift |
| `.btn-secondary` | Outline button |
| `.section-label` | Small uppercase orange label |
| `.section-title` | Section heading (responsive sizing) |
| `.section-desc` | Muted paragraph text |
| `.card` | Product card with hover effects |
| `.fade-up` | Entry animation |

---

## Page Sections

### 1. Hero
- Centered headline with gradient text
- Two CTAs: "Browse Packs" + "See the Difference"
- Animated scroll indicator

### 2. Before/After Demo (`#demo`)
- `BeforeAfterSlider` component
- Uses placeholder Unsplash images (grayscale vs color)
- **TODO:** Replace with actual LUT comparison screenshots

### 3. Packages Grid (`#packages`)
- 4 product cards in responsive grid
- Each card shows Streamable video thumbnail (from MediaGeekz assets)
- Hover plays video preview
- **TODO:** Add Stripe Payment Links

### 4. What's Included
- 3-column feature grid (CUBE files, Install Guide, Lifetime Access)

### 5. FAQ
- Accordion-style (uses native `<details>`)
- 4 common questions

### 6. Footer
- CTA repeat + copyright + back link to main site

---

## Components

### `BeforeAfterSlider`
Interactive comparison slider with drag + click support.

**Props:**
```typescript
interface BeforeAfterSliderProps {
  beforeSrc: string;  // URL for "before" image
  afterSrc: string;   // URL for "after" image  
  alt?: string;       // Accessibility label
}
```

**Features:**
- Drag handle to reveal before/after
- Click anywhere to jump to position
- Labels fade when near edges
- Touch support

---

### `PackageCard`
Product card with video preview and buy button.

**Props:**
```typescript
interface PackageCardProps {
  pack: LUTPackage;
}
```

**Behavior:**
- Shows Streamable thumbnail by default
- Hover reveals play button
- Click plays inline video (muted, looped)
- "Buy Now" button (currently shows alert placeholder)

---

## Data Model

```typescript
// src/data/packages.ts

interface LUTPackage {
  id: string;              // URL slug
  name: string;            // Display name
  description: string;     // Short description
  price: number;           // Price in USD
  features: string[];      // Bullet points (first 2 shown on card)
  beforeImage: string;     // Before comparison image (not used yet)
  afterImage: string;      // After comparison image (not used yet)
  demoVideoId: string;     // Streamable video ID for preview
  stripeLink?: string;     // Stripe Payment Link URL (TODO)
}
```

**Current Packages:**
1. Cinematic Essentials
2. Miami Heat
3. Moody Noir
4. Clean Commercial

---

## TODO / Enhancement Tasks

### High Priority

- [ ] **Stripe Integration**
  - Create 4 Payment Links in Stripe Dashboard ($49 each)
  - Add `stripeLink` to each package in `packages.ts`
  - Replace `alert()` in PackageCard with `window.location.href = pack.stripeLink`

- [ ] **Success Page** (`/success`)
  - Create `/src/app/success/page.tsx`
  - Show "Thank you" message
  - Provide secure download links (consider using signed URLs or Stripe fulfillment)

- [ ] **Real Before/After Images**
  - Replace Unsplash placeholders with actual LUT comparison shots
  - Add to `/public/images/` directory

### Medium Priority

- [ ] **SEO & Meta**
  - Add Open Graph images
  - Create sitemap.ts
  - Add structured data (Product schema)

- [ ] **Analytics**
  - Add Vercel Analytics
  - Track "Buy Now" clicks with custom events

- [ ] **Email Capture (Optional)**
  - Add email gate before download
  - Integrate with existing lead system

### Low Priority

- [ ] **More Packages**
  - Add additional LUT packs as product line expands
  - Consider bundle pricing

- [ ] **Reviews/Testimonials**
  - Add social proof section

- [ ] **Video Backgrounds**
  - Replace static hero with looping showreel

---

## Deployment

### Vercel Setup

1. Connect GitHub repo to Vercel
2. Framework: Next.js (auto-detected)
3. Build command: `npm run build`
4. Output: `.next`

### Subdomain Configuration

1. In Vercel project settings → Domains
2. Add: `luts.mediageekz.com`
3. In DNS (where mediageekz.com is hosted):
   - Add CNAME: `luts` → `cname.vercel-dns.com`

---

## Running Locally

```bash
cd luts-store
npm install
npm run dev
# → http://localhost:3000
```

---

## Notes

- **Tailwind v4 Issue:** The `mx-auto` utility doesn't compute correctly in this version. Use `.container-center` class instead for horizontal centering.
- **Streamable Assets:** Video previews use existing MediaGeekz Streamable videos as placeholders. Replace `demoVideoId` in packages.ts with actual LUT demo videos when available.
- **Film Grain:** The grain texture is copied from the main MediaGeekz site for visual consistency.

---

*Last updated: January 29, 2026*
