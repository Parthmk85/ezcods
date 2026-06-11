"use client";

import { useEffect, useState } from "react";
import { ServicesBackground } from "@/components/services-background";
import { Badge } from "@/components/ui/8bit-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit-card";

interface ServiceEntry {
  tag: string;
  title: string;
  description: string;
  badge?: string;
}

const services: ServiceEntry[] = [
  {
    tag: "3D / WEBGL",
    title: "3D Websites",
    description:
      "Immersive, interactive 3D experiences powered by WebGL & Three.js that make your brand unforgettable.",
    badge: "POPULAR",
  },
  {
    tag: "WEB",
    title: "Websites — Every Type",
    description:
      "Landing pages, e-commerce, SaaS, dashboards, portfolios, blogs & corporate sites. Fast and pixel-perfect.",
  },
  {
    tag: "MOBILE",
    title: "Cross-Platform Apps",
    description:
      "Flutter & React Native apps that run beautifully on both iOS and Android from a single codebase.",
  },
  {
    tag: "iOS / ANDROID",
    title: "Native Mobile Apps",
    description:
      "High-performance native apps published to the App Store and Google Play with platform-perfect UX.",
  },
  {
    tag: "DESKTOP",
    title: "Desktop & Offline Software",
    description:
      "Windows, macOS & Linux apps — including fully offline software that works without the internet.",
  },
  {
    tag: "SOFTWARE",
    title: "Custom Software",
    description:
      "Tailored business tools, ERPs, CRMs and internal systems built exactly around your workflow.",
  },
  {
    tag: "DESIGN",
    title: "UI / UX Design",
    description:
      "Premium, conversion-focused interfaces with thoughtful design systems and smooth interactions.",
  },
  {
    tag: "BACKEND",
    title: "Backend & APIs",
    description:
      "Scalable servers, databases, authentication and third-party integrations that just work.",
  },
  {
    tag: "AI",
    title: "AI & Automation",
    description:
      "LLM-powered features, chatbots and workflow automation to make your product smarter.",
  },
  {
    tag: "CLOUD",
    title: "Cloud & DevOps",
    description:
      "Hosting, CI/CD pipelines, monitoring and auto-scaling to keep everything fast and reliable.",
  },
];

export function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-black py-24 sm:py-32">
      {/* 3D shader background */}
      <div className="absolute inset-0 z-0">
        {mounted && <ServicesBackground />}
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Glass heading */}
        <div className="mx-auto mb-14 max-w-xl rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-10 text-center shadow-2xl shadow-black/40 backdrop-blur-xl">
          <p className="retro text-[9px] uppercase tracking-widest text-white/40">
            What we do
          </p>
          <h2 className="retro mt-4 text-xl font-bold tracking-tight sm:text-2xl">
            Our Services
          </h2>
          <p className="retro mt-4 text-[9px] leading-relaxed text-white/50">
            If it runs on a screen, we build it.
          </p>
        </div>

        {/* 8bit service cards — 3 per row */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((entry) => (
            <Card key={entry.title} className="relative">
              {entry.badge && (
                <div className="absolute top-2 right-4 z-10">
                  <Badge className="retro text-[8px]">{entry.badge}</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="retro mb-1 text-[9px] text-muted-foreground">
                  {entry.tag}
                </div>
                <CardTitle className="retro text-[13px] leading-relaxed">
                  {entry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="retro text-[9px] leading-[1.8]">
                  {entry.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
