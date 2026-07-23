import { ReactNode } from "react";

export default function AuthCard({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-2xl shadow-black/30">
      {children}
    </div>
  );
}