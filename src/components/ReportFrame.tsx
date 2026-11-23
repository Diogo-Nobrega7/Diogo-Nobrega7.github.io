import type { CaseStudy } from "@/content/site";

/** Relatório Power BI embutido (link de "Publicar na Web"). Só aparece quando `embedUrl` está preenchido. */
export function ReportFrame({ data }: { data: CaseStudy }) {
  if (!data.embedUrl) return null;

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        <p className="truncate font-mono text-[11px] text-faint">relatório ao vivo · Power BI</p>
      </div>
      <div className="relative aspect-[16/10] w-full">
        <iframe
          src={data.embedUrl}
          title={`Relatório: ${data.title}`}
          loading="lazy"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-faint">
        Painel publicado pela SUEP. Use os filtros para explorar.
      </figcaption>
    </figure>
  );
}
