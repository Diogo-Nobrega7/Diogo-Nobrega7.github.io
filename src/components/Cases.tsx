import { cases, type CaseStudy } from "@/content/site";
import { Gallery } from "./Gallery";
import { ReportFrame } from "./ReportFrame";
import { Section, Tag, TextLink } from "./ui";

export function Cases() {
  return (
    <Section
      id="cases"
      index="01"
      label="Cases"
      title="O trabalho que roda na rede estadual"
      intro="Dois projetos que entreguei na SUEP. Para cada um: o problema, como a solução foi montada e o que mudou."
    >
      <div className="space-y-24">
        {cases.map((c) => (
          <CaseBlock key={c.id} data={c} />
        ))}
      </div>
    </Section>
  );
}

function CaseBlock({ data }: { data: CaseStudy }) {
  return (
    <article aria-labelledby={`${data.id}-t`}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-xs text-faint">
        <span className="text-accent">case.{data.index}</span>
        <span>{data.client}</span>
      </div>
      <h3 id={`${data.id}-t`} className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {data.title}
      </h3>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{data.lede}</p>

      {data.embedUrl ? (
        <div className="mt-8">
          <ReportFrame data={data} />
        </div>
      ) : (
        data.media && (
          <div className="mt-8 overflow-hidden rounded-lg border border-line">
            <Gallery media={data.media} />
          </div>
        )
      )}

      {data.facts && data.facts.length > 0 && (
        <div className="mt-6">
          <dl className={`grid gap-px ${data.facts.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"} overflow-hidden rounded-lg border border-line bg-line`}>
            {data.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse justify-end bg-surface px-4 py-5 sm:px-5">
                <dt className="mt-1 text-xs leading-snug text-muted">{f.label}</dt>
                <dd className="font-mono text-2xl font-medium tracking-tight sm:text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
          {data.factsSource && (
            <p className="mt-2 font-mono text-[11px] text-faint">
              Fonte:{" "}
              <a
                href={data.factsSource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line-strong underline-offset-4 hover:text-fg hover:decoration-accent"
              >
                {data.factsSource.label}
              </a>
            </p>
          )}
        </div>
      )}

      {data.deliverables && data.deliverables.length > 0 && (
        <ul className="mt-6 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {data.deliverables.map((d) => (
            <li key={d.name} className="bg-surface px-5 py-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium">{d.name}</p>
                {d.badge && (
                  <span className="rounded-[4px] border border-accent/40 bg-accent-soft px-1.5 py-0.5 font-mono text-[10px] text-accent">
                    {d.badge}
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{d.detail}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        <div>
          <h4 className="font-mono text-xs tracking-wide text-faint uppercase">Problema</h4>
          <p className="mt-3 leading-relaxed text-fg/90">{data.problem}</p>

          <h4 className="mt-10 font-mono text-xs tracking-wide text-faint uppercase">Impacto</h4>
          <ul className="mt-3 space-y-2.5">
            {data.impact.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-fg/90">
                <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs tracking-wide text-faint uppercase">Arquitetura</h4>
          <ol className="mt-3 divide-y divide-line border-y border-line">
            {data.architecture.map((a, i) => (
              <li key={a.step} className="grid grid-cols-[2rem_1fr] gap-2 py-3.5">
                <span className="font-mono text-xs leading-6 text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-medium">{a.step}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-muted">{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          {data.stack.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
              {data.stack.map((s) => (
                <li key={s}>
                  <Tag>{s}</Tag>
                </li>
              ))}
            </ul>
          )}

          {data.link && (
            <p className="mt-6 text-sm">
              <TextLink href={data.link.href}>{data.link.label}</TextLink>
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
