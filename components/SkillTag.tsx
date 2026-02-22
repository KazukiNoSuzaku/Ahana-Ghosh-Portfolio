"use client";

import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  color: string;
  index: number;
}

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  violet: {
    bg: "rgba(124,110,230,0.08)",
    text: "#5C4EC6",
    border: "rgba(124,110,230,0.18)",
  },
  sky: {
    bg: "rgba(107,168,255,0.1)",
    text: "#2563eb",
    border: "rgba(107,168,255,0.22)",
  },
  mint: {
    bg: "#DFF5EA",
    text: "#1a7a4a",
    border: "rgba(34,197,94,0.2)",
  },
  peach: {
    bg: "#FFE5D9",
    text: "#c05621",
    border: "rgba(249,115,22,0.2)",
  },
  lavender: {
    bg: "#E6E6FA",
    text: "#5c52b8",
    border: "rgba(124,110,230,0.22)",
  },
};

export default function SkillTag({ skill, color, index }: SkillTagProps) {
  const c = colorMap[color] || colorMap.violet;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold px-3.5 py-2 rounded-full cursor-default select-none"
      style={{
        background: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
        transition: "all 0.2s ease",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: c.text, opacity: 0.6 }}
      />
      {skill}
    </motion.span>
  );
}
