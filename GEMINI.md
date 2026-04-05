# itamars colors

**Project Identity:** itamars colors — A high-precision, fashion-branded color lexicon and learning game designed for professional designers and color enthusiasts.

## 🎯 Core Goal
To bridge the gap between human perception and digital color naming through a 20-level difficulty system, leveraging modern perceptual color science (OKLCH) and linguistic frequency (Berlin-Kay).

---

## 🏗️ Technical Architecture

### 1. Color Science Engine
- **Naming Algorithm:** Uses **Weighted OKLCH Distance**. Weights are optimized for human naming: `Lightness: 2.0`, `Chroma: 1.0`, `Hue: 4.0`.
- **Hue Logic:** Implements **Circular Hue Calculation** to handle the 360/0 degree wrap-around (Red/Violet boundary).
- **Harmony Logic:** Generates 8 professional harmony modes:
  - **Essential:** Complementary (180°), Analogous (+/- 30°), Monochromatic (Tonal).
  - **Classics:** Triadic (+/- 120°), Split-Complementary (180° +/- 30°), Neutral Anchor.
  - **Advanced:** Square (90° steps), Double-Split (+/- 30° and 180° +/- 30°).
- **Visualization:** Integrated color wheel with dynamic radial indicators and outfit-scale swatches.

### 2. The Curriculum (Levels)
- **Hierarchy Strategy:** Based on the **Berlin-Kay Evolutionary Hierarchy** (The universal order in which languages acquire color names).
- **Structure:** 20 Levels, exactly 12 colors per Level (240 unique, curated colors).
- **Level 1:** The 11 Basic Color Terms (White, Black, Red, Green, Yellow, Blue, Brown, Purple, Pink, Orange, Gray) + Silver.

### 3. UI/UX Philosophy
- **Aesthetic:** "Museum Gallery" style. Minimalist white frames, sophisticated shadows, and a warm-linen background (`#fcfcf9`).
- **Typography:**
  - `Cormorant Garamond` (Serif): For headings and color names.
  - `Montserrat` (Sans): For UI controls and metadata.
- **Responsive:** Optimized for single-hand phone use with stacked layouts and touch-friendly grid selectors.

---

## 🛠️ Tech Stack
- **Framework:** React + Vite (TypeScript)
- **Styling:** CSS3 (Vanilla) with Glassmorphism and CSS Variables.
- **Math/Color Library:** `chroma-js`.
- **Deployment:** GitHub Pages (via GH Actions).

---

## 📍 Current State
- **Lexicon:** Fully functional naming engine for any hex input.
- **Learn:** 20-level gallery with names and hex codes visible.
- **Game:** Grid-based level selector with jittered HSL target colors to test visual intuition.
- **Branding:** "Prism" logo and custom favicon implemented.

## 📝 Guidelines for Future Agents
- **Deduplication:** Never add a color that already exists in `src/constants.ts` by name or hex.
- **Surgical Styling:** Maintain the gallery frames (`fashion-square` class) for all color displays.
- **OKLCH Preference:** Always use OKLCH for color comparisons; avoid HEX-based distance as it is perceptually inaccurate.
- **Mobile First:** Ensure any new section or tab is tested for vertical scrolling on 375px wide screens.
- **Pushing:** The sandbox environment lacks `ssh`. Instruct the user to run `git push origin main` manually for deployments.
