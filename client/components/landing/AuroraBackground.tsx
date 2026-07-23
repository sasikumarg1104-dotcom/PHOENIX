"use client";
export default function AuroraBackground() {
  return (
    <>
      {/* Purple Glow */}
      <div className="absolute left-[-180px] top-20 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[160px]" />

      {/* Blue Glow */}
      <div className="absolute right-[-150px] bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

      {/* Pink Glow */}
      <div className="absolute left-1/2 top-1/3 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />

      {/* Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
    </>
  );
}
