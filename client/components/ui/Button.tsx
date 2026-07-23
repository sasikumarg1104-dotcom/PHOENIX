import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-full px-8 py-4 font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-lg shadow-violet-600/30 hover:scale-105"
          : "border border-white/20 bg-white/5 text-white backdrop-blur-xl hover:bg-white/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}