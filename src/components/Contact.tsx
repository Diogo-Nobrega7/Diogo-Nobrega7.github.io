import { profile } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import { Container, GithubMark, LinkedinMark, TextLink } from "./ui";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="border-t border-line">
      <Container className="grid gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:gap-8">
        <p className="font-mono text-xs tracking-wide text-faint lg:col-span-3">
          <span className="text-accent">04</span> / Contato
        </p>
        <div className="lg:col-span-9">
          <h2
            id="contato-title"
            className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Dados públicos, sistema ou painel: me conta o problema.
          </h2>
          <div className="mt-10">
            <CopyEmail email={profile.email} />
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <li className="flex items-center gap-2">
              <GithubMark className="size-4 text-faint" />
              <TextLink href={profile.links.github}>Diogo-Nobrega7</TextLink>
            </li>
            {profile.links.linkedin && (
              <li className="flex items-center gap-2">
                <LinkedinMark className="size-4 text-faint" />
                <TextLink href={profile.links.linkedin}>LinkedIn</TextLink>
              </li>
            )}
          </ul>
        </div>
      </Container>

      <footer className="border-t border-line">
        <Container className="flex flex-col gap-2 py-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Next.js · Tailwind · export estático</span>
        </Container>
      </footer>
    </section>
  );
}
