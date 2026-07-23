import { ReactNode } from "react";

export default function Heading({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}