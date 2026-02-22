"use client";

import { motion } from "framer-motion";
import SplinePlaceholder from "./SplinePlaceholder";
import { personal } from "@/lib/data";
import {
  staggerContainer,
  heroTitle,
  heroSubtitle,
  heroCta,
  fadeIn,
  viewportOnce,
} from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient pt-[72px]">
      {/* Background ambient blobs */}
      <div className="blob-violet w-[600px] h-[600px] -top-32 -left-32 opacity-60" />
      <div className="blob-blue w-[500px] h-[500px] -bottom-32 -right-16 opacity-50" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#7C6EE6 1px, transparent 1px), linear-gradient(90deg, #7C6EE6 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-portfolio relative z-10 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-72px)]">
          {/* ── Left: Text content ─────────────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-7 max-w-xl"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeIn}>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium uppercase tracking-widest"
                style={{
                  background: "rgba(124,110,230,0.08)",
                  border: "1px solid rgba(124,110,230,0.2)",
                  color: "#7C6EE6",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#7C6EE6" }}
                />
                PhD Researcher · Biomedical Sciences
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={heroTitle}>
              <h1 className="font-serif font-bold text-[#1A1A2E] leading-[1.05] tracking-tight">
                <span
                  className="block"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
                >
                  Ahana
                </span>
                <span
                  className="block gradient-text"
                  style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}
                >
                  Ghosh
                </span>
              </h1>
            </motion.div>

            {/* Title & specialization */}
            <motion.div variants={heroSubtitle} className="space-y-2">
              <p
                className="font-sans font-semibold tracking-tight"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                  color: "#1A1A2E",
                }}
              >
                Biomedical Sciences Researcher
                <span
                  className="inline-block mx-2 w-1.5 h-1.5 rounded-full align-middle"
                  style={{ background: "linear-gradient(135deg, #7C6EE6, #6BA8FF)" }}
                />
                <span className="gradient-text">Cancer Immunology</span>
              </p>
              <p
                className="font-mono text-sm"
                style={{ color: "#6B7280" }}
              >
                {personal.institution} · {personal.department}
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={heroSubtitle}
              className="text-[#6B7280] leading-relaxed"
              style={{ fontSize: "clamp(1rem, 2vw, 1.125rem)" }}
            >
              {personal.tagline}
            </motion.p>

            {/* Research interests chips */}
            <motion.div variants={heroCta} className="flex flex-wrap gap-2">
              {personal.interests.slice(0, 3).map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                  style={{
                    background: "rgba(124,110,230,0.07)",
                    border: "1px solid rgba(124,110,230,0.15)",
                    color: "#7C6EE6",
                  }}
                >
                  {interest}
                </span>
              ))}
              <span
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium"
                style={{
                  background: "rgba(107,168,255,0.07)",
                  border: "1px solid rgba(107,168,255,0.2)",
                  color: "#4B88DF",
                }}
              >
                +{personal.interests.length - 3} more
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroCta}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                className="btn-primary"
                onClick={() => {
                  document
                    .getElementById("research")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                View Research
              </button>
              <button
                className="btn-secondary"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              variants={heroCta}
              className="flex items-center gap-8 pt-4 border-t border-[#E8E8F4]"
            >
              {[
                { value: "4+", label: "Publications" },
                { value: "3", label: "Institutions" },
                { value: "5+", label: "Years Research" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-serif font-bold text-2xl gradient-text leading-none"
                  >
                    {stat.value}
                  </p>
                  <p className="font-sans text-xs text-[#9CA3AF] mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Spline placeholder ───────────────────────────── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative floating tags */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -left-4 lg:-left-12 top-12 z-20 hidden md:block"
            >
              <div
                className="glass px-3.5 py-2.5 rounded-xl shadow-soft-md"
                style={{ border: "1px solid rgba(255,255,255,0.6)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#7C6EE6] font-semibold">
                  Current Focus
                </p>
                <p className="text-[#1A1A2E] text-xs font-medium mt-0.5">
                  T-cell Exhaustion
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="absolute -right-2 lg:-right-4 bottom-12 z-20 hidden md:block"
            >
              <div
                className="glass px-3.5 py-2.5 rounded-xl shadow-soft-md"
                style={{ border: "1px solid rgba(255,255,255,0.6)" }}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#4B88DF] font-semibold">
                  Method
                </p>
                <p className="text-[#1A1A2E] text-xs font-medium mt-0.5">
                  scRNA-seq Analysis
                </p>
              </div>
            </motion.div>

            <SplinePlaceholder />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-[#C8C8F0] flex items-start justify-center p-1.5"
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "linear-gradient(135deg, #7C6EE6, #6BA8FF)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
