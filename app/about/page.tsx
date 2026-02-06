import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Elite Developer Portfolio",
  description:
    "Learn more about my background, skills, and professional journey.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Skills />
    </div>
  );
}
