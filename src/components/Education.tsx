import { education } from "@/content/site";
import { Section } from "./ui";

export function Education() {
  return (
    <Section id="formacao" index="04" label="Formação" title="Formação e certificações">
      <ol className="divide-y divide-line border-y border-line">
        {education.map((e) => (
          <li
            key={e.title}
            className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
          >
            <div>
              <p className="font-medium">{e.title}</p>
              <p className="mt-0.5 text-sm text-muted">{e.org}</p>
            </div>
            <p className="font-mono text-xs text-faint">{e.period}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
