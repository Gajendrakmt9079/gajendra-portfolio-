import Projects from "@/components/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Elite Developer Portfolio",
  description:
    "Explore my latest web development projects and technical experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
