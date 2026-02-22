"use client";

import { motion } from "framer-motion";
import { personal, navLinks } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#1A1A2E] text-white">
      {/* Top gradient border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #7C6EE6, #6BA8FF, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(124,110,230,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-0 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(107,168,255,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      <div className="container-portfolio relative z-10 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg, #7C6EE6 0%, #6BA8FF 100%)",
                }}
              >
                AG
              </div>
              <div>
                <p className="font-serif font-bold text-white text-base leading-none">
                  Ahana Ghosh
                </p>
                <p className="font-mono text-[10px] text-[#9B8EF0] tracking-widest uppercase mt-0.5">
                  PhD Researcher
                </p>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Biomedical Sciences researcher specializing in Cancer Immunology and the
              tumor microenvironment at{" "}
              <span className="text-[#9B8EF0]">{personal.institution}</span>.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#9B8EF0] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const id = link.href.replace("#", "");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 h-px bg-[#7C6EE6] group-hover:w-4 transition-all duration-300 rounded-full"
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#9B8EF0] font-semibold">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#7C6EE6]/20 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#7C6EE6]/20 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={personal.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9CA3AF] hover:text-white text-sm transition-colors duration-200 flex items-center gap-2.5 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#7C6EE6]/20 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  Google Scholar
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#6B7280] text-xs">
            © {currentYear} Ahana Ghosh. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-[#9B8EF0] font-mono">Next.js</span>
            <span>·</span>
            <span className="text-[#9B8EF0] font-mono">Tailwind</span>
            <span>·</span>
            <span className="text-[#9B8EF0] font-mono">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
