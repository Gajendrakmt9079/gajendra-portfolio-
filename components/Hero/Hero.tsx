"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import HeroScene from "./HeroScene";
import Button from "@/components/ui/Button";
import { PERSONAL_INFO } from "@/lib/constants";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate name with typing effect
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2",
      );

    // Floating animation for the whole hero
    gsap.to(nameRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <HeroScene />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/30 to-dark-900 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={nameRef}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-white via-neon-blue to-neon-purple bg-clip-text text-transparent"
        >
          {PERSONAL_INFO.name}
        </h1>

        <h2
          ref={roleRef}
          className="text-xl md:text-3xl lg:text-4xl font-mono text-gray-300 mb-8"
        >
          {PERSONAL_INFO.role}
        </h2>

        <div ref={ctaRef} className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" href="/projects">
            View Projects
          </Button>
          <Button variant="secondary" href="/contact">
            Contact Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-neon-blue rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
