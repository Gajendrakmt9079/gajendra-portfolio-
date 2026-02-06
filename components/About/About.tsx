"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TechIcons from "./TechIcons";
import { PERSONAL_INFO } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (imageRef.current && bioRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
        },
      });

      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8 },
      ).fromTo(
        bioRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.4",
      );
    }
  }, []);

  return (
    <SectionWrapper id="about">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        About <span className="text-neon-blue">Me</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div ref={imageRef} className="relative group">
          <div className="relative w-80 h-80 mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-neon-glow rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            {/* Image placeholder */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-neon-blue/30 group-hover:border-neon-blue transition-colors duration-300">
              <div className="w-full h-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>

            {/* Floating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-purple/30 animate-spin-slow" />
          </div>
        </div>

        {/* Bio */}
        <div>
          <p
            ref={bioRef}
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
          >
            {PERSONAL_INFO.bio}
          </p>

          <TechIcons />
        </div>
      </div>
    </SectionWrapper>
  );
}
