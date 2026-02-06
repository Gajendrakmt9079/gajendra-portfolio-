"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    liveUrl: string;
    sourceUrl: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, [index]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard className="overflow-hidden h-full">
        {/* Image */}
        <div className="relative h-56 mb-4 -m-6 mb-4 overflow-hidden bg-gradient-to-br from-neon-blue/20 to-neon-purple/20">
          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            💻
          </div>
          {isHovered && (
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent flex items-end justify-center gap-3 p-6">
              <Button variant="primary" href={project.liveUrl}>
                Live Demo
              </Button>
              <Button variant="ghost" href={project.sourceUrl}>
                Source
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-dark-700 text-neon-blue border border-neon-blue/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
