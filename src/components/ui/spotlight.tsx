"use client";
import { useEffect, useRef } from "react";

export const Spotlight = ({
  className,
  fill,
}: {
  className?: string;
  fill?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = divRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={mouseMove}
      className={`h-full w-full group relative rounded-3xl bg-slate-950/50 overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px z-0 transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),${
            fill || "rgba(255,255,255,.06)"
          },transparent 40%)`,
        }}
      />
    </div>
  );
};