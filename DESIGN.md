---
name: Obsidian Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#e1c296'
  on-secondary: '#402d0d'
  secondary-container: '#594321'
  on-secondary-container: '#cfb086'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#ffddb0'
  secondary-fixed-dim: '#e1c296'
  on-secondary-fixed: '#281800'
  on-secondary-fixed-variant: '#594321'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  surface-elevated: '#1A1A1A'
  text-muted: '#8E8781'
  vibrant-indigo: '#6366F1'
  accent-gold: '#B89B72'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Metropolis
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Metropolis
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system is centered on a **Modern Minimalist** aesthetic with **Glassmorphic** accents, specifically tailored for a high-end professional portfolio. It targets a tech-savvy, design-conscious audience, evoking feelings of sophistication, precision, and digital craftsmanship. 

The visual narrative relies on high-contrast relationships between deep blacks and vibrant chromatic accents. It prioritizes motion as a core brand pillar, utilizing scroll-triggered transitions and subtle parallax effects to create a sense of depth and interactivity. The interface should feel like a premium digital gallery—quiet, confident, and meticulously organized.

## Colors

The palette is anchored in an absolute black (`#000000`) background to maximize contrast and focus. 

- **Primary:** A vibrant Indigo (`#6366F1`) serves as the core functional accent for calls to action, active states, and highlights.
- **Secondary:** A muted Gold (`#B89B72`) is used sparingly for decorative elements or high-level status indicators, providing a "premium" counterpoint to the tech-focused indigo.
- **Neutral:** Surfaces use `#1A1A1A` to create subtle separation from the pure black backdrop. Text follows a hierarchy from pure White (`#FFFFFF`) for headers to Muted Gray (`#8E8781`) for secondary information.

Color should be applied with restraint; the "vibrancy" requested comes from the intensity of the indigo against the black, not the quantity of color used.

## Typography

The typography system utilizes a "Sleek Sans" approach. **Montserrat** provides the structural, geometric foundation for all headlines, imparting a modern and assertive tone. **Metropolis** is used for body copy to maintain legibility while mirroring Montserrat’s geometric character.

For technical details or metadata, **JetBrains Mono** is introduced to signal precision and a "developer/creator" ethos. 

**Scale Strategy:**
- Use **Display LG** only for hero sections, scaling down significantly on mobile.
- Implement **Uppercase + Wide Tracking** for `label-sm` to create a sense of architectural labeling.
- Maintain a generous line-height (1.5x+) for body text to preserve the "clean" aesthetic.

## Layout & Spacing

The design system employs a **Fluid Grid** with generous white space (or "black space") to create an editorial feel. 

- **Grid Model:** 12-column system for desktop, 4-column for mobile.
- **Rhythm:** An 8px linear scale. Most component gaps should default to 24px (3 units) or 32px (4 units).
- **Sectioning:** Vertical spacing between sections should be aggressive (120px to 200px) to allow scroll animations enough room to breathe.
- **Reflow:** On mobile, margins tighten to 20px, and grid-based cards stack vertically.

## Elevation & Depth

In a pure black environment, traditional shadows are ineffective. Instead, this design system uses **Tonal Layering** and **Glassmorphism**:

1.  **Base Layer:** `#000000` (Background).
2.  **Surface Layer:** `#1A1A1A` (Cards, Menus).
3.  **Accent Depth:** Subtle `1px` inner-borders using a low-opacity White (10%) to define the edges of containers.
4.  **Glassmorphism:** Navigation bars and floating overlays use a backdrop blur (20px) with a semi-transparent black fill (e.g., `rgba(0,0,0,0.7)`).
5.  **Glows:** High-priority elements (like the Primary Button) may use a soft, diffused `box-shadow` of the Primary Indigo color with 0.3 opacity to simulate a neon-like emission.

## Shapes

The design system utilizes **Soft** geometry (`0.25rem` to `0.75rem`). This strikes a balance between the precision of "sharp" brutalism and the friendliness of "rounded" consumer apps.

- **Standard Buttons/Inputs:** 4px (0.25rem) corner radius.
- **Project Cards:** 12px (0.75rem) corner radius.
- **Pill Tags:** Used exclusively for skill chips or status indicators to provide visual variety.

## Components

### Buttons
- **Primary:** Solid Indigo background, white text. On hover, increase the intensity of the indigo glow shadow.
- **Secondary:** Transparent background with a 1px Indigo or Gold border. Text matches border color.
- **Ghost:** No background or border. Text shifts to white on hover.

### Cards (Project Showcase)
- Background is `#1A1A1A`. 
- No external shadow; use a 1px border of `rgba(255,255,255,0.05)`.
- Image should take the top 60% of the card, with a slight zoom-in animation on hover.

### Inputs
- Bottom-border only for a "boutique" look, or fully enclosed with `#1A1A1A` background.
- Focus state: Border transitions to Primary Indigo.

### Scroll Animations
- **Reveal:** Components should translate 30px upwards and fade in as they enter the viewport.
- **Stagger:** Lists of chips or project grids must animate child elements with a 50ms delay between each.
- **Parallax:** Hero images should move at 0.8x the scroll speed to create a "peek-in" effect.