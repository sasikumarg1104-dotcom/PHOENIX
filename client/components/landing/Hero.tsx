"use client";

import AuroraBackground from "./AuroraBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[110vh] items-center justify-center overflow-hidden bg-[#08111F] px-6 pt-32 text-white">

      {/* Aurora Background */}
      <AuroraBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center">

        <div className="mb-8 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
          💜 Safe • Anonymous • Supportive
        </div>

        <h1 className="text-5xl font-extrabold leading-[0.95] md:text-7xl lg:text-8xl">
          You don't have to
          <br />
          heal alone
        </h1>

        <p className="mt-6 text-2xl font-medium text-gray-300">
          We're here when you need us.
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          A place where stories become strength, strangers become friends,
          and healing begins one small step at a time.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <button className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-violet-600/30 transition-all duration-300 hover:scale-105">
            Start Your Journey
          </button>

          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-lg backdrop-blur-xl transition-all duration-300 hover:bg-white/10">
            Explore Stories
          </button>

        </div>

      </div>

    </section>
  );
}