"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SocialLinks from "@/components/Contact/SocialLinks";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (could integrate with email service)
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! (This is a demo)");
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
        Get In <span className="text-neon-blue">Touch</span>
      </h2>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-dark-700 border border-glass-border rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors text-white"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-dark-700 border border-glass-border rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors text-white"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 bg-dark-700 border border-glass-border rounded-lg focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-colors text-white resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <Button variant="primary" className="w-full">
            Send Message
          </Button>
        </form>

        <SocialLinks />
      </div>
    </SectionWrapper>
  );
}
