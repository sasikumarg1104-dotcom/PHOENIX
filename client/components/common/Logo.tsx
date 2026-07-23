"use client";

import Link from "next/link";

export default function Logo() {
  const letterClass =
  "font-[family:var(--font-logo)] text-[32px] text-white";

  const barClass =
    "h-[4px] w-6 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(192,38,211,0.9)]";

  return (
    <Link
      href="/"
      className="group flex items-center gap-[10px] select-none"
    >
      <span className={letterClass}>P</span>

      <span className={letterClass}>H</span>

      <span className={letterClass}>O</span>

      {/* Custom E */}
      <div className="mx-1 flex flex-col gap-[4px] transition-all duration-300 group-hover:scale-110">
        <div className={barClass}></div>
        <div className={barClass}></div>
        <div className={barClass}></div>
      </div>

      <span className={letterClass}>N</span>

      <span className={letterClass}>I</span>

      <span className={letterClass}>X</span>
    </Link>
  );
}