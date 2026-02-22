"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import { personal } from "@/lib/data";
import {
  staggerContainer,
  fadeUp,
  scaleIn,
  viewportOnce,
} from "@/lib/animations";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    description: "Best for research inquiries and collaborations",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#7C6EE6",
    bg: "rgba(124,110,230,0.08)",
    border: "rgba(124,110,230,0.2)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Ahana Ghosh",
    href: personal.linkedin,
    description: "Professional network and career updates",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#2563eb",
    bg: "rgba(37,99,235,0.06)",
    border: "rgba(37,99,235,0.18)",
  },
  {
    id: "scholar",
    label: "Google Scholar",
    value: "Ahana Ghosh",
    href: personal.googleScholar,
    description: "Full publication list and citation metrics",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "#16a34a",
    bg: "rgba(22,163,74,0.07)",
    border: "rgba(22,163,74,0.2)",
  },
];

export default function Contact() {
  return (
    <SectionContainer
      id="contact"
      eyebrow="Contact"
      title="Let's Connect"
      subtitle="Open to research collaborations, seminar invitations, and scientific discussions in Cancer Immunology and Biomedical Sciences."
      centered
    >
      {/* Main contact card */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto"
      >
        {/* Header card with gradient */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12 mb-8 text-center"
          style={{
            background: "linear-gradient(135deg, #7C6EE6 0%, #6BA8FF 100%)",
            boxShadow: "0 24px 64px rgba(124,110,230,0.35)",
          }}
        >
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Floating circles */}
          <div className="absolute top-8 left-8 w-20 h-20 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-6 right-10 w-28 h-28 rounded-full bg-white/10 blur-2xl" />

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5"
            >
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>

            <h3 className="font-serif font-bold text-white text-2xl md:text-3xl mb-3">
              Get in Touch
            </h3>
            <p className="text-white/80 text-base leading-relaxed max-w-md mx-auto mb-6">
              Whether you&apos;re interested in collaboration, have questions about my
              research, or want to discuss opportunities — I&apos;d love to hear from you.
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2.5 bg-white rounded-full px-7 py-3.5 font-sans font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              style={{ color: "#7C6EE6" }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {personal.email}
            </a>
          </div>
        </div>

        {/* Contact links grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.id}
              variants={fadeUp}
              href={link.href}
              target={link.id !== "email" ? "_blank" : undefined}
              rel={link.id !== "email" ? "noopener noreferrer" : undefined}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.22 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl transition-all duration-250"
              style={{
                background: link.bg,
                border: `1px solid ${link.border}`,
                boxShadow: "0 2px 8px rgba(124,110,230,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  `0 10px 32px rgba(124,110,230,0.14)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 2px 8px rgba(124,110,230,0.06)";
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: `${link.color}15`, color: link.color }}
              >
                {link.icon}
              </div>
              <div>
                <p
                  className="font-sans font-bold text-sm"
                  style={{ color: link.color }}
                >
                  {link.label}
                </p>
                <p className="font-sans text-xs text-[#9CA3AF] mt-0.5 leading-relaxed">
                  {link.description}
                </p>
              </div>
              <span
                className="font-mono text-xs font-medium truncate max-w-full"
                style={{ color: link.color }}
              >
                {link.value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* ORCID */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 flex items-center justify-center gap-3 text-center"
        >
          <a
            href={`https://orcid.org/${personal.orcid}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] hover:text-[#7C6EE6] transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#A6CE39">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947-.947-.431-.947-.947.422-.947.947-.947zm-.722 3.038h1.444v10.184H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.090 0 2.941-1.681 5.094-5.344 5.094h-3.9V7.416zm1.444 1.303v7.578h2.297c2.359 0 3.900-1.494 3.900-3.791 0-2.225-1.541-3.787-3.900-3.787h-2.297z" />
            </svg>
            ORCID: {personal.orcid}
          </a>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
}
