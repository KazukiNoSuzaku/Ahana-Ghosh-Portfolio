// ─── Framer Motion Animation Variants ────────────────────────────────────────
// Centralized animation definitions for consistent motion design

import type { Variants } from "framer-motion";

// ── Entrance Animations ────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

// ── Container / Stagger ────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

// ── Hero Specific ──────────────────────────────────────────────────────────
export const heroTitle: Variants = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
  },
};

export const heroSubtitle: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.15 },
  },
};

export const heroCta: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.35 },
  },
};

export const heroVisual: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 },
  },
};

// ── Card Hover ─────────────────────────────────────────────────────────────
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow:
      "0 2px 8px rgba(124, 110, 230, 0.08), 0 1px 4px rgba(0,0,0,0.04)",
  },
  hover: {
    y: -6,
    boxShadow:
      "0 12px 40px rgba(124, 110, 230, 0.18), 0 4px 16px rgba(0,0,0,0.06)",
    transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Floating ───────────────────────────────────────────────────────────────
export const floatVariant = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

// ── Viewport defaults ─────────────────────────────────────────────────────
export const viewportOnce = { once: true, margin: "-80px" };
