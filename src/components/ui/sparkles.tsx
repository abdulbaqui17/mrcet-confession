"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <motion.div className={className}>
      {init && (
        <Particles
          id={id}
          className="h-full w-full"
          options={{
            background: { color: { value: background || "transparent" } },
            particles: {
              color: { value: particleColor || "#ffffff" },
              move: { speed: speed || 2 },
              number: { 
                value: particleDensity || 80,
                density: { enable: true }
              },
              size: { value: { min: minSize || 1, max: maxSize || 3 } },
            },
          }}
        />
      )}
    </motion.div>
  );
};