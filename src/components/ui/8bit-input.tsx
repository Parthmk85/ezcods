import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "pixel-border w-full bg-black px-4 py-3 text-white placeholder:text-white/40 focus:outline-none",
        className
      )}
      {...props}
    />
  );
}
