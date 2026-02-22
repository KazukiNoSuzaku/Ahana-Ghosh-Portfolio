"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";

export default function GlasgowLife() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Warm background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #FFF2EC 0%, #FAF5FF 50%, #EFF6FF 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,229,217,0.6) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(124,110,230,0.08) 0%, transparent 70%)",
          filter: "blur(48px)",
        }}
      />

      <div className="container-portfolio relative z-10">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <p className="section-eyebrow mb-3">Beyond the Lab</p>
          <h2 className="section-title mb-4">Life in Glasgow</h2>
          <div className="accent-divider mb-5" />
          <p className="section-subtitle max-w-xl">
            Science is best when shared. Life in Glasgow has been as enriching outside
            the lab as it is inside — a city of warmth, history, and great company.
          </p>
        </motion.div>

        {/* Main layout: large friends photo + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* ── Friends photo — large featured ──────────────────────── */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                boxShadow:
                  "0 20px 56px rgba(124,110,230,0.16), 0 6px 20px rgba(0,0,0,0.1)",
                border: "1px solid rgba(232,232,244,0.7)",
              }}
            >
              <Image
                src="/images/ahana-friends.jpg"
                alt="Ahana with friends in Glasgow"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 760px"
              />
              {/* Overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,8,34,0.65) 0%, transparent 100%)",
                }}
              >
                <p className="font-serif font-bold text-white text-lg leading-tight">
                  Glasgow nights with great friends
                </p>
                <p className="text-white/65 text-xs font-mono mt-1">
                  Jefe&apos;s · Glasgow City Centre
                </p>
              </div>

              {/* Decorative star badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="font-mono text-[9px] uppercase tracking-wider px-3 py-1.5 rounded-full font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Glasgow Life ✦
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Sidebar: personal note ───────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {/* Quote card */}
            <div
              className="p-6 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #FAF5FF 0%, #F3E8FF 100%)",
                border: "1px solid rgba(124,110,230,0.15)",
                boxShadow: "0 4px 20px rgba(124,110,230,0.1)",
              }}
            >
              {/* Large quote mark */}
              <div
                className="absolute top-3 right-4 font-serif text-7xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(124,110,230,0.1)" }}
              >
                &ldquo;
              </div>
              <p
                className="font-serif italic text-[#1A1A2E] leading-relaxed relative z-10"
                style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.05rem)" }}
              >
                Research is a marathon, not a sprint — and the people around
                you make every step of the journey meaningful.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <div
                  className="w-6 h-0.5 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #7C6EE6, #6BA8FF)",
                  }}
                />
                <span className="font-mono text-[10px] text-[#7C6EE6] uppercase tracking-widest">
                  Ahana Ghosh
                </span>
              </div>
            </div>

            {/* Small stat cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "🏙️", label: "City", value: "Glasgow, UK" },
                { icon: "🔬", label: "Institute", value: "Beatson Institute" },
                { icon: "🎓", label: "University", value: "UofG" },
                { icon: "☕", label: "Favourite", value: "Lab coffee" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(232,232,244,0.8)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="text-lg mb-1">{item.icon}</div>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#9CA3AF]">
                    {item.label}
                  </p>
                  <p className="font-sans text-xs font-semibold text-[#1A1A2E] mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
