"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { personal } from "@/lib/data";
import {
  staggerContainer,
  fadeUp,
  slideInLeft,
  slideInRight,
  viewportOnce,
} from "@/lib/animations";

export default function About() {
  return (
    <SectionContainer
      id="about"
      eyebrow="About Me"
      title="Bridging Immunology & Oncology"
      subtitle="Driven by curiosity and the conviction that understanding immune-tumor crosstalk will unlock transformative cancer therapies."
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* ── Left: Photo + Quick Info ─────────────────────────────── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2 space-y-6"
        >
          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, #F3E8FF 0%, #DCEEFF 50%, #DFF5EA 100%)",
                border: "1px solid rgba(232,232,244,0.8)",
                boxShadow: "0 16px 48px rgba(124,110,230,0.14), 0 4px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* Decorative academic portrait placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div
                    className="w-24 h-24 rounded-full mx-auto flex items-center justify-center text-3xl font-serif font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #7C6EE6 0%, #6BA8FF 100%)",
                      boxShadow: "0 8px 24px rgba(124,110,230,0.35)",
                    }}
                  >
                    AG
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">
                    Photo Placeholder
                  </p>
                </div>
              </div>
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #7C6EE6 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
            </div>

            {/* Floating institution badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-5 -right-4 glass rounded-xl px-4 py-3 shadow-soft-lg"
              style={{ border: "1px solid rgba(255,255,255,0.7)" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#7C6EE6] font-semibold">
                Institution
              </p>
              <p className="text-[#1A1A2E] text-sm font-bold leading-tight mt-0.5">
                Johns Hopkins
              </p>
              <p className="text-[#9CA3AF] text-[10px]">School of Medicine</p>
            </motion.div>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            {[
              { label: "Degree", value: "PhD Candidate", color: "violet" },
              { label: "Program", value: "Biomedical Sci.", color: "sky" },
              { label: "Specialty", value: "Cancer Immunology", color: "mint" },
              { label: "Status", value: "Active Research", color: "peach" },
            ].map((item) => {
              const colorMap: Record<string, { bg: string; text: string }> = {
                violet: { bg: "rgba(124,110,230,0.08)", text: "#7C6EE6" },
                sky: { bg: "rgba(107,168,255,0.10)", text: "#4B88DF" },
                mint: { bg: "#DFF5EA", text: "#1a7a4a" },
                peach: { bg: "#FFE5D9", text: "#c05621" },
              };
              const c = colorMap[item.color];
              return (
                <div
                  key={item.label}
                  className="rounded-xl p-3"
                  style={{
                    background: c.bg,
                    border: `1px solid ${c.text}22`,
                  }}
                >
                  <p
                    className="font-mono text-[9px] uppercase tracking-widest font-semibold"
                    style={{ color: c.text }}
                  >
                    {item.label}
                  </p>
                  <p className="text-[#1A1A2E] text-xs font-semibold mt-1">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Right: Text content ───────────────────────────────────── */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-3 space-y-8"
        >
          {/* Bio paragraphs */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {personal.bio.split("\n\n").filter(Boolean).map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-[#6B7280] leading-[1.85]"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
              >
                {para.trim()}
              </motion.p>
            ))}
          </motion.div>

          {/* Research interests */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="accent-divider" />
              <h3 className="font-serif font-bold text-[#1A1A2E] text-lg">
                Research Interests
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {personal.interests.map((interest, i) => {
                const colors = [
                  "tag-violet",
                  "tag-blue",
                  "tag-mint",
                  "tag-peach",
                  "tag-lavender",
                  "tag-sky",
                ];
                return (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                    className={`${colors[i % colors.length]} text-xs px-3.5 py-1.5`}
                  >
                    {interest}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline: Education */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="accent-divider" />
              <h3 className="font-serif font-bold text-[#1A1A2E] text-lg">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  degree: "PhD, Biomedical Sciences",
                  institution: "Johns Hopkins University",
                  period: "2021 – Present",
                  focus: "Cancer Immunology & Tumor Microenvironment",
                  color: "#7C6EE6",
                  bg: "rgba(124,110,230,0.06)",
                },
                {
                  degree: "B.S., Molecular Biology (Honors)",
                  institution: "University of California, San Diego",
                  period: "2016 – 2020",
                  focus: "Cancer Genomics & Epigenetics",
                  color: "#4B88DF",
                  bg: "rgba(107,168,255,0.06)",
                },
              ].map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{
                    background: edu.bg,
                    border: `1px solid ${edu.color}22`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ background: edu.color }}
                  />
                  <div className="min-w-0">
                    <p className="font-sans font-bold text-[#1A1A2E] text-sm leading-tight">
                      {edu.degree}
                    </p>
                    <p
                      className="font-medium text-xs mt-0.5"
                      style={{ color: edu.color }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="font-mono text-[10px] text-[#9CA3AF]">
                        {edu.period}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#E8E8F4]" />
                      <span className="text-[#9CA3AF] text-[10px] truncate">
                        {edu.focus}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}
