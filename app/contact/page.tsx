import Contact from "@/components/Contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Elite Developer Portfolio",
  description: "Get in touch for collaborations or opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
