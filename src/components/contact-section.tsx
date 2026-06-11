"use client";

import { useState } from "react";
import { Paperclip, Send } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      (fileName ? `Document: ${fileName} (please attach it to this email)\n` : "");

    window.location.href = `mailto:founder@ezcods.com?subject=${encodeURIComponent(
      `New project inquiry from ${name}`
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  };

  const inputClass =
    "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-white/40 focus:outline-none";

  return (
    <section id="contact" className="relative w-full bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/[0.96]">
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row">
            {/* Left — form */}
            <div className="relative z-10 flex-1 p-8 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
                Let&apos;s build something great
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-300">
                Tell us about your project and we&apos;ll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 00000 00000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-white/60">
                    Document{" "}
                    <span className="text-white/30">(optional)</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/20 px-4 py-3 text-sm text-white/50 transition-colors hover:border-white/40 hover:text-white/70">
                    <Paperclip size={16} />
                    <span className="truncate">
                      {fileName || "Attach a file"}
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) =>
                        setFileName(e.target.files?.[0]?.name ?? "")
                      }
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-white/90"
                >
                  <Send size={16} />
                  Send message
                </button>

                {sent && (
                  <p className="text-xs text-emerald-400">
                    Thanks! Your email app should open — we&apos;ll get back to you
                    soon.
                  </p>
                )}
              </form>
            </div>

            {/* Right — 3D robot */}
            <div className="relative min-h-[360px] flex-1 lg:min-h-0">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
