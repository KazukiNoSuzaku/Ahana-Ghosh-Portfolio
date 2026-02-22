"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import ResearchCard from "./ResearchCard";
import { researchExperiences } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Research() {
  return (
    <SectionContainer
      id="research"
      eyebrow="Research Experience"
      title="Scientific Journey"
      subtitle="Investigating cancer immunity from multiple angles — spanning bench-top experiments, computational analysis, and translational models."
      alt
    >
      {/* ── Lab photo banner ─────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative w-full rounded-2xl overflow-hidden mb-10"
        style={{
          height: "220px",
          boxShadow: "0 8px 32px rgba(124,110,230,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          border: "1px solid rgba(232,232,244,0.7)",
        }}
      >
        <Image
          src="/images/ahana-lab.jpg"
          alt="Ahana's lab bench — tissue sample processing at the Beatson Institute"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,8,34,0.72) 0%, rgba(10,8,34,0.35) 50%, rgba(10,8,34,0.18) 100%)",
          }}
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center px-8">
          <div className="space-y-1.5">
            <span
              className="font-mono text-[10px] uppercase tracking-widest font-semibold"
              style={{ color: "#9B8EF0" }}
            >
              From the Bench
            </span>
            <h3
              className="font-serif font-bold text-white leading-tight"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
            >
              Tissue Processing &<br />Sample Preparation
            </h3>
            <p className="font-sans text-white/60 text-xs max-w-xs leading-relaxed">
              Histology slides and lab workflow at the Beatson Institute, University of Glasgow
            </p>
          </div>
        </div>
        {/* Right corner badge */}
        <div className="absolute top-4 right-4">
          <span
            className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-semibold"
            style={{
              background: "rgba(124,110,230,0.2)",
              color: "#C3B8F8",
              border: "1px solid rgba(155,142,240,0.35)",
              backdropFilter: "blur(8px)",
            }}
          >
            Beatson Institute
          </span>
        </div>
      </motion.div>

      {/* Research experience cards */}
      <div className="space-y-6">
        {researchExperiences.map((exp, i) => (
          <ResearchCard key={exp.id} experience={exp} index={i} />
        ))}
      </div>
    </SectionContainer>
  );
}
