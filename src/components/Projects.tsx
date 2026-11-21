import { ArrowUpRight, Lock } from "lucide-react";
import { profile, projects, type Project } from "@/content/site";
import { GithubMark, Section, Tag, TextLink } from "./ui";

export function Projects() {
  return (
    <Section
      id="projetos"
      index="02"
      label="Projetos"
      title="Código aberto, escolhido a dedo"
      intro="Uma seleção dos repositórios públicos: banco de dados, web, sistemas e estruturas de dados. Cada card leva ao código."
    >
      <ul className="grid auto-rows-auto gap-3 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <li key={p.name} className={p.featured ? "md:col-span-2 lg:row-span-2" : p.wide ? "lg:col-span-2" : ""}>
            <ProjectCard p={p} />
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-xs text-faint">
        Todos os repositórios em{" "}
        <TextLink href={profile.links.github}>github.com/Diogo-Nobrega7</TextLink>
      </p>
    </Section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className={`group relative flex h-full flex-col rounded-lg border border-line bg-surface p-5 transition-colors sm:p-6 ${p.repo ? "hover:border-line-strong" : ""}`}>
      <div className="flex items-center justify-between gap-3 font-mono text-[11px] text-faint">
        <span className="flex items-center gap-2">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          {p.language}
        </span>
        <span>{p.domain}</span>
      </div>

      <h3 className={`mt-5 font-semibold tracking-tight ${p.featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
        {p.repo ? (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none"
          >
            {p.name}
          </a>
        ) : (
          p.name
        )}
      </h3>
      <p className={`mt-2 leading-relaxed text-muted ${p.featured ? "max-w-xl text-base" : "text-sm"}`}>
        {p.summary}
      </p>

      {p.details.length > 0 && (p.featured || p.wide || p.details.length <= 1) && (
        <ul className={`space-y-2 ${p.featured ? "mt-6" : "mt-4"}`}>
          {p.details.map((d) => (
            <li key={d} className="flex gap-2.5 text-sm leading-relaxed text-fg/85">
              <span aria-hidden className="mt-[0.65em] h-px w-2.5 shrink-0 bg-line-strong" />
              {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
        <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologias">
          {p.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        <span className="flex items-center gap-3 font-mono text-[11px] text-faint">
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 underline decoration-line-strong underline-offset-4 hover:text-fg hover:decoration-accent"
            >
              site
            </a>
          )}
          {p.repo ? (
            <span className="flex items-center gap-1 transition-colors group-hover:text-fg">
              <GithubMark className="size-3.5" />
              código
              <ArrowUpRight aria-hidden className="size-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Lock aria-hidden className="size-3" />
              repositório privado
            </span>
          )}
        </span>
      </div>
    </article>
  );
}
