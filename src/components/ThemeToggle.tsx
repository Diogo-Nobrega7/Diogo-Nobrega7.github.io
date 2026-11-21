"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* navegação privada: o tema só não fica salvo */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      className="grid size-8 place-items-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {/* Os dois ícones existem no HTML; o CSS mostra o certo, então não há flash nem hidratação diferente. */}
      <Sun aria-hidden className="hidden size-4 dark:block" />
      <Moon aria-hidden className="block size-4 dark:hidden" />
    </button>
  );
}
