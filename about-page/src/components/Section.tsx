import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section aria-labelledby={headingId} className="mb-12">
      <h2 id={headingId} className="mb-6 text-2xl font-semibold text-gray-900">
        {title}
      </h2>
      {children}
    </section>
  );
}
