import { aboutParagraphs, interests, stats } from "@/data/about";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="max-w-prose space-y-5 text-lg leading-relaxed text-muted">
          {aboutParagraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          {stats.length > 0 ? (
            <dl className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4">
                  <dd className="text-3xl font-semibold text-fg">{s.value}</dd>
                  <dt className="mt-1 text-sm">{s.label}</dt>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <ul className="glass divide-y divide-line/10 rounded-3xl">
          {interests.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex gap-4 p-5">
              <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-medium">{title}</h3>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
