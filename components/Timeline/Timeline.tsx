"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import TimelineItem from "./TimelineItem";
import { EXPERIENCE, EDUCATION } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lineRef.current) {
      gsap.to(lineRef.current, {
        scaleY: 1,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1,
        },
      });
    }
  }, []);
  return (
    <SectionWrapper id="experience" className="bg-dark-800/50">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        Experience & <span className="text-neon-blue">Education</span>
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-neon-purple">
            Work Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div
              ref={lineRef}
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent origin-top transform scale-y-0"
            />

            <div className="space-y-8">
              {EXPERIENCE.map((item, index) => (
                <TimelineItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-neon-purple">
            Education
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple to-transparent" />

            <div className="space-y-8">
              {EDUCATION.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={{
                    ...item,
                    company: item.institution,
                    role: item.degree,
                  }}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
