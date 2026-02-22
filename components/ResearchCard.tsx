"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface ResearchExperience {
  id: string;
  title: string;
  lab: string;
  institution: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  techniques: string[];
  tags: string[];
  color: string;
}

interface ResearchCardProps {
  experience: ResearchExperience;
  index: number;
}

const colorConfig: Record<
  string,
  {
    bg: string;
    border: string;
    accent: string;
    tagBg: string;
    tagText: string;
    badgeBg: string;
    badgeText: string;
  }
> = {
  violet: {
    bg: "linear-gradient(145deg, #FAF5FF 0%, #F3E8FF 100%)",
    border: "rgba(124,110,230,0.18)",
    accent: "#7C6EE6",
    tagBg: "rgba(124,110,230,0.08)",
    tagText: "#7C6EE6",
    badgeBg: "rgba(124,110,230,0.1)",
    badgeText: "#5C4EC6",
  },
  sky: {
    bg: "linear-gradient(145deg, #EFF6FF 0%, #DCEEFF 100%)",
    border: "rgba(107,168,255,0.22)",
    accent: "#4B88DF",
    tagBg: "rgba(107,168,255,0.1)",
    tagText: "#2563eb",
    badgeBg: "rgba(107,168,255,0.12)",
    badgeText: "#1d4ed8",
  },
  mint: {
    bg: "linear-gradient(145deg, #F0FBF4 0%, #DFF5EA 100%)",
    border: "rgba(34,197,94,0.18)",
    accent: "#16a34a",
    tagBg: "#DFF5EA",
    tagText: "#1a7a4a",
    badgeBg: "rgba(34,197,94,0.08)",
    badgeText: "#15803d",
  },
};

export default function ResearchCard({ experience, index }: ResearchCardProps) {
  const [expanded, setExpanded] = useState(false);
  const c = colorConfig[experience.color] || colorConfig.violet;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.12 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        className="relative overflow-hidden rounded-2xl p-7 cursor-pointer"
        style={{
          background: c.bg,
          border: `1px solid ${c.border}`,
          boxShadow: "0 2px 12px rgba(124,110,230,0.06), 0 1px 4px rgba(0,0,0,0.03)",
          transition: "box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 12px 40px rgba(124,110,230,0.16), 0 4px 16px rgba(0,0,0,0.06)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 2px 12px rgba(124,110,230,0.06), 0 1px 4px rgba(0,0,0,0.03)";
        }}
        onClick={() => setExpanded(!expanded)}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex-1 min-w-0">
            {/* Type badge */}
            <span
              className="inline-block font-mono text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full mb-3"
              style={{ background: c.badgeBg, color: c.badgeText }}
            >
              {experience.type}
            </span>

            {/* Title */}
            <h3
              className="font-serif font-bold text-[#1A1A2E] leading-tight mb-1.5"
              style={{ fontSize: "clamp(1.05rem, 2vw, 1.25rem)" }}
            >
              {experience.title}
            </h3>

            {/* Lab & Institution */}
            <p className="text-sm font-medium" style={{ color: c.accent }}>
              {experience.lab}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              <span className="font-sans text-xs text-[#6B7280]">
                {experience.institution}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#D1D5DB]" />
              <span className="font-sans text-xs text-[#9CA3AF]">
                {experience.location}
              </span>
            </div>
          </div>

          {/* Duration + toggle */}
          <div className="flex-shrink-0 text-right space-y-2">
            <span
              className="inline-block font-mono text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
              style={{ background: c.tagBg, color: c.tagText }}
            >
              {experience.duration}
            </span>
            <div className="flex justify-end">
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: c.tagBg }}
              >
                <svg
                  className="w-3.5 h-3.5"
                  style={{ color: c.tagText }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#6B7280] text-sm leading-[1.8] mb-5 line-clamp-3 group-hover:line-clamp-none transition-all">
          {experience.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="font-sans text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
              style={{ background: c.tagBg, color: c.tagText }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable section */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 space-y-5 border-t mt-5" style={{ borderColor: c.border }}>
                {/* Achievements */}
                <div>
                  <h4
                    className="font-mono text-[10px] uppercase tracking-widest font-semibold mb-3"
                    style={{ color: c.accent }}
                  >
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: c.accent }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Techniques */}
                <div>
                  <h4
                    className="font-mono text-[10px] uppercase tracking-widest font-semibold mb-3"
                    style={{ color: c.accent }}
                  >
                    Techniques & Methods
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {experience.techniques.map((tech) => (
                      <span
                        key={tech}
                        className="font-sans text-xs font-medium px-2.5 py-1 rounded-lg"
                        style={{
                          background: "rgba(255,255,255,0.7)",
                          border: `1px solid ${c.border}`,
                          color: "#6B7280",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
