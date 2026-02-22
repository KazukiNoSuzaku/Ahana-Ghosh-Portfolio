"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewportOnce } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  alt?: boolean;
}

export default function SectionContainer({
  id,
  children,
  className,
  innerClassName,
  eyebrow,
  title,
  subtitle,
  centered = false,
  alt = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-wrapper relative overflow-hidden",
        alt && "section-alt",
        className
      )}
    >
      <div className={cn("container-portfolio", innerClassName)}>
        {(eyebrow || title || subtitle) && (
          <motion.div
            className={cn("mb-14", centered && "text-center")}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {eyebrow && (
              <motion.p
                variants={fadeUp}
                className="section-eyebrow mb-3"
              >
                {eyebrow}
              </motion.p>
            )}
            {title && (
              <motion.h2
                variants={fadeUp}
                className="section-title mb-4"
              >
                {title}
              </motion.h2>
            )}
            {title && (
              <motion.div
                variants={fadeUp}
                className={cn("accent-divider mb-5", centered && "mx-auto")}
              />
            )}
            {subtitle && (
              <motion.p
                variants={fadeUp}
                className={cn(
                  "section-subtitle max-w-2xl",
                  centered && "mx-auto"
                )}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
