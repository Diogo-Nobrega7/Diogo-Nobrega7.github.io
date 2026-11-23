# Portfólio — Diogo Nóbrega

Next.js (App Router) + TypeScript + Tailwind v4, exportado como site estático (`out/`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # gera out/
```

## Editar conteúdo
Tudo está em `src/content/site.ts` (perfil, cases, projetos, stack e formação).
Os painéis de Power BI estão em https://suep-rn.github.io/SUEPBI/ (para embutir um deles, preencha `embedUrl` no case).

## Power BI
No case de BI, preencha `embedUrl` (Publicar na Web ou embed seguro) ou `screenshots`
(arquivos em `public/cases/`, com dados de estudantes anonimizados). Sem nenhum dos dois, aparece o esquema do pipeline.

## Publicar (GitHub Pages)
1. Este repositório já é o `Diogo-Nobrega7.github.io`.
2. Settings → Pages → Source: **GitHub Actions** (uma vez só).
3. Cada push na `main` faz lint, build e publica em https://diogo-nobrega7.github.io/.

A imagem de prévia (`public/og.png`) é fixa: se mudar nome ou cargo, gere outra de 1200×630.
