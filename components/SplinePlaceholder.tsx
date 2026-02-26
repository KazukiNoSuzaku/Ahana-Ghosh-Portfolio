"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Dynamic import — disables SSR for Three.js canvas
const CancerImmunologyModel = dynamic(
  () => import("./CancerImmunologyModel"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: "#7C6EE6", borderTopColor: "transparent" }}
          />
          <p
            className="font-mono text-[10px] uppercase tracking-widest"
            style={{ color: "#9B8EF0" }}
          >
            Loading model…
          </p>
        </div>
      </div>
    ),
  }
);

export default function SplinePlaceholder() {
  return (
    <motion.div
      id="spline-container"
      className="relative w-full aspect-square max-w-[540px] mx-auto"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
    >
      {/* Outer ambient glow — pulses softly */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(135deg, rgba(124,110,230,0.28) 0%, rgba(107,168,255,0.22) 100%)",
          filter: "blur(32px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Main container — deep cosmic dark */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 40% 30%, #16124A 0%, #0A0822 50%, #050410 100%)",
          border: "1px solid rgba(124,110,230,0.35)",
          boxShadow:
            "0 28px 72px rgba(124,110,230,0.3), 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Subtle star-field dot grid */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(155,142,240,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Three.js canvas — fills container */}
        <div className="absolute inset-0">
          <CancerImmunologyModel />
        </div>

        {/* Top-left: cell type legend */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <div className="flex flex-col gap-1.5">
            {[
              { label: "Tumor Cell",  color: "#F87171" },
              { label: "CTL / T-Cell", color: "#9B8EF0" },
              { label: "NK Cell",     color: "#6BA8FF" },
              { label: "Cytokines",   color: "#6EE7B7" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: item.color }}
                />
                <span
                  className="font-mono text-[8px] uppercase tracking-widest"
                  style={{ color: "rgba(200,195,255,0.55)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top-right: live indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5 pointer-events-none">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#6EE7B7" }}
          />
          <span
            className="font-mono text-[8px] uppercase tracking-widest"
            style={{ color: "rgba(110,231,183,0.7)" }}
          >
            Live 3D
          </span>
        </div>

        {/* Bottom label bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(5,4,16,0.95) 0%, transparent 100%)",
          }}
        >
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: "#9B8EF0" }}
            >
              Cancer Immune Attack
            </p>
            <p
              className="font-mono text-[9px] mt-0.5"
              style={{ color: "rgba(155,142,240,0.5)" }}
            >
              CTL + NK cell · tumour lysis
            </p>
          </div>

          <span
            className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold"
            style={{
              background: "rgba(124,110,230,0.18)",
              color: "#9B8EF0",
              border: "1px solid rgba(124,110,230,0.35)",
            }}
          >
            Three.js
          </span>
        </div>
      </div>
    </motion.div>
  );
}
