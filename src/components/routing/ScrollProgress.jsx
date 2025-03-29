import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress({ targetRef }) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 15,
    mass: 0.4,
  });

  const [progress, setProgress] = useState(0);

  // Listen to changes on the spring value
  useMotionValueEvent(springScrollYProgress, "change", (latest) => {
    setProgress(latest);
  });

  return (
    <>
      <motion.div
        className="fixed left-0 bottom-0 w-full h-1.5 bg-secondary origin-left z-[100] "
        style={{ scaleX: springScrollYProgress }}
      />
      <div className="fixed top-4 right-4 bg-black text-white p-2 z-[100]">
        Scroll: {Math.round(progress * 100)}%
      </div>
    </>
  );
}
