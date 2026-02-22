"use client";

import Image from "next/image";
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
        {/* ── Left: Photos + Quick Info ─────────────────────────────── */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="lg:col-span-2 space-y-5"
        >
          {/* Main profile photo — lab coat selfie */}
          <div className="relative">
            <div
              className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative"
              style={{
                boxShadow: "0 16px 48px rgba(124,110,230,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                border: "1px solid rgba(232,232,244,0.6)",
              }}
            >
              <Image
                src="/images/ahana-profile.jpg"
                alt="Ahana Ghosh at the Beatson Institute for Cancer Research"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 420px"
              />
              {/* Subtle gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,8,34,0.55) 0%, transparent 100%)",
                }}
              />
              {/* Beatson badge at bottom of photo */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/75 font-semibold">
                  Beatson Institute for Cancer Research
                </p>
                <p className="text-white/55 text-[9px] font-mono mt-0.5">
                  University of Glasgow
                </p>
              </div>
            </div>

            {/* Glasgow campus photo — floating thumbnail */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-4 rounded-xl overflow-hidden"
              style={{
                width: "118px",
                height: "118px",
                border: "3px solid rgba(255,255,255,0.9)",
                boxShadow:
                  "0 8px 28px rgba(124,110,230,0.22), 0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/images/ahana-glasgow.jpg"
                alt="Ahana at the University of Glasgow"
                fill
                className="object-cover object-top"
                sizes="118px"
              />
              {/* Caption overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-1.5 py-1"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,8,34,0.75), transparent)",
                }}
              >
                <p className="font-mono text-[7px] uppercase tracking-wider text-white/80 text-center">
                  Glasgow
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-2 gap-2.5 pt-4">
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

          {/* Education */}
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

            <div className="space-y-3">
              {[
                {
                  degree: "PhD, Biomedical Sciences",
                  institution: "University of Glasgow",
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
                  <div className="min-w-0 flex-1">
                    <p className="font-sans font-bold text-[#1A1A2E] text-sm leading-tight">
                      {edu.degree}
                    </p>
                    <p
                      className="font-medium text-xs mt-0.5"
                      style={{ color: edu.color }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                      <span className="font-mono text-[10px] text-[#9CA3AF]">
                        {edu.period}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[#E8E8F4]" />
                      <span className="text-[#9CA3AF] text-[10px]">
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
