import { ReactNode } from "react";

export default function GlassCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-violet-500/40
      hover:bg-white/10
      hover:shadow-2xl
      hover:shadow-violet-500/20
      "
    >
      {children}
    </div>
  );
}