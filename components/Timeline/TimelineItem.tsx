"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TimelineItemProps {
  item: {
    company: string;
    role: string;
    duration: string;
    description: string;
  };
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemRef.current && dotRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: itemRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        dotRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4 },
      ).fromTo(
        itemRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.6 },
        "-=0.2",
      );
    }
  }, [index]);

  return (
    <div ref={itemRef} className="relative pl-8">
      {/* Timeline Dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-2 w-4 h-4 rounded-full bg-neon-blue -translate-x-[7px] shadow-neon"
      />

      <div className="bg-dark-700/50 border border-glass-border rounded-lg p-6 hover:border-neon-blue transition-colors duration-300">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-white">{item.company}</h4>
          <span className="text-sm text-neon-blue font-mono">
            {item.duration}
          </span>
        </div>
        <h5 className="text-lg text-neon-purple mb-3">{item.role}</h5>
        <p className="text-gray-400">{item.description}</p>
      </div>
    </div>
  );
}
