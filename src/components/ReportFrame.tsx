import type { CaseStudy } from "@/content/site";

/**
 * Espaço do relatório:
 * 1. `embedUrl` preenchido → iframe do Power BI (Publicar na Web ou embed seguro);
 * 2. senão, `screenshots` → imagens (anonimizadas);
 * 3. senão → esquema do pipeline, para o case nunca ficar com um buraco.
 */
export function ReportFrame({ data }: { data: CaseStudy }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <figure className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
        </div>
        <p className="truncate font-mono text-[11px] text-faint">
          {data.embedUrl ? "relatório ao vivo" : data.screenshots?.length ? "capturas" : "arquitetura"} ·{" "}
          {data.id}
        </p>
      </div>

      {data.embedUrl ? (
        <div className="relative aspect-[16/10] w-full">
          <iframe
            src={data.embedUrl}
            title={`Relatório: ${data.title}`}
            loading="lazy"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      ) : data.screenshots && data.screenshots.length > 0 ? (
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {data.screenshots.map((s) => (
            // eslint-disable-next-line @next/next/no-img-element -- export estático, imagens já otimizadas
            <img key={s.src} src={`${base}${s.src}`} alt={s.alt} loading="lazy" className="w-full bg-surface" />
          ))}
        </div>
      ) : (
        <Pipeline steps={data.architecture.map((a) => a.step)} />
      )}

      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[11px] text-faint">
        {data.embedUrl || data.screenshots?.length
          ? "Dados exibidos sem identificação de estudantes."
          : "Espaço reservado para o relatório Power BI / capturas em alta resolução."}
      </figcaption>
    </figure>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="px-4 py-10 sm:px-8 sm:py-14">
      <ol className="grid gap-3 sm:grid-cols-4 sm:gap-0">
        {steps.map((step, i) => (
          <li key={step} className="relative flex items-center sm:flex-col sm:items-stretch">
            <div className="flex w-full items-center gap-3 rounded-md border border-line bg-surface-2 px-3 py-3 sm:mx-2 sm:w-auto sm:flex-col sm:items-start sm:gap-6 sm:py-4">
              <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-medium">{step}</span>
            </div>
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute top-full left-6 h-3 w-px bg-line-strong sm:top-1/2 sm:right-0 sm:left-auto sm:h-px sm:w-4 sm:translate-x-1/2"
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
