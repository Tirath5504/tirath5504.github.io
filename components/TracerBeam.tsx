"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export const TracerBeam = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    const observer = new MutationObserver(updateHeight);
    observer.observe(ref.current, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, []);

  // "Snappy" movement: High stiffness, lower damping
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, height]), {
    stiffness: 800,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      {/* Background Line */}
      <div 
        style={{ 
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          zIndex: 0
        }}
      />
      
      {/* Animated Tracer Beam - Shorter and more intense glow */}
      <motion.div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          width: "2px",
          height: "80px", // Shorter beam
          x: "-50%",
          y,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        <div 
          style={{
            width: "100%",
            height: "100%",
            background: "linear-gradient(to bottom, transparent, var(--highlight, #00d4ff) 50%, transparent)",
            boxShadow: "0 0 20px 3px var(--highlight, #00d4ff)",
            opacity: 0.9,
          }}
        />
      </motion.div>

      <div style={{ position: "relative", zIndex: 5 }}>
        {children}
      </div>
    </div>
  );
};
