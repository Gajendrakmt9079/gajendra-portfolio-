"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillCard from "@/components/Skills/SkillCard";
import { SKILLS } from "@/lib/constants";

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-dark-800/50">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        Skills & <span className="text-neon-blue">Expertise</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SKILLS.map((category) => (
          <div key={category.category}>
            <h3 className="text-2xl font-bold mb-6 text-neon-purple">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
