import Link from "next/link";

interface Props {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthFooter({
  text,
  linkText,
  href,
}: Props) {
  return (
    <p className="mt-8 text-center text-gray-400">
      {text}{" "}

      <Link
        href={href}
        className="font-semibold text-violet-400 hover:text-violet-300"
      >
        {linkText}
      </Link>
    </p>
  );
}