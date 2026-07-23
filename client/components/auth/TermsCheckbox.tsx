"use client";

interface TermsCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function TermsCheckbox({
  checked,
  onChange,
}: TermsCheckboxProps) {
  return (
    <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent accent-purple-500"
      />

      <span>
        I agree to the{" "}
        <span className="text-purple-400 hover:underline">
          Terms of Service
        </span>{" "}
        and{" "}
        <span className="text-purple-400 hover:underline">
          Privacy Policy
        </span>
      </span>
    </label>
  );
}