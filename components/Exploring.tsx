import { exploringTopics } from "@/data/exploring";
import { Section } from "./Section";

export function Exploring() {
  return (
    <Section id="exploring" title="Currently exploring">
      <div className="glass rounded-3xl p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {exploringTopics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-line/10 bg-line/[0.05] px-3 py-2 text-sm text-muted"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
