import { ReactNode } from "react";

export default function Section({
  children,
}: {
  children: ReactNode;
}) {
  return (
  <section className="bg-[#08111F] py-28">
    {children}
  </section>
);
}