import type { ReactNode } from "react";

export function Section({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-2xl text-base text-muted">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}
