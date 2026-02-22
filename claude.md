# Ahana Ghosh Portfolio — Design System

This document defines the complete design language for the academic portfolio.
All UI components must reference these tokens. Do not hardcode values.

---

## 1. Color System

### Pastel Palette (Primary)
| Token | Hex | Usage |
|---|---|---|
| `lavender` | `#E6E6FA` | Section backgrounds, card fills |
| `lavender-light` | `#F0F0FF` | Hover states, subtle fills |
| `lavender-dark` | `#C8C8F0` | Borders, dividers |
| `sky-pastel` | `#DCEEFF` | Alternate section backgrounds |
| `sky-light` | `#EFF6FF` | Card hover backgrounds |
| `sky-dark` | `#B8D8FF` | Borders on sky elements |
| `mint` | `#DFF5EA` | Success states, bioinformatics tags |
| `mint-light` | `#F0FBF4` | Subtle backgrounds |
| `peach` | `#FFE5D9` | Warm accents, highlight tags |
| `peach-light` | `#FFF2EC` | Hover states |
| `lilac` | `#F3E8FF` | Card backgrounds, featured areas |
| `lilac-light` | `#FAF5FF` | Page backgrounds |

### Accent Colors
| Token | Hex | Usage |
|---|---|---|
| `violet-muted` | `#7C6EE6` | Primary CTA buttons, links, active states |
| `violet-light` | `#9B8EF0` | Hover states for violet elements |
| `violet-dark` | `#5C4EC6` | Pressed states |
| `blue-soft` | `#6BA8FF` | Secondary accents, skill tags |
| `blue-light` | `#8BBEFF` | Hover states |
| `blue-dark` | `#4B88DF` | Active states |

### Neutral System
| Token | Hex | Usage |
|---|---|---|
| `background` | `#FAFAFF` | Page background |
| `surface` | `#FFFFFF` | Cards, elevated surfaces |
| `text-primary` | `#1A1A2E` | Primary headings, body text |
| `text-secondary` | `#6B7280` | Subtitles, metadata, labels |
| `text-muted` | `#9CA3AF` | Disabled, placeholder text |
| `border` | `#E8E8F4` | Default borders |
| `border-light` | `#F0F0F8` | Subtle dividers |

---

## 2. Typography Scale

### Font Families
- **Headings**: Playfair Display — editorial, academic gravitas
- **Body**: Inter — clean, modern, highly readable
- **Code / Labels**: JetBrains Mono — technical precision

### Type Scale
| Token | Size | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|
| `display-xl` | 4.5rem (72px) | 1.1 | -0.03em | Hero name |
| `display-lg` | 3.75rem (60px) | 1.1 | -0.025em | Hero sections |
| `display-md` | 3rem (48px) | 1.15 | -0.02em | Section titles |
| `display-sm` | 2.25rem (36px) | 1.2 | -0.015em | Subsection headers |
| `heading-xl` | 1.875rem (30px) | 1.3 | -0.01em | Card titles |
| `heading-lg` | 1.5rem (24px) | 1.35 | -0.008em | Sub-headings |
| `heading-md` | 1.25rem (20px) | 1.4 | -0.005em | Item titles |
| `heading-sm` | 1.125rem (18px) | 1.45 | 0 | Labels |
| `body-lg` | 1.125rem (18px) | 1.7 | 0 | Lead paragraphs |
| `body-md` | 1rem (16px) | 1.7 | 0 | Body text |
| `body-sm` | 0.875rem (14px) | 1.6 | 0 | Captions, metadata |
| `label-lg` | 0.875rem (14px) | 1.4 | 0.05em | Tags, badges |
| `label-sm` | 0.75rem (12px) | 1.4 | 0.06em | Micro labels |

### Typography Rules
- Section headings use `font-serif` (Playfair Display) at `display-md` with `font-weight: 700`
- Body text uses `font-sans` (Inter) at `body-md` with `font-weight: 400`
- Labels and tags use `font-sans` at `label-lg` with `font-weight: 500`, uppercase
- Never use pure black for text — always use `text-primary` (`#1A1A2E`)

---

## 3. Spacing Scale

Based on an 8px grid system.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Tight spacing |
| `space-3` | 12px | Compact elements |
| `space-4` | 16px | Default element padding |
| `space-5` | 20px | Component padding |
| `space-6` | 24px | Section internal spacing |
| `space-8` | 32px | Between components |
| `space-10` | 40px | Card padding |
| `space-12` | 48px | Large component spacing |
| `space-16` | 64px | Section header spacing |
| `space-20` | 80px | Between major sections |
| `section` | 96px | Section top/bottom padding |
| `section-sm` | 64px | Mobile section padding |

---

## 4. Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `rounded-xs` | 4px | Tags, badges, micro elements |
| `rounded-sm` | 8px | Small cards, inputs |
| `rounded-md` | 12px | Standard cards |
| `rounded-lg` | 16px | Large cards, containers |
| `rounded-xl` | 20px | Featured sections |
| `rounded-2xl` | 24px | Hero containers, modals |
| `rounded-3xl` | 32px | Large feature blocks |
| `rounded-pill` | 9999px | Pills, tags, buttons |

---

## 5. Shadow System

All shadows use violet-tinted base for visual cohesion.

| Token | Value | Usage |
|---|---|---|
| `shadow-soft-xs` | `0 1px 3px rgba(124,110,230,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Subtle elevation |
| `shadow-soft-sm` | `0 2px 8px rgba(124,110,230,0.08), 0 1px 4px rgba(0,0,0,0.04)` | Cards at rest |
| `shadow-soft-md` | `0 4px 16px rgba(124,110,230,0.10), 0 2px 8px rgba(0,0,0,0.04)` | Hovered elements |
| `shadow-soft-lg` | `0 8px 32px rgba(124,110,230,0.12), 0 4px 16px rgba(0,0,0,0.06)` | Featured cards |
| `shadow-soft-xl` | `0 16px 48px rgba(124,110,230,0.15), 0 8px 24px rgba(0,0,0,0.08)` | Modals, drawers |
| `shadow-glow-violet` | `0 0 24px rgba(124,110,230,0.30)` | Button glow on hover |
| `shadow-glow-blue` | `0 0 24px rgba(107,168,255,0.30)` | Secondary glow |
| `shadow-card-hover` | `0 12px 40px rgba(124,110,230,0.18), 0 4px 16px rgba(0,0,0,0.06)` | Card hover state |

---

## 6. Animation Tokens

| Token | Duration | Easing | Usage |
|---|---|---|---|
| `fast` | 150ms | ease-out | Hover micro-interactions |
| `base` | 250ms | ease-in-out | Button states, toggles |
| `slow` | 400ms | cubic-bezier(0.4,0,0.2,1) | Card transitions |
| `slower` | 600ms | cubic-bezier(0.4,0,0.2,1) | Page transitions |
| `spring` | variable | cubic-bezier(0.34,1.56,0.64,1) | Bouncy interactions |
| `float` | 6s | ease-in-out infinite | Floating hero elements |
| `pulse-soft` | 3s | ease-in-out infinite | Ambient glow pulses |

### Framer Motion Variants
```ts
// Fade up — standard entrance
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
}

// Stagger children
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
}

// Card hover
const cardHover = {
  rest: { y: 0, boxShadow: "shadow-soft-sm" },
  hover: { y: -6, boxShadow: "shadow-card-hover", transition: { duration: 0.25 } }
}
```

---

## 7. Gradient System

| Token | Value | Usage |
|---|---|---|
| `gradient-hero` | `135deg, #FAFAFF → #F3E8FF → #DCEEFF` | Hero section background |
| `gradient-section-alt` | `135deg, #F0FBF4 → #DCEEFF` | Alternate section backgrounds |
| `gradient-card-lavender` | `135deg, #F3E8FF → #E6E6FA` | Lavender card fills |
| `gradient-card-sky` | `135deg, #EFF6FF → #DCEEFF` | Sky blue card fills |
| `gradient-card-mint` | `135deg, #F0FBF4 → #DFF5EA` | Mint card fills |
| `gradient-card-peach` | `135deg, #FFF2EC → #FFE5D9` | Peach card fills |
| `gradient-accent` | `135deg, #7C6EE6 → #6BA8FF` | Primary gradient (buttons, accents) |
| `gradient-accent-soft` | `135deg, rgba(124,110,230,0.15) → rgba(107,168,255,0.15)` | Subtle accent backgrounds |

---

## 8. Component Design Rules

### Cards
- Background: white (`surface`) or pastel gradient
- Border: `1px solid border` (`#E8E8F4`)
- Border radius: `rounded-xl` (20px) for large cards, `rounded-lg` (16px) for standard
- Shadow at rest: `shadow-soft-sm`
- Shadow on hover: `shadow-card-hover`
- Hover: translate Y by -6px over 250ms
- Padding: `space-8` (32px) standard, `space-10` (40px) for featured

### Buttons
**Primary Button:**
- Background: `gradient-accent` (`#7C6EE6 → #6BA8FF`)
- Text: white, `label-lg`, font-weight 600
- Border radius: `rounded-pill`
- Padding: `16px 32px`
- Hover: `shadow-glow-violet`, scale 1.02
- Active: scale 0.98

**Secondary Button:**
- Background: transparent
- Border: `2px solid violet-muted`
- Text: `violet-muted`, `label-lg`
- Border radius: `rounded-pill`
- Hover: background `lavender`, `shadow-soft-sm`

**Ghost Button:**
- Background: transparent
- Text: `text-secondary`
- Hover: background `border-light`, text `text-primary`

### Section Headers
- Eyebrow label: `label-lg` uppercase, `violet-muted`, `font-mono`, tracking wide
- Main heading: `display-md`, `font-serif`, `text-primary`
- Sub-heading: `body-lg`, `text-secondary`
- Decorative element: gradient underline accent bar

### Tags / Badges
- Background: pastel variant matching context
- Text: `label-lg`, font-weight 500
- Border radius: `rounded-pill`
- Padding: `4px 12px`
- No border by default (use background contrast)

### Navbar
- Background: `surface` with `backdrop-blur-md` on scroll
- Border bottom: `1px solid border-light`
- Height: 72px
- Shadow on scroll: `shadow-soft-xs`
- Smooth transition between transparent and frosted states

### Section Layout
- Max width: 1280px, centered
- Horizontal padding: `space-6` (24px) mobile, `space-12` (48px) desktop
- Section vertical padding: `section` (96px) top/bottom

---

## 9. Glassmorphism (Use Sparingly)

Only apply to overlapping UI elements where depth communication is needed.

```css
/* Glassmorphism card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.5);
box-shadow: 0 8px 32px rgba(124, 110, 230, 0.1);
```

Never apply to: body text containers, navigation (unless frosted navbar), plain content cards.

---

## 10. Layout Grid

- **Desktop**: 12-column grid, 24px gutters, max-width 1280px
- **Tablet**: 8-column grid, 20px gutters
- **Mobile**: 4-column grid, 16px gutters

**Breakpoints:**
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)
- `2xl`: 1536px (ultra-wide)

---

## 11. Image Treatment

- All images: `rounded-2xl` (24px) radius
- Academic photo: circular crop at mobile, square with rounded corners at desktop
- Subtle `shadow-soft-lg` under images
- Hover: slight scale (1.02) with `overflow-hidden` container

---

## 12. Accessibility

- All text on pastel backgrounds must achieve WCAG AA contrast (4.5:1)
- `text-primary` (#1A1A2E) on `background` (#FAFAFF): passes AAA
- `text-secondary` (#6B7280) on `surface` (#FFFFFF): passes AA
- Focus rings: `2px solid violet-muted`, `2px offset`
- Interactive elements minimum touch target: 44x44px

---

*Last updated: 2026-02-22 | Portfolio: Ahana Ghosh, PhD Researcher — Biomedical Sciences & Cancer Immunology*
