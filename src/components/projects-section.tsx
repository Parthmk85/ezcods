"use client";

import {
  Shirt,
  Salad,
  Leaf,
  Brush,
  Gem,
  ShoppingBag,
  Scissors,
  Database,
  Cpu,
  Store,
  Check,
  MousePointerClick,
} from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/radial-orbital-timeline";

const projects: TimelineItem[] = [
  {
    id: 1,
    title: "Skov Fashion",
    date: "2025",
    content: "A modern fashion e-commerce store with a clean, trend-forward shopping experience.",
    category: "Fashion",
    icon: Shirt,
    relatedIds: [5, 7],
    status: "completed",
    energy: 92,
    url: "https://skovfashion.com",
  },
  {
    id: 2,
    title: "Salad Culture",
    date: "2025",
    content: "A fresh, appetizing website for a healthy salad brand with online ordering.",
    category: "Food",
    icon: Salad,
    relatedIds: [3],
    status: "completed",
    energy: 85,
    url: "https://thesaladculture.com",
  },
  {
    id: 3,
    title: "Niramaya Organic",
    date: "2025",
    content: "A healthcare and organic wellness platform focused on natural products.",
    category: "Healthcare",
    icon: Leaf,
    relatedIds: [2],
    status: "completed",
    energy: 80,
    url: "https://niramayaorganic.com",
  },
  {
    id: 4,
    title: "Mehandi Artist",
    date: "2025",
    content: "An elegant portfolio site for a professional mehandi artist with a booking flow.",
    category: "Portfolio",
    icon: Brush,
    relatedIds: [5, 7],
    status: "completed",
    energy: 78,
    url: "https://najima-mehandi-artist.in/",
  },
  {
    id: 5,
    title: "Glamora",
    date: "2025",
    content: "A premium beauty and cosmetics brand store built for a US-based client.",
    category: "Beauty",
    icon: Gem,
    relatedIds: [1, 7],
    status: "completed",
    energy: 88,
    url: "https://glamorafromusa.vercel.app",
  },
  {
    id: 6,
    title: "Penut",
    date: "2025",
    content: "A focused product-selling storefront with a smooth checkout experience.",
    category: "E-Commerce",
    icon: ShoppingBag,
    relatedIds: [1, 2],
    status: "completed",
    energy: 75,
    url: "https://penut-eta.vercel.app",
  },
  {
    id: 7,
    title: "Beauty Studio",
    date: "2025",
    content: "A stylish website for a beauty studio showcasing services and bookings.",
    category: "Beauty",
    icon: Scissors,
    relatedIds: [1, 4, 5],
    status: "completed",
    energy: 82,
    url: "https://richlook18.in",
  },
  {
    id: 8,
    title: "Datanvala",
    date: "2025",
    content: "A data-driven business platform with a clean, professional presentation.",
    category: "Data",
    icon: Database,
    relatedIds: [9],
    status: "completed",
    energy: 86,
    url: "https://datanvala.com",
  },
  {
    id: 9,
    title: "Techly",
    date: "2025",
    content: "A sleek technology brand website with a fast, modern interface.",
    category: "Technology",
    icon: Cpu,
    relatedIds: [8],
    status: "completed",
    energy: 90,
    url: "https://tech-ly.in",
  },
  {
    id: 10,
    title: "Dkaro",
    date: "2025",
    content: "A modern digital platform delivering a clean, conversion-focused experience.",
    category: "Web App",
    icon: Store,
    relatedIds: [6, 9],
    status: "completed",
    energy: 84,
    url: "https://dkaro.com",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Custom Designs" },
  { value: "Fast", label: "On-time Delivery" },
  { value: "5★", label: "Client Rated" },
];

const features = [
  "Custom design & development",
  "Pixel-perfect, fully responsive",
  "SEO-ready & lightning fast",
];

export function ProjectsSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Heading */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 px-6 pt-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          Our Past Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/45">
          Tap any node to explore what we&apos;ve built.
        </p>
      </div>

      {/* Alert — left side */}
      <div className="pointer-events-none absolute left-6 lg:left-12 top-28 z-30">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
          <MousePointerClick size={14} className="text-white animate-pulse" />
          Tap a circle to visit some of our live websites
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Left: orbital timeline */}
        <div className="w-full lg:w-3/5">
          <RadialOrbitalTimeline timelineData={projects} />
        </div>

        {/* Right: marketing copy */}
        <div className="hidden lg:flex w-2/5 h-screen flex-col justify-center pr-16 pl-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Why EzCods
          </p>
          <h3 className="mt-4 text-3xl xl:text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            From idea to launch,
            <br />
            we just deliver.
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/50">
            Custom-designed, high-performance websites and apps — crafted to make
            your brand stand out and built to scale.
          </p>

          {/* Stats */}
          <div className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl xl:text-4xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/45">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature checklist */}
          <ul className="mt-10 space-y-2.5">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-white/10">
                  <Check size={13} className="text-white" />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
