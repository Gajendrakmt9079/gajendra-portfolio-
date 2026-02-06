import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Developer Portfolio | Creative Frontend Engineer",
  description:
    "Award-winning developer portfolio showcasing world-class projects and cutting-edge web technologies.",
  keywords: [
    "developer",
    "portfolio",
    "frontend",
    "Next.js",
    "React",
    "TypeScript",
    "GSAP",
    "Three.js",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Elite Developer Portfolio",
    description:
      "Award-winning developer portfolio showcasing world-class projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-dark-900 text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
