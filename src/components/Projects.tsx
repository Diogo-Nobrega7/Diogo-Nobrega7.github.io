import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/site";
import { Section, Tag } from "./ui";

export function Projects() {
  return (
    <Section
      id="projetos"
      index="02"
      label="Projetos"
      title="Sistemas que construí por conta própria"
      intro="Fora da SUEP, três projetos que desenhei e desenvolvi de ponta a ponta: o problema, o que cada um faz e as decisões de engenharia por trás."
    >
      <div className="space-y-4">
        {projects.map((p) => (
          <ProjectBlock key={p.id} p={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectBlock({ p }: { p: Project }) {
  return (
    <article
      aria-labelledby={`${p.id}-t`}
      className="overflow-hidden rounded-lg border border-line bg-surface"
    >
      <header className="flex flex-col gap-6 border-b border-line p-5 sm:p-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-faint">
            <span className="text-accent">{p.index}</span>
            <span>{p.kind}</span>
            {p.status && (
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden className="size-1.5 rounded-full bg-accent" />
                {p.status}
              </span>
            )}
          </p>
          <h3 id={`${p.id}-t`} className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            {p.name}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-muted sm:text-lg">{p.tagline}</p>
        </div>
        {p.live && (
          <a
            href={p.live.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-md border border-line px-3.5 py-2 text-sm text-fg transition-colors hover:border-accent/60 md:self-auto"
          >
            {p.live.label}
            <ArrowUpRight
              aria-hidden
              className="size-3.5 text-faint transition-transform group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-accent"
            />
          </a>
        )}
      </header>

      <div className="grid gap-px bg-line md:grid-cols-[1fr_1fr]">
        <div className="bg-surface p-5 sm:p-8">
          <h4 className="font-mono text-xs tracking-wide text-faint uppercase">Contexto</h4>
          <p className="mt-3 leading-relaxed text-fg/90">{p.context}</p>
          <h4 className="mt-8 font-mono text-xs tracking-wide text-faint uppercase">O que faz</h4>
          <List items={p.features} />
        </div>
        <div className="bg-surface p-5 sm:p-8">
          <h4 className="font-mono text-xs tracking-wide text-faint uppercase">Decisões de engenharia</h4>
          <List items={p.engineering} accent />
          <ul className="mt-8 flex flex-wrap gap-1.5" aria-label="Tecnologias">
            {p.stack.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function List({ items, accent = false }: { items: string[]; accent?: boolean }) {
  return (
    <ul className="mt-3 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg/90 sm:text-[15px]">
          <span
            aria-hidden
            className={`mt-[0.7em] h-px w-3 shrink-0 ${accent ? "bg-accent" : "bg-line-strong"}`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
