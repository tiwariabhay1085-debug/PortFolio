import { ExternalLink } from "lucide-react";
import { experienceGroups } from "@/data/experience";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience and achievements"
      description="Internships, certifications, hackathons, and learning, added as they happen."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {experienceGroups.map(({ id, title, icon: Icon, emptyText, entries }) => (
          <article key={id} className="glass rounded-3xl p-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-aqua/10 text-aqua">
                <Icon className="size-[18px]" aria-hidden="true" />
              </span>
              {title}
            </h3>

            {entries.length === 0 ? (
              <p className="mt-5 rounded-2xl border border-dashed border-line/20 px-4 py-6 text-center text-sm text-muted">
                {emptyText}
              </p>
            ) : (
              <ul className="mt-5 space-y-4">
                {entries.map((entry) => (
                  <li key={`${entry.title}-${entry.date ?? ""}`} className="rounded-2xl border border-line/10 p-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-medium">{entry.title}</h4>
                      {entry.date ? <span className="text-xs text-muted">{entry.date}</span> : null}
                    </div>
                    {entry.org ? <p className="mt-0.5 text-sm text-muted">{entry.org}</p> : null}
                    {entry.description ? <p className="mt-2 text-sm text-muted">{entry.description}</p> : null}
                    {entry.link ? (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm text-electric hover:underline"
                      >
                        View details
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
