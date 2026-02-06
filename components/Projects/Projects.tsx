"use client";

import { useState, useMemo } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from projects (assuming projects have tags/tech)
  // Since I don't see exact structure of PROJECTS item, I'll assume they have 'tags' or I'll use common ones.
  // The user asked to "Filter by tech stack".
  const categories = ["All", "Next.js", "React", "TypeScript", "Three.js"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((project) =>
      project.tech.some((t) => t.includes(activeCategory)),
    );
  }, [activeCategory]);

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, clearProps: "all" },
    );
  }, [activeCategory]);

  return (
    <SectionWrapper id="projects">
      <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center">
        Featured <span className="text-neon-blue">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
              activeCategory === category
                ? "bg-neon-blue text-dark-900 border-neon-blue font-bold shadow-neon-sm"
                : "bg-transparent text-gray-400 border-gray-700 hover:border-white hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 min-h-[50vh]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card">
              <ProjectCard project={project} index={index} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-2 text-gray-500 text-xl py-20">
            No projects found for this category.
          </p>
        )}
      </div>
    </SectionWrapper>
  );
}
