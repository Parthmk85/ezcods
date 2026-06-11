import {
  Search,
  ClipboardList,
  Palette,
  MessageSquare,
  Code2,
  Rocket,
} from "lucide-react";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";

const steps: BentoItem[] = [
  {
    title: "Business Analysis",
    meta: "Step 01",
    description:
      "We study your business, market and audience to map out the right strategy before anything is built.",
    icon: <Search className="h-4 w-4" />,
    status: "Discover",
    tags: ["Research", "Strategy"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Strategy & Planning",
    meta: "Step 02",
    description: "Clear scope, timeline and architecture before we build.",
    icon: <ClipboardList className="h-4 w-4" />,
    status: "Plan",
    tags: ["Scope", "Roadmap"],
  },
  {
    title: "UI / UX Design",
    meta: "Step 03",
    description: "Pixel-perfect, on-brand interfaces your users will love.",
    icon: <Palette className="h-4 w-4" />,
    status: "Design",
    tags: ["UI", "UX"],
  },
  {
    title: "Client Feedback & Changes",
    meta: "Step 04",
    description:
      "We refine every detail with your personal input until it feels exactly right.",
    icon: <MessageSquare className="h-4 w-4" />,
    status: "Your call",
    tags: ["Feedback", "Revisions"],
    colSpan: 2,
  },
  {
    title: "Development",
    meta: "Step 05",
    description:
      "Clean, scalable and fully-tested code that brings the design to life.",
    icon: <Code2 className="h-4 w-4" />,
    status: "Build",
    tags: ["Code", "Testing"],
    colSpan: 2,
  },
  {
    title: "Delivery & Support",
    meta: "Step 06",
    description: "We launch, monitor and keep improving after go-live.",
    icon: <Rocket className="h-4 w-4" />,
    status: "Live",
    tags: ["Launch", "Support"],
  },
];

export function HowWeWorkSection() {
  return (
    <section className="relative w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Our Process
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-white/45">
            From understanding your business to launch and beyond — a clear,
            transparent process at every step.
          </p>
        </div>

        <BentoGrid items={steps} />
      </div>
    </section>
  );
}
