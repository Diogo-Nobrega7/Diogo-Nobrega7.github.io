import { Mail } from "lucide-react";
import { profile } from "@/content/site";
import { Container, GithubMark, LinkedinMark } from "./ui";

const specs = [
  { k: "Cargo", v: profile.position, sub: profile.since },
  { k: "Órgão", v: profile.org, sub: "Educação Profissional" },
  { k: "Formação", v: profile.education, sub: profile.educationDetail },
  { k: "Idiomas", v: profile.languages },
  { k: "Base", v: profile.location },
]

export function Hero() {
  const links = [
    { href: profile.links.github, label: "GitHub", icon: <GithubMark /> },
    ...(profile.links.linkedin
      ? [{ href: profile.links.linkedin, label: "LinkedIn", icon: <LinkedinMark /> }]
      : []),
    { href: `mailto:${profile.email}`, label: "E-mail", icon: <Mail aria-hidden className="size-4" /> },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <Container className="relative grid gap-14 pt-20 pb-20 sm:pt-28 sm:pb-28 lg:grid-cols-12 lg:gap-8">
        <div className="reveal lg:col-span-8">
          <p className="font-mono text-xs text-faint">
            <span className="text-accent">●</span> {profile.availability.toLowerCase()}
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.035em] sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm text-muted sm:text-base">{profile.role}</p>
          <div className="mt-10 max-w-2xl space-y-3 text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            <p className="text-fg">{profile.summary[0]}</p>
            <p>{profile.summary[1]}</p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {links.map((l) => {
              const external = l.href.startsWith("http");
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3.5 py-2 text-sm text-fg transition-colors hover:border-accent/60"
                  >
                    {l.icon}
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <aside
          aria-label="Ficha técnica"
          className="reveal self-end rounded-lg border border-line bg-surface lg:col-span-4"
          style={{ animationDelay: "120ms" }}
        >
          <p className="border-b border-line px-4 py-2.5 font-mono text-[11px] tracking-wide text-faint uppercase">
            ficha.técnica
          </p>
          <dl className="divide-y divide-line">
            {specs.map((s) => (
              <div key={s.k} className="grid grid-cols-[6.5rem_1fr] gap-3 px-4 py-3">
                <dt className="font-mono text-xs text-faint">{s.k}</dt>
                <dd className="text-sm leading-snug text-fg">
                  {s.v}
                  {s.sub && <span className="mt-0.5 block font-mono text-[11px] text-faint">{s.sub}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </Container>
    </section>
  );
}
