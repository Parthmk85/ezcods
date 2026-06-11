"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/8bit-accordion";
import { Input } from "@/components/ui/8bit-input";

interface FAQItem {
  answer: string;
  category: string;
  question: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What services does EzCods offer?",
    answer:
      "We build websites (including 3D sites), web apps, mobile apps (Flutter, React Native, native iOS & Android), desktop & offline software, and custom business software.",
  },
  {
    category: "General",
    question: "How long does a project take?",
    answer:
      "It depends on scope. A landing page can take a few days; a full app usually 4-8 weeks. You get a clear timeline after the analysis phase.",
  },
  {
    category: "Process",
    question: "Can I request changes during development?",
    answer:
      "Absolutely. We work closely with you and refine every detail with your feedback until it feels exactly right.",
  },
  {
    category: "Process",
    question: "Do I own the code and design?",
    answer:
      "Yes, 100%. Once the project is delivered and paid for, all code and assets belong to you.",
  },
  {
    category: "Pricing",
    question: "How much does a project cost?",
    answer:
      "Every project is custom-quoted based on features and scope. Get in touch and we'll share a transparent estimate.",
  },
  {
    category: "Pricing",
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We offer maintenance and support packages to keep your product fast, secure and up to date.",
  },
  {
    category: "Tech",
    question: "What technologies do you use?",
    answer:
      "Modern, reliable stacks - React, Next.js, Flutter, React Native, Node.js and more - picked to fit your project.",
  },
  {
    category: "Tech",
    question: "Will my site be fast and SEO-friendly?",
    answer:
      "Yes. Performance and SEO best-practices are built in from day one.",
  },
];

export function FaqSection() {
  const [search, setSearch] = useState("");

  const filtered = search
    ? faqs.filter(
        (item) =>
          item.question.toLowerCase().includes(search.toLowerCase()) ||
          item.answer.toLowerCase().includes(search.toLowerCase())
      )
    : faqs;

  const categories = [...new Set(filtered.map((item) => item.category))];

  return (
    <section className="w-full bg-black px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="retro mb-4 text-xl font-bold tracking-tight md:text-2xl">
            FAQ
          </h2>
          <p className="retro mx-auto max-w-xl text-[9px] leading-relaxed text-muted-foreground">
            Search or browse common questions
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <Input
            className="retro text-[10px]"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions..."
            type="search"
            value={search}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="retro py-8 text-center text-[10px] text-muted-foreground">
            No results found. Try a different search.
          </p>
        ) : (
          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="retro mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {category}
                </h3>
                <Accordion collapsible type="single">
                  {filtered
                    .filter((item) => item.category === category)
                    .map((item, idx) => (
                      <AccordionItem
                        key={item.question}
                        value={`${category}-${idx}`}
                      >
                        <AccordionTrigger className="retro text-left text-[11px] leading-relaxed">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="retro text-[9px] leading-[1.8] text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
