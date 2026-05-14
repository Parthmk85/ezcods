export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050510]">

      {/* Liquid orbs */}
      <div className="orb orb-purple" aria-hidden="true" />
      <div className="orb orb-blue"   aria-hidden="true" />
      <div className="orb orb-pink"   aria-hidden="true" />
      <div className="orb orb-teal"   aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 w-full max-w-2xl mx-auto">

        {/* Glass card */}
        <div className="glass-card w-full rounded-3xl px-8 py-12 sm:px-14 sm:py-16 flex flex-col items-center gap-6">

          {/* Brand name */}
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">
              IT Solutions
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight gradient-text leading-none">
              EzCods
            </h1>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="divider-line h-px bg-gradient-to-r from-transparent to-violet-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
            <div className="divider-line h-px bg-gradient-to-l from-transparent to-violet-400/60" />
          </div>

          {/* Coming Soon */}
          <div className="flex flex-col items-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white/90 tracking-wide">
              Coming Soon
            </h2>
            <p className="text-base sm:text-lg text-white/45 max-w-md leading-relaxed">
              We&apos;re crafting something extraordinary. Our platform launches shortly — stay tuned for the big reveal.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className="text-sm text-white/35 tracking-wide">
              Get in touch with us
            </p>
            <a
              href="mailto:founder@ezcods.com"
              className="email-link inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm sm:text-base font-medium text-violet-300 transition-all duration-300 hover:border-violet-400/60 hover:bg-violet-500/20 hover:text-violet-200 hover:scale-105 active:scale-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              founder@ezcods.com
            </a>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-white/20 tracking-wide">
          © 2026 EzCods. All rights reserved.
        </p>
      </div>
    </div>
  );
}
