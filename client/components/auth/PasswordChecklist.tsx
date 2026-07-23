"use client";

import { CheckCircle2, Circle } from "lucide-react";

interface PasswordChecklistProps {
  password: string;
}

export default function PasswordChecklist({
  password,
}: PasswordChecklistProps) {
  const rules = [
    {
      label: "At least 8 characters",
      valid: password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(password),
    },
    {
      label: "One lowercase letter",
      valid: /[a-z]/.test(password),
    },
    {
      label: "One number",
      valid: /\d/.test(password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="mb-3 text-sm font-semibold text-white">
        Password Requirements
      </p>

      <div className="space-y-2">
        {rules.map((rule) => (
          <div
            key={rule.label}
            className="flex items-center gap-3 text-sm"
          >
            {rule.valid ? (
              <CheckCircle2
                size={18}
                className="text-green-400"
              />
            ) : (
              <Circle
                size={18}
                className="text-gray-500"
              />
            )}

            <span
              className={
                rule.valid
                  ? "text-green-300"
                  : "text-gray-400"
              }
            >
              {rule.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}