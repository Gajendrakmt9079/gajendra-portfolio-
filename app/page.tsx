import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Timeline from "@/components/Timeline/Timeline";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      {/* 
      Other sections have been moved to their own pages:
      - /about
      - /projects
      - /experience
      - /contact
      */}

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-glass-border">
        <p>
          © {new Date().getFullYear()} Elite Developer Portfolio. Built with
          Next.js, GSAP & Three.js
        </p>
      </footer>
    </main>
  );
}
