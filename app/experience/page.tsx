import Timeline from "@/components/Timeline/Timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Elite Developer Portfolio",
  description: "My professional experience and education timeline.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-20">
      <Timeline />
    </div>
  );
}
