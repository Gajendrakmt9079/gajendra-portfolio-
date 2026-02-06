"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && progressRef.current) {
      // Animate card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
          },
        },
      );

      // Animate progress bar
      gsap.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, [skill.level, index]);

  return (
    <div ref={cardRef}>
      <GlassCard className="!p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{skill.icon}</span>
          <span className="text-sm font-medium text-gray-300">
            {skill.name}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-dark-700 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className="absolute h-full bg-gradient-to-r from-neon-blue to-neon-purple rounded-full"
            style={{ width: "0%" }}
          />
        </div>

        <div className="text-xs text-gray-400 mt-2 text-right">
          {skill.level}%
        </div>
      </GlassCard>
    </div>
  );
}
