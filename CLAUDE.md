# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Portfolio landing page for Piero Corrales — Web Developer & Data Scientist. Built with React + Vite. Single-page app with sections: Hero, Stats, Skills, Projects, Certifications, Contact.

## Commands

- `npm run dev` — Start dev server (Vite, port 5173)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

## Architecture

- **Vite + React** (no TypeScript, no router — single page)
- Each section is a self-contained component in `src/components/` with its own `.jsx` + `.css` file pair
- Global CSS variables defined in `src/styles/variables.css` (colors, fonts)
- Shared section styles (`.section-tag`, `.section-title`, `.bg-dark`) in `src/App.css`
- Scroll-reveal animation: `App.jsx` sets up an IntersectionObserver that adds `.visible` to `.reveal` elements
- Custom cursor (desktop only, hidden on mobile via media query at 900px)
- Fonts: Outfit (sans) and Space Mono (mono) loaded from Google Fonts in `index.html`

## Design System

- Dark theme: `--bg: #06060A`, `--surface: #12121C`
- Accent colors: `--blue: #3B82F6` (secondary), `--orange: #F97316` (primary CTA)
- All interactive elements use `cursor: none` (custom cursor replaces default)
- Responsive breakpoints: 900px (tablet/mobile nav), 480px (small mobile)
- Language is Spanish (lang="es")
