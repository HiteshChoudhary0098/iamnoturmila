# UWillC. — Urmila Choudhary Portfolio

A single-page portfolio site for Urmila Choudhary (UWillC.), built with **React + Vite** and managed with **pnpm**. It recreates the original deck slides — cover, about, services, section dividers, and the La Carreta case study — as a scrolling experience.

## Stack
- React 18
- Vite 5
- Plain CSS (design tokens via CSS variables in `src/styles/global.css`)
- Google Fonts: Playfair Display (serif wordmark), Archivo Black (display titles), Jost (labels/body)

## Getting started

```bash
pnpm install
pnpm dev        # start dev server (http://localhost:5173)
pnpm build      # production build -> dist/
pnpm preview    # preview the production build
```

## Project structure

```
src/
  App.jsx                 # composes all sections, runs the reveal hook
  main.jsx                # React entry
  hooks/
    useReveal.js          # IntersectionObserver scroll-reveal
  components/
    Wordmark.jsx          # "UWillC." logo
    Nav.jsx               # sticky nav + mobile menu
    Cover.jsx             # PORTFOLIO 2022 hero
    About.jsx             # Urmila Choudhary bio
    Services.jsx          # Branding / Digital Content / Photography list
    Divider.jsx           # reusable section divider + tab bar
    FloatIcons.jsx        # floating social icons (Digital Content)
    Project.jsx           # La Carreta case study (phone mock + feed grid)
    Footer.jsx            # contact section
  styles/
    global.css            # all styles + design tokens
```

## Notes
- The portrait and feed tiles are CSS recreations (colored blocks + text). Drop real `<img>` assets into `public/` and swap them in `About.jsx` / `Project.jsx` when ready.
- The "UWillC." / "Urmila Choudhary" letterforms in the source design use a paid font (looks like *Hatton*). Playfair Display is the closest free stand-in; license and self-host the real font for a pixel-perfect match.
