import { education } from "@/data/education";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="relative ml-2 space-y-8 border-l border-line/15 pl-8">
        {education.map((e) => (
          <li key={`${e.institution}-${e.degree}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.4rem] top-7 size-3 rounded-full bg-electric ring-4 ring-bg"
            />
            <div className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-xl font-semibold tracking-tight">{e.institution}</h3>
                <p className="text-sm text-muted">{e.graduation}</p>
              </div>
              <p className="mt-2 text-muted">
                {e.degree}, {e.branch}
              </p>
              <p className="mt-1 text-sm text-muted">{e.score}</p>
              {e.coursework.length > 0 ? (
                <>
                  <h4 className="mt-6 text-sm font-semibold">Relevant coursework</h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {e.coursework.map((c) => (
                      <li key={c} className="rounded-md border border-line/10 bg-line/[0.05] px-2.5 py-1 text-sm text-muted">
                        {c}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
