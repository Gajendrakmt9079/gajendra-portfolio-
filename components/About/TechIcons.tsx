"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECH_STACK } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function TechIcons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const icons = containerRef.current.querySelectorAll(".tech-icon");

      gsap.fromTo(
        icons,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Floating animation
      icons.forEach((icon) => {
        gsap.to(icon, {
          y: -5,
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      });
    }
  }, []);

  return (
    <div ref={containerRef}>
      <h3 className="text-xl font-semibold mb-4 text-neon-blue">
        Tech Stack
      </h3>
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
        {TECH_STACK.slice(0, 12).map((tech) => (
          <div
            key={tech.name}
            className="tech-icon relative group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-lg bg-dark-700 border border-glass-border flex items-center justify-center text-2xl group-hover:border-neon-blue group-hover:shadow-neon-sm transition-all duration-300">
              {tech.name.charAt(0)}
            </div>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-700 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-glass-border">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
