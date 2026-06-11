import * as React from "react";
import { cn } from "@/lib/utils";

export function Separator({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="separator"
      className={cn(
        "h-1 w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.45)_0,rgba(255,255,255,0.45)_6px,transparent_6px,transparent_12px)]",
        className
      )}
      {...props}
    />
  );
}
