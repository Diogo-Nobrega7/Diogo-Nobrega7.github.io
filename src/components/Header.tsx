import { profile } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./ui";

const nav = [
  { href: "#cases", label: "Cases" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm text-fg">
          <span aria-hidden className="inline-block size-2 rounded-[2px] bg-accent" />
          {profile.name.toLowerCase().replace(" ", ".").normalize("NFD").replace(/[̀-ͯ]/g, "")}
        </a>
        <nav aria-label="Seções" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            className="rounded-md px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-fg sm:hidden"
          >
            Contato
          </a>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
