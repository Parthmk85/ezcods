import { BackgroundPaths } from "@/components/floating-paths";
import { Tagline } from "@/components/tagline";
import DisplayCards from "@/components/display-cards";
import { ProjectsSection } from "@/components/projects-section";
import { ServicesSection } from "@/components/services-section";
import { HowWeWorkSection } from "@/components/how-we-work-section";
import { FaqSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main>
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Animated floating paths background */}
      <BackgroundPaths />

      {/* Stacked display cards — top right corner */}
      <div className="hidden lg:block absolute top-20 right-40 z-10">
        <DisplayCards />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50">
          EzCods
        </h1>
        <p className="mt-4 text-sm sm:text-base font-medium uppercase tracking-[0.4em] text-white/50">
          IT Solutions
        </p>

        <Tagline />
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-[0.3em] text-white/40">
          Scroll down
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/40 animate-bounce"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>

      {/* Past projects — radial orbital timeline */}
      <ProjectsSection />

      {/* Services — 3D shader background + glass cards */}
      <ServicesSection />

      {/* How we work — bento grid process */}
      <HowWeWorkSection />

      {/* FAQ */}
      <FaqSection />

      {/* Contact — form + interactive 3D robot */}
      <ContactSection />
    </main>
  );
}
