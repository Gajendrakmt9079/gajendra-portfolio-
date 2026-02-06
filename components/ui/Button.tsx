"use client";

import { useRef, useEffect, ReactNode } from "react";
import gsap from "gsap";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Magnetic hover effect
    const handleMouseMove = (e: Event) => {
      const { clientX, clientY } = e as MouseEvent;
      const { left, top, width, height } = button.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = (clientX - centerX) * 0.3;
      const deltaY = (clientY - centerY) * 0.3;

      gsap.to(button, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)",
      });
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-3 font-medium rounded-lg transition-all duration-300 overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-neon-blue to-neon-purple text-dark-900 hover:shadow-neon",
    secondary:
      "bg-dark-700 text-white border border-glass-border hover:border-neon-blue hover:shadow-neon-sm",
    ghost:
      "bg-transparent text-neon-blue border border-neon-blue hover:bg-neon-blue/10",
  };

  const Element = href ? "a" : "button";

  return (
    <Element
      ref={buttonRef as any}
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Element>
  );
}
