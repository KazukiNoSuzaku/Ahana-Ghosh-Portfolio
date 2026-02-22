"use client";

import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import PublicationItem from "./PublicationItem";
import { publications, personal } from "@/lib/data";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Publications() {
  const featured = publications.filter((p) => p.featured);
  const others = publications.filter((p) => !p.featured);

  return (
    <SectionContainer
      id="publications"
      eyebrow="Publications"
      title="Research Output"
      subtitle="Peer-reviewed articles, preprints, and manuscripts contributing to the field of Cancer Immunology and Biomedical Sciences."
    >
      {/* Scholar CTA bar */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl mb-10"
        style={{
          background: "linear-gradient(135deg, rgba(124,110,230,0.06) 0%, rgba(107,168,255,0.06) 100%)",
          border: "1px solid rgba(124,110,230,0.15)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
            style={{ background: "linear-gradient(135deg, #7C6EE6, #6BA8FF)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p className="font-sans font-semibold text-[#1A1A2E] text-sm">
              Full publication list available on Google Scholar
            </p>
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              ORCID: {personal.orcid}
            </p>
          </div>
        </div>
        <a
          href={personal.googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm py-2.5 px-5 flex-shrink-0"
        >
          View on Scholar
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </motion.div>

      {/* Featured publications */}
      {featured.length > 0 && (
        <div className="mb-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-3 mb-5"
          >
            <div className="accent-divider" />
            <h3 className="font-serif font-bold text-[#1A1A2E] text-lg">
              Selected Publications
            </h3>
          </motion.div>
          <div className="space-y-4">
            {featured.map((pub, i) => (
              <PublicationItem key={pub.id} publication={pub} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Other publications */}
      {others.length > 0 && (
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex items-center gap-3 mb-5"
          >
            <div className="accent-divider" />
            <h3 className="font-serif font-bold text-[#1A1A2E] text-lg">
              Additional Publications
            </h3>
          </motion.div>
          <div className="space-y-4">
            {others.map((pub, i) => (
              <PublicationItem
                key={pub.id}
                publication={pub}
                index={featured.length + i}
              />
            ))}
          </div>
        </div>
      )}

      {/* Note on authorship */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="mt-8 text-xs text-[#9CA3AF] text-center font-mono"
      >
        * denotes co-first authorship · Bold name indicates Ahana Ghosh
      </motion.p>
    </SectionContainer>
  );
}
