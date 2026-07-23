"use client";

interface PasswordStrengthProps {
  password: string;
}

export default function PasswordStrength({
  password,
}: PasswordStrengthProps) {
  const checks = [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ];

  const score = checks.filter(Boolean).length;

  const getColor = () => {
    if (score <= 2) return "bg-red-500";
    if (score <= 4) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getLabel = () => {
    if (score <= 2) return "Weak";
    if (score <= 4) return "Medium";
    return "Strong";
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((bar) => (
          <div
            key={bar}
            className={`h-2 flex-1 rounded-full transition-all duration-300 ${
              bar <= score ? getColor() : "bg-white/10"
            }`}
          />
        ))}
      </div>

      <p className="text-sm text-gray-400">
        Password Strength:
        <span className={`ml-2 font-semibold ${
          score <= 2
            ? "text-red-400"
            : score <= 4
            ? "text-yellow-400"
            : "text-green-400"
        }`}>
          {getLabel()}
        </span>
      </p>
    </div>
  );
}