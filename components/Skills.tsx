"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import SkillTag from "./SkillTag";
import { skillCategories } from "@/lib/data";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOnce,
} from "@/lib/animations";

const categoryColorConfig: Record<
  string,
  { cardBg: string; iconBg: string; headerText: string }
> = {
  violet: {
    cardBg: "linear-gradient(145deg, #FAF5FF 0%, #F3E8FF 100%)",
    iconBg: "rgba(124,110,230,0.12)",
    headerText: "#7C6EE6",
  },
  sky: {
    cardBg: "linear-gradient(145deg, #EFF6FF 0%, #DCEEFF 100%)",
    iconBg: "rgba(107,168,255,0.12)",
    headerText: "#2563eb",
  },
  mint: {
    cardBg: "linear-gradient(145deg, #F0FBF4 0%, #DFF5EA 100%)",
    iconBg: "rgba(34,197,94,0.1)",
    headerText: "#16a34a",
  },
  peach: {
    cardBg: "linear-gradient(145deg, #FFF2EC 0%, #FFE5D9 100%)",
    iconBg: "rgba(249,115,22,0.1)",
    headerText: "#c05621",
  },
  lavender: {
    cardBg: "linear-gradient(145deg, #F0F0FF 0%, #E6E6FA 100%)",
    iconBg: "rgba(124,110,230,0.1)",
    headerText: "#5c52b8",
  },
};

export default function Skills() {
  return (
    <SectionContainer
      id="skills"
      eyebrow="Technical Skills"
      title="Research Toolkit"
      subtitle="A comprehensive suite of experimental and computational techniques developed across multiple research environments."
      alt
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {skillCategories.map((cat, catIndex) => {
          const config =
            categoryColorConfig[cat.color] || categoryColorConfig.violet;

          return (
            <motion.div
              key={cat.id}
              variants={scaleIn}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-6 overflow-hidden relative group"
              style={{
                background: config.cardBg,
                border: "1px solid rgba(232,232,244,0.7)",
                boxShadow:
                  "0 2px 12px rgba(124,110,230,0.07), 0 1px 4px rgba(0,0,0,0.03)",
                transition: "box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 10px 36px rgba(124,110,230,0.14), 0 4px 16px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 2px 12px rgba(124,110,230,0.07), 0 1px 4px rgba(0,0,0,0.03)";
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: config.iconBg }}
                >
                  {cat.icon}
                </motion.div>
                <div>
                  <h3
                    className="font-serif font-bold text-base"
                    style={{ color: config.headerText }}
                  >
                    {cat.category}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF]">
                    {cat.skills.length} techniques
                  </p>
                </div>
              </div>

              {/* Accent line */}
              <div
                className="h-px mb-5 rounded-full opacity-40"
                style={{
                  background: `linear-gradient(90deg, ${config.headerText}, transparent)`,
                }}
              />

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <SkillTag
                    key={skill}
                    skill={skill}
                    color={cat.color}
                    index={catIndex * 5 + i}
                  />
                ))}
              </div>

              {/* Corner decoration */}
              <div
                className="absolute top-3 right-3 w-16 h-16 rounded-full opacity-[0.06]"
                style={{
                  background: `radial-gradient(circle, ${config.headerText} 0%, transparent 70%)`,
                  filter: "blur(8px)",
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Stats bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { number: "5+", label: "Skill Categories", icon: "🗂️" },
          {
            number: `${skillCategories.reduce((acc, c) => acc + c.skills.length, 0)}+`,
            label: "Individual Skills",
            icon: "⚡",
          },
          { number: "5+", label: "Years Experience", icon: "📅" },
          { number: "3", label: "Research Settings", icon: "🔬" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-4 rounded-xl bg-white"
            style={{
              border: "1px solid #E8E8F4",
              boxShadow: "0 2px 8px rgba(124,110,230,0.06)",
            }}
          >
            <div className="text-2xl mb-1">{stat.icon}</div>
            <p className="font-serif font-bold gradient-text text-2xl leading-none">
              {stat.number}
            </p>
            <p className="font-sans text-xs text-[#9CA3AF] mt-1.5">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
