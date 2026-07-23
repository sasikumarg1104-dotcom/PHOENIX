"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  error?: string;
  disabled?: boolean;
}

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon,
  error,
  disabled = false,
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">
        {label}
      </label>

      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </div>

        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-full
            rounded-xl
            border
            bg-white/5
            py-3
            pl-12
            pr-12
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            ${
              error
                ? "border-red-500 focus:ring-red-500/20"
                : "border-white/10 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            }
            disabled:cursor-not-allowed
            disabled:opacity-60
          `}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-white"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}