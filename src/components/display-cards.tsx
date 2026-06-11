"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Code2, PenTool, Rocket, type LucideIcon } from "lucide-react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <PenTool className="size-4 text-white" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-white",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-white/10 bg-white/[0.04] backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-black after:to-transparent after:content-[''] hover:border-white/25 hover:bg-white/[0.08] [&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-white/10 p-1.5">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-white/80">{description}</p>
      <p className="text-white/40">{date}</p>
    </div>
  );
}

interface CardData extends DisplayCardProps {
  Icon: LucideIcon;
}

const cards: CardData[] = [
  {
    Icon: PenTool,
    title: "Design",
    description: "Pixel-perfect interfaces",
    date: "We craft",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    Icon: Code2,
    title: "Develop",
    description: "Scalable, modern code",
    date: "We build",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    Icon: Rocket,
    title: "Deliver",
    description: "Shipped on time",
    date: "We launch",
    className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export default function DisplayCards() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="grid [grid-template-areas:'stack'] place-items-center"
    >
      {cards.map(({ Icon, ...card }, index) => (
        <DisplayCard
          key={index}
          {...card}
          icon={<Icon className="size-4 text-white" />}
        />
      ))}
    </motion.div>
  );
}
