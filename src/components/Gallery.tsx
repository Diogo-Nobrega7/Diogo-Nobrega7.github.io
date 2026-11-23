import type { Media } from "@/content/site";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function Gallery({ media }: { media: Media }) {
  if (media.layout === "vertical") {
    return (
      <figure className="bg-surface-2/60 px-5 py-8 sm:px-8">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {media.items.map((m) => (
            <li key={m.src}>
              <div className="overflow-hidden rounded-[14px] border border-line-strong bg-bg p-1">
                {/* eslint-disable-next-line @next/next/no-img-element -- export estático; imagens já em WebP */}
                <img
                  src={`${base}${m.src}`}
                  alt={m.alt}
                  width={540}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[9/16] w-full rounded-[10px] object-cover"
                />
              </div>
              <p className="mt-2 text-center font-mono text-[11px] text-faint">{m.caption}</p>
            </li>
          ))}
        </ul>
        {media.note && <figcaption className="mt-5 font-mono text-[11px] text-faint">{media.note}</figcaption>}
      </figure>
    );
  }

  return (
    <figure className="bg-surface-2/60 px-5 py-8 sm:px-8">
      <ul className="grid gap-4 md:grid-cols-2">
        {media.items.map((m) => (
          <li key={m.src}>
            <div className="overflow-hidden rounded-md border border-line-strong bg-bg">
              <div aria-hidden className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                <span className="size-1.5 rounded-full bg-line-strong" />
                <span className="size-1.5 rounded-full bg-line-strong" />
                <span className="size-1.5 rounded-full bg-line-strong" />
              </div>
              <a
                href={`${base}${m.src}`}
                target="_blank"
                rel="noopener"
                aria-label={`Abrir em tamanho cheio: ${m.caption}`}
                className="block cursor-zoom-in"
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- export estático; imagens já em WebP */}
                <img
                  src={`${base}${m.src}`}
                  alt={m.alt}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[16/10] w-full object-cover object-top transition-opacity hover:opacity-90"
                />
              </a>
            </div>
            <p className="mt-2 font-mono text-[11px] text-faint">{m.caption}</p>
          </li>
        ))}
      </ul>
      {media.note && <figcaption className="mt-5 font-mono text-[11px] text-faint">{media.note}</figcaption>}
    </figure>
  );
}
