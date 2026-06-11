"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export function ServicesBackground() {
  return (
    <MeshGradient
      className="h-full w-full"
      colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
      speed={0.6}
      distortion={0.8}
      swirl={0.6}
    />
  );
}
