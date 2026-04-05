# Color Lexicon

A modern, standalone color dictionary built with Vite, React, and TypeScript.

## Features
- **Color Naming**: Identifies colors using the NTC (Name That Color) and Basic palettes.
- **Dynamic Background**: The entire UI adjusts its background and contrast based on the selected color.
- **Color Details**: Shows HEX, RGB, and HSL values.
- **Shades & Scales**: Generates a monochromatic scale for the selected color.
- **Complementary Colors**: Automatically calculates and displays the complementary color.
- **Search History**: Keeps track of your recently explored colors.
- **Single File Export**: The entire application is bundled into a single `index.html` file for easy sharing and portability.

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite with `vite-plugin-singlefile`
- **Libraries**:
  - `chroma-js`: Color manipulation and accessibility.
  - `color-namer`: Human-friendly color naming.

## Usage
Simply open `dist/index.html` in any modern web browser.
- Type a HEX code or select a color using the picker.
- Click on any shade or the complementary color to explore it further.
- Your recent colors will be saved in the "Recent Explorations" section.
