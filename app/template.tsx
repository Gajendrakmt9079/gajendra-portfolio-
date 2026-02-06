"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Simple fade-in/up animation for page transitions
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="min-h-screen relative z-10">
      {children}
    </div>
  );
}
