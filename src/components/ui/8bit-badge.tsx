import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "pixel-border inline-block bg-white px-2 py-1 font-bold text-black",
        className
      )}
      {...props}
    />
  );
}
