/**
 * @file ScrollProgress.tsx
 * @module ScrollProgress
 * @desc A Framer Motion-based progress bar that tracks the scroll progress of the main content area.
 *
 * @author Chace Nielson
 * @created Mar 14, 2025
 * @updated Mar 14, 2025
 */

"use client"; // Required for Next.js (Remove if using standard React)

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  // Track the scroll progress of the `main` content section

  const { scrollYProgress } = useScroll();

  // Smooth progress animation
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    mass: 1,
  });

  return (
    <>
      {/* Custom Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-primary origin-left z-50"
        style={{ scaleX: springScrollYProgress }}
      />
    </>
  );
}
