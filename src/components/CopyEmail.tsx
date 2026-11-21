"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex w-full max-w-xl items-stretch overflow-hidden rounded-lg border border-line bg-surface">
      <a
        href={`mailto:${email}`}
        className="min-w-0 flex-1 truncate px-4 py-4 font-mono text-sm text-fg transition-colors hover:text-accent sm:text-base"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        className="flex shrink-0 items-center gap-2 border-l border-line px-4 font-mono text-xs text-muted transition-colors hover:bg-surface-2 hover:text-fg"
      >
        {copied ? (
          <Check aria-hidden className="size-4 text-accent" />
        ) : (
          <Copy aria-hidden className="size-4" />
        )}
        <span aria-live="polite">{copied ? "Copiado" : "Copiar"}</span>
      </button>
    </div>
  );
}
