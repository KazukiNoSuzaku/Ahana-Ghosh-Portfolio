"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume: string;
  doi: string;
  abstract: string;
  tags: string[];
  status: string;
  featured: boolean;
}

interface PublicationItemProps {
  publication: Publication;
  index: number;
}

const statusConfig: Record<string, { bg: string; text: string; dot: string }> = {
  Published: {
    bg: "rgba(34,197,94,0.08)",
    text: "#16a34a",
    dot: "#22c55e",
  },
  "Under Review": {
    bg: "rgba(234,179,8,0.08)",
    text: "#b45309",
    dot: "#f59e0b",
  },
  Preprint: {
    bg: "rgba(107,168,255,0.1)",
    text: "#2563eb",
    dot: "#6BA8FF",
  },
};

export default function PublicationItem({ publication, index }: PublicationItemProps) {
  const status = statusConfig[publication.status] || statusConfig["Published"];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
        className="group relative p-6 md:p-7 rounded-2xl bg-white"
        style={{
          border: `1px solid ${publication.featured ? "rgba(124,110,230,0.22)" : "#E8E8F4"}`,
          boxShadow: publication.featured
            ? "0 4px 20px rgba(124,110,230,0.1)"
            : "0 2px 8px rgba(124,110,230,0.06)",
          transition: "box-shadow 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0 12px 36px rgba(124,110,230,0.15), 0 4px 16px rgba(0,0,0,0.05)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = publication.featured
            ? "0 4px 20px rgba(124,110,230,0.1)"
            : "0 2px 8px rgba(124,110,230,0.06)";
        }}
      >
        {/* Featured indicator */}
        {publication.featured && (
          <div
            className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
            style={{
              background: "linear-gradient(90deg, #7C6EE6 0%, #6BA8FF 100%)",
            }}
          />
        )}

        <div className="flex flex-col md:flex-row md:items-start gap-5">
          {/* Index number */}
          <div className="flex-shrink-0 hidden md:flex">
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center font-serif font-bold text-sm"
              style={{
                background: publication.featured
                  ? "linear-gradient(135deg, rgba(124,110,230,0.12), rgba(107,168,255,0.12))"
                  : "#F3F4F6",
                color: publication.featured ? "#7C6EE6" : "#9CA3AF",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3
              className="font-serif font-bold text-[#1A1A2E] leading-snug mb-2.5 group-hover:text-[#7C6EE6] transition-colors duration-200"
              style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)" }}
            >
              {publication.title}
            </h3>

            {/* Authors — highlight Ahana */}
            <p className="text-xs text-[#9CA3AF] mb-2.5 leading-relaxed">
              {publication.authors.split(",").map((author, i, arr) => (
                <span key={i}>
                  {author.trim().includes("Ghosh A") ? (
                    <strong className="text-[#7C6EE6] font-semibold">
                      {author.trim()}
                    </strong>
                  ) : (
                    author.trim()
                  )}
                  {i < arr.length - 1 && (
                    <span className="text-[#D1D5DB]">, </span>
                  )}
                </span>
              ))}
            </p>

            {/* Journal + year + volume */}
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <span className="font-sans text-sm font-semibold text-[#6B7280] italic">
                {publication.journal}
              </span>
              {publication.volume && (
                <>
                  <span className="text-[#D1D5DB]">·</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    {publication.volume}
                  </span>
                </>
              )}
              <span className="text-[#D1D5DB]">·</span>
              <span className="font-mono text-xs font-bold" style={{ color: "#7C6EE6" }}>
                {publication.year}
              </span>
            </div>

            {/* Tags + Status row */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Status badge */}
              <span
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full"
                style={{ background: status.bg, color: status.text }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: status.dot }}
                />
                {publication.status}
              </span>

              {/* Topic tags */}
              {publication.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[10px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-full"
                  style={{
                    background: "#F3F4F6",
                    color: "#6B7280",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  {tag}
                </span>
              ))}

              {/* DOI link */}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex-shrink-0 inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold hover:underline transition-colors"
                style={{ color: "#7C6EE6" }}
                onClick={(e) => e.stopPropagation()}
              >
                DOI
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
