import { skillCategories, type Level } from "@/data/skills";
import { Section } from "./Section";

const levelDot: Record<Level, string> = {
  Learning: "bg-aqua",
  "Working knowledge": "bg-electric",
  Comfortable: "bg-iris",
};

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      description="Labels are self-assessed: Learning, Working knowledge, and Comfortable."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillCategories.map(({ title, icon: CategoryIcon, wide, skills }) => (
          <article key={title} className={`glass rounded-3xl p-6 ${wide ? "md:col-span-2" : ""}`}>
            <h3 className="flex items-center gap-3 text-lg font-semibold">
              <span className="inline-flex size-9 items-center justify-center rounded-xl bg-iris/10 text-iris">
                <CategoryIcon className="size-[18px]" aria-hidden="true" />
              </span>
              {title}
            </h3>
            <ul className={`mt-5 grid gap-2 ${wide ? "sm:grid-cols-2" : ""}`}>
              {skills.map(({ name, icon: Icon, level }) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-3 rounded-xl border border-line/10 px-3 py-2.5 transition-colors hover:border-electric/40"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
                    <span className="text-sm">{name}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs text-muted">
                    <span className={`size-1.5 rounded-full ${levelDot[level]}`} aria-hidden="true" />
                    {level}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
