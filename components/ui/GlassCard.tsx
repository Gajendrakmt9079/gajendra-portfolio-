import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative
        bg-glass-light
        backdrop-blur-md
        border border-glass-border
        rounded-xl
        p-6
        transition-all
        duration-300
        ${
          hover
            ? "hover:border-neon-blue hover:shadow-neon-sm hover:-translate-y-2"
            : ""
        }
        ${className}
      `}
    >
      {children}
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-transparent rounded-xl pointer-events-none" />
    </div>
  );
}
