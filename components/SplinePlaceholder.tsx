"use client";

import { motion } from "framer-motion";
import { floatVariant } from "@/lib/animations";

export default function SplinePlaceholder() {
  return (
    <motion.div
      id="spline-container"
      className="relative w-full aspect-square max-w-[540px] mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.3 }}
    >
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-3xl animate-pulse-soft"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,110,230,0.12) 0%, rgba(107,168,255,0.12) 100%)",
          filter: "blur(24px)",
          transform: "scale(1.08)",
        }}
      />

      {/* Main container */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #FAF5FF 0%, #EFF6FF 40%, #F0FBF4 100%)",
          border: "1px solid rgba(232,232,244,0.8)",
          boxShadow:
            "0 24px 64px rgba(124,110,230,0.14), 0 8px 32px rgba(0,0,0,0.06)",
        }}
      >
        {/* Inner decorative gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(124,110,230,0.1) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(107,168,255,0.1) 0%, transparent 60%)",
          }}
        />

        {/* Floating DNA helix illustration (CSS art) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={floatVariant}
            animate="animate"
            className="relative"
          >
            {/* Abstract molecular/cellular art */}
            <svg
              width="320"
              height="320"
              viewBox="0 0 320 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-60"
            >
              {/* Outer orbit ring */}
              <ellipse
                cx="160"
                cy="160"
                rx="130"
                ry="130"
                stroke="url(#grad1)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                opacity="0.5"
              />
              {/* Inner orbit ring */}
              <ellipse
                cx="160"
                cy="160"
                rx="90"
                ry="90"
                stroke="url(#grad2)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.5"
              />
              {/* Core cell */}
              <circle cx="160" cy="160" r="36" fill="url(#cellGrad)" opacity="0.85" />
              <circle cx="160" cy="160" r="20" fill="url(#nucleusGrad)" opacity="0.9" />
              {/* Orbiting particles */}
              <circle cx="290" cy="160" r="8" fill="#7C6EE6" opacity="0.7" />
              <circle cx="30" cy="160" r="6" fill="#6BA8FF" opacity="0.6" />
              <circle cx="160" cy="30" r="7" fill="#9B8EF0" opacity="0.65" />
              <circle cx="160" cy="290" r="5" fill="#6BA8FF" opacity="0.55" />
              <circle cx="252" cy="68" r="6" fill="#DFF5EA" stroke="#7C6EE6" strokeWidth="1.5" opacity="0.8" />
              <circle cx="68" cy="252" r="5" fill="#DCEEFF" stroke="#6BA8FF" strokeWidth="1.5" opacity="0.7" />
              <circle cx="252" cy="252" r="7" fill="#F3E8FF" stroke="#9B8EF0" strokeWidth="1.5" opacity="0.75" />
              <circle cx="68" cy="68" r="5" fill="#FFE5D9" stroke="#7C6EE6" strokeWidth="1.5" opacity="0.7" />
              {/* Connecting filaments */}
              <path d="M160 124 Q200 80 252 68" stroke="url(#grad1)" strokeWidth="1.2" opacity="0.4" fill="none" />
              <path d="M160 196 Q120 240 68 252" stroke="url(#grad2)" strokeWidth="1.2" opacity="0.4" fill="none" />
              <path d="M196 160 Q240 120 252 68" stroke="url(#grad1)" strokeWidth="1.2" opacity="0.4" fill="none" />
              <path d="M124 160 Q80 200 68 252" stroke="url(#grad2)" strokeWidth="1.2" opacity="0.4" fill="none" />
              {/* Helix strands */}
              <path
                d="M120 80 Q140 120 120 160 Q100 200 120 240"
                stroke="#7C6EE6"
                strokeWidth="2"
                opacity="0.35"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M200 80 Q180 120 200 160 Q220 200 200 240"
                stroke="#6BA8FF"
                strokeWidth="2"
                opacity="0.35"
                fill="none"
                strokeLinecap="round"
              />
              {/* Cross rungs */}
              {[100, 120, 140, 160, 180, 200, 220].map((y, i) => (
                <line
                  key={i}
                  x1={120 + Math.sin((y - 80) * 0.1) * 20}
                  y1={y}
                  x2={200 - Math.sin((y - 80) * 0.1) * 20}
                  y2={y}
                  stroke={i % 2 === 0 ? "#7C6EE6" : "#6BA8FF"}
                  strokeWidth="1.5"
                  opacity="0.3"
                  strokeLinecap="round"
                />
              ))}

              {/* Gradients */}
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C6EE6" />
                  <stop offset="100%" stopColor="#6BA8FF" />
                </linearGradient>
                <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#6BA8FF" />
                  <stop offset="100%" stopColor="#9B8EF0" />
                </linearGradient>
                <radialGradient id="cellGrad" cx="40%" cy="40%">
                  <stop offset="0%" stopColor="#E6E6FA" />
                  <stop offset="100%" stopColor="#DCEEFF" />
                </radialGradient>
                <radialGradient id="nucleusGrad" cx="35%" cy="35%">
                  <stop offset="0%" stopColor="#9B8EF0" />
                  <stop offset="100%" stopColor="#7C6EE6" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        {/* Decorative grid dots */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #7C6EE6 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Label at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: "#7C6EE6" }}
            >
              3D Scene
            </p>
            <p className="text-[#6B7280] text-xs mt-0.5">Spline scene placeholder</p>
          </div>
          {/* Placeholder badge */}
          <span
            className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold"
            style={{
              background: "rgba(124,110,230,0.1)",
              color: "#7C6EE6",
              border: "1px solid rgba(124,110,230,0.2)",
            }}
          >
            Spline.js
          </span>
        </div>

        {/* Corner accents */}
        <div
          className="absolute top-4 right-4 w-8 h-8 rounded-full opacity-60 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(124,110,230,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-4 left-4 w-6 h-6 rounded-full opacity-50 animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(107,168,255,0.5) 0%, transparent 70%)",
            animationDelay: "1s",
          }}
        />
      </div>
    </motion.div>
  );
}
