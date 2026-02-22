import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary pastel palette
        lavender: {
          DEFAULT: "#E6E6FA",
          light: "#F0F0FF",
          dark: "#C8C8F0",
        },
        sky: {
          pastel: "#DCEEFF",
          light: "#EFF6FF",
          dark: "#B8D8FF",
        },
        mint: {
          DEFAULT: "#DFF5EA",
          light: "#F0FBF4",
          dark: "#B8E8CC",
        },
        peach: {
          DEFAULT: "#FFE5D9",
          light: "#FFF2EC",
          dark: "#FFC8AD",
        },
        lilac: {
          DEFAULT: "#F3E8FF",
          light: "#FAF5FF",
          dark: "#E0C8FF",
        },
        // Accent colors
        violet: {
          muted: "#7C6EE6",
          light: "#9B8EF0",
          dark: "#5C4EC6",
        },
        blue: {
          soft: "#6BA8FF",
          light: "#8BBEFF",
          dark: "#4B88DF",
        },
        // Neutral system
        background: "#FAFAFF",
        surface: "#FFFFFF",
        "text-primary": "#1A1A2E",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",
        border: "#E8E8F4",
        "border-light": "#F0F0F8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "heading-xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.35", letterSpacing: "-0.008em" }],
        "heading-md": ["1.25rem", { lineHeight: "1.4", letterSpacing: "-0.005em" }],
        "heading-sm": ["1.125rem", { lineHeight: "1.45" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label-lg": ["0.875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        "label-sm": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.06em" }],
      },
      spacing: {
        "section": "6rem",
        "section-sm": "4rem",
        "container": "1280px",
      },
      borderRadius: {
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "20px",
        "2xl": "24px",
        "3xl": "32px",
        "pill": "9999px",
      },
      boxShadow: {
        "soft-xs": "0 1px 3px rgba(124, 110, 230, 0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "soft-sm": "0 2px 8px rgba(124, 110, 230, 0.08), 0 1px 4px rgba(0,0,0,0.04)",
        "soft-md": "0 4px 16px rgba(124, 110, 230, 0.1), 0 2px 8px rgba(0,0,0,0.04)",
        "soft-lg": "0 8px 32px rgba(124, 110, 230, 0.12), 0 4px 16px rgba(0,0,0,0.06)",
        "soft-xl": "0 16px 48px rgba(124, 110, 230, 0.15), 0 8px 24px rgba(0,0,0,0.08)",
        "glow-violet": "0 0 24px rgba(124, 110, 230, 0.3)",
        "glow-blue": "0 0 24px rgba(107, 168, 255, 0.3)",
        "card-hover": "0 12px 40px rgba(124, 110, 230, 0.18), 0 4px 16px rgba(0,0,0,0.06)",
        "inner-soft": "inset 0 1px 3px rgba(124, 110, 230, 0.06)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #FAFAFF 0%, #F3E8FF 40%, #DCEEFF 100%)",
        "gradient-section-alt": "linear-gradient(135deg, #F0FBF4 0%, #DCEEFF 100%)",
        "gradient-card-lavender": "linear-gradient(135deg, #F3E8FF 0%, #E6E6FA 100%)",
        "gradient-card-sky": "linear-gradient(135deg, #EFF6FF 0%, #DCEEFF 100%)",
        "gradient-card-mint": "linear-gradient(135deg, #F0FBF4 0%, #DFF5EA 100%)",
        "gradient-card-peach": "linear-gradient(135deg, #FFF2EC 0%, #FFE5D9 100%)",
        "gradient-accent": "linear-gradient(135deg, #7C6EE6 0%, #6BA8FF 100%)",
        "gradient-accent-soft": "linear-gradient(135deg, rgba(124,110,230,0.15) 0%, rgba(107,168,255,0.15) 100%)",
        "shimmer": "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      transitionDuration: {
        "fast": "150ms",
        "base": "250ms",
        "slow": "400ms",
        "slower": "600ms",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
