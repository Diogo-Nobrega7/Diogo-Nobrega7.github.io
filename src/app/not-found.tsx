import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center">
      <Container className="max-w-md text-center">
        <p className="font-mono text-xs text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">Página não encontrada</h1>
        <p className="mt-3 text-muted">Esse endereço não existe aqui.</p>
        <a href="./" className="mt-8 inline-block font-mono text-sm underline decoration-line-strong underline-offset-4 hover:decoration-accent">
          voltar ao início
        </a>
      </Container>
    </main>
  );
}
