"use client";

import { PERSONAL_INFO } from "@/lib/constants";

export default function SocialLinks() {
  const socials = [
    { name: "GitHub", url: PERSONAL_INFO.github, icon: "💻" },
    { name: "LinkedIn", url: PERSONAL_INFO.linkedin, icon: "💼" },
    { name: "Twitter", url: PERSONAL_INFO.twitter, icon: "🐦" },
    { name: "Email", url: `mailto:${PERSONAL_INFO.email}`, icon: "📧" },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-14 h-14 flex items-center justify-center bg-dark-700 border border-glass-border rounded-lg hover:border-neon-blue hover:shadow-neon-sm transition-all duration-300 hover:-translate-y-1"
        >
          <span className="text-2xl">{social.icon}</span>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark-700 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-glass-border">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
}
