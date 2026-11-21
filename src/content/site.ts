/**
 * Todo o conteúdo do site fica aqui. Os componentes só leem este arquivo.
 *
 * Campos marcados com TODO precisam de um dado real seu antes de publicar.
 * Regra: nenhum número entra sem ser verdadeiro. Métricas com `value: null`
 * não aparecem no site.
 */

/** URL pública do site (sem barra no fim). Definida no build pelo workflow de deploy. */
export const siteUrl = (
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://diogo-nobrega7.github.io") + (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
).replace(/\/$/, "");

export const profile = {
  name: "Diogo Nóbrega",
  role: "Analista de Dados & Desenvolvedor de Software",
  org: "SEEC/RN · SUEP",
  orgLong:
    "Secretaria de Estado da Educação, da Cultura, do Esporte e do Lazer do Rio Grande do Norte",
  unit: "Subdiretoria de Educação Profissional e Ensino Técnico Especial",
  education: "Tecnologia da Informação · UFRN",
  location: "Rio Grande do Norte, Brasil",
  summary: [
    "Trabalho na SUEP, na SEEC/RN, entre dados e software: modelo as bases da Educação Profissional, construo os painéis em Power BI que acompanham as escolas da rede estadual e desenvolvo o Portal EPT RN.",
    "Do SQL à interface: o mesmo dado sai do banco, vira indicador e chega a quem decide.",
  ],
  email: "diogonobrega0110@gmail.com",
  links: {
    github: "https://github.com/Diogo-Nobrega7",
    linkedin: "https://www.linkedin.com/in/diogo-n%C3%B3brega-044265302/",
  },
} as const;

export type Metric = { label: string; value: string | null };

export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  title: string;
  lede: string;
  problem: string;
  architecture: { step: string; detail: string }[];
  impact: string[];
  stack: string[];
  metrics: Metric[];
  /** Power BI: URL de "Publicar na Web" ou de embed seguro. Vazio = mostra o esquema. */
  embedUrl?: string;
  /** Screenshots em /public/cases/... (anonimize dados de alunos antes). */
  screenshots?: { src: string; alt: string }[];
  link?: { label: string; href: string };
};

export const cases: CaseStudy[] = [
  {
    id: "bi-rede-estadual",
    index: "01",
    client: "SEEC/RN — SUEP",
    title: "Ecossistema de BI da rede estadual",
    lede: "Painéis em Power BI para a gestão acompanhar os indicadores das escolas de Educação Profissional do RN.",
    // TODO: rascunho meu a partir do contexto típico. Reescreva com o problema real.
    problem:
      "Acompanhar a rede de Educação Profissional exige cruzar dados de muitas escolas, vindos de fontes com formatos e periodicidades diferentes. Sem um modelo comum, cada pergunta da gestão vira um trabalho manual, e o mesmo indicador pode sair com valores diferentes.",
    architecture: [
      {
        step: "Fontes",
        detail: "Planilhas das escolas, exportações de sistemas e bases oficiais da rede.",
      },
      {
        step: "ETL",
        detail: "Limpeza e padronização em Python (pandas) e Power Query: chaves de escola, períodos e categorias únicas.",
      },
      {
        step: "Modelo",
        detail: "Tabelas fato e dimensão (escola, curso, período) e medidas DAX com definição única para cada indicador.",
      },
      {
        step: "Painéis",
        detail: "Visões por rede, regional e escola, com filtros que a gestão usa sem depender da equipe técnica.",
      },
    ],
    impact: [
      "Um número oficial por indicador, com a mesma definição em todos os painéis.",
      "A gestão consulta a situação de cada escola direto no painel.",
      "Atualização repetível: o mesmo tratamento roda a cada nova carga de dados.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python", "pandas", "SQL"],
    // TODO: preencha só com números reais (ex.: "12"). null = não aparece.
    metrics: [
      { label: "Painéis em produção", value: null },
      { label: "Escolas monitoradas", value: null },
      { label: "Indicadores definidos", value: null },
    ],
    embedUrl: "",
    screenshots: [],
  },
  {
    id: "portal-ept-rn",
    index: "02",
    client: "SEEC/RN — SUEP",
    title: "Portal EPT RN",
    lede: "O portal da Educação Profissional e Tecnológica do RN: cursos, escolas e informação institucional num só endereço.",
    // TODO: rascunho meu a partir do contexto típico. Reescreva com o problema real.
    problem:
      "Estudantes e famílias precisam de um lugar único para descobrir quais cursos técnicos existem, em que escola e como entrar, e a gestão precisa de um canal oficial para comunicar a Educação Profissional da rede.",
    architecture: [
      {
        step: "Conteúdo",
        detail: "Estrutura de informação por público: estudante, família e gestor escolar.",
      },
      {
        step: "Interface",
        detail: "Layout mobile-first, porque a maior parte do público chega pelo celular.",
      },
      {
        step: "Dados",
        detail: "Catálogo de cursos e escolas mantido como dado estruturado, não como texto solto em página.",
      },
      {
        step: "Entrega",
        detail: "Publicação institucional sob a SEEC/RN.",
      },
    ],
    impact: [
      "Um endereço oficial para a Educação Profissional da rede.",
      "Estudante encontra curso e escola em poucos toques no celular.",
    ],
    // TODO: coloque a stack real do portal (ex.: "Next.js", "WordPress", "PHP"...).
    stack: [],
    metrics: [],
    // TODO: URL pública do portal.
    link: undefined,
  },
];

export type Project = {
  name: string;
  /** Vazio = repositório privado (o card não leva a uma página 404). */
  repo?: string;
  language: string;
  domain: string;
  summary: string;
  details: string[];
  tags: string[];
  featured?: boolean;
  /** Ocupa 2 colunas no desktop (fecha buracos da grade). */
  wide?: boolean;
  live?: string;
};

/** Curadoria a partir dos repositórios públicos de github.com/Diogo-Nobrega7 (lidos em 21/11/2026). */
export const projects: Project[] = [
  {
    name: "monte-trip-2028",
    repo: "https://github.com/Diogo-Nobrega7/monte-trip-2028",
    live: "https://diogo-nobrega7.github.io/monte-trip-2028/",
    language: "TypeScript",
    domain: "Web · Banco de dados",
    summary:
      "Gestão financeira da viagem de formatura de uma turma: mensalidades, arrecadações, despesas com comprovante e prestação de contas pública.",
    details: [
      "Lançamentos financeiros imutáveis: correção só por estorno, validado por gatilho no Postgres.",
      "Permissões no banco (RLS + funções por papel); a interface só esconde botões.",
      "Valores em centavos (bigint), idempotency key por formulário e auditoria antes/depois por trigger.",
      "Mesma regra de parcelas em SQL e em TypeScript, com os mesmos cenários de teste nos dois lados.",
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "RLS", "Vitest"],
    featured: true,
  },
  {
    name: "lojadoseuzebd",
    repo: "https://github.com/lazarobo/lojadoseuzebd",
    language: "SQL",
    domain: "Banco de dados",
    summary:
      "Modelagem relacional de uma loja varejista em PostgreSQL: vendas, estoque, fornecedores e lucro real.",
    details: [
      "Compra como entidade associativa entre fornecedor e produto, guardando o custo histórico.",
      "Preço gravado no item da venda para preservar o histórico quando o cadastro muda.",
      "CTEs para lucro líquido e margem por produto.",
    ],
    tags: ["PostgreSQL", "Modelagem ER", "CTE", "Jupyter"],
  },
  {
    name: "operacao-videos-ia",
    language: "Python",
    domain: "IA · Automação",
    summary:
      "Pipeline de produção de vídeos curtos orquestrado por 13 agentes Claude, do roteiro à publicação.",
    details: [
      "Cada agente tem função e regras próprias; uma IA cria, outra revisa.",
      "Fato surpreendente só passa com duas fontes independentes.",
      "Nada publica sem aprovação humana; pauta e métricas no Notion.",
    ],
    tags: ["Claude", "Multiagente", "Python", "Notion API"],
  },
  {
    name: "Processos-e-Threads",
    repo: "https://github.com/Diogo-Nobrega7/Processos-e-Threads",
    language: "C",
    domain: "Sistemas operacionais",
    summary:
      "Multiplicação de matrizes em três versões — sequencial, processos e threads — para comparar tempo de execução.",
    details: [
      "Processos com fork/wait e divisão do resultado em segmentos de P elementos.",
      "Threads POSIX (pthreads) repartindo o mesmo trabalho em memória compartilhada.",
    ],
    tags: ["C", "pthreads", "fork", "Concorrência"],
    wide: true,
  },
  {
    name: "ArvoresEDB",
    repo: "https://github.com/Diogo-Nobrega7/ArvoresEDB",
    language: "Python",
    domain: "Estruturas de dados",
    summary:
      "Árvore AVL e Rubro-Negra com inserção, remoção, busca e impressão em pré-ordem, só com a biblioteca padrão.",
    details: ["Rebalanceamento por altura (AVL) e por cor (Rubro-Negra) lado a lado."],
    tags: ["Python", "AVL", "Rubro-Negra"],
  },
  {
    name: "Plano-de-vida",
    repo: "https://github.com/Diogo-Nobrega7/Plano-de-vida",
    language: "TypeScript",
    domain: "Web",
    summary:
      "Painel de estudos para o ENEM com plano do dia, revisão espaçada, correção de redação e simulador financeiro.",
    details: [
      "Cálculos puros com testes (juros, IR, gamificação) separados da interface.",
      "Funciona em modo local, sem backend, ou com Supabase.",
    ],
    tags: ["React", "Vite", "Tailwind", "Supabase"],
  },
  {
    name: "DadosLista",
    repo: "https://github.com/Diogo-Nobrega7/DadosLista",
    language: "Java",
    domain: "Estruturas de dados",
    summary:
      "Listas encadeadas em Java aplicadas a casos reais, com a justificativa de cada escolha de estrutura.",
    details: ["Fila simples, playlist circular dupla, rodízio circular e desfazer/refazer."],
    tags: ["Java", "Listas encadeadas"],
  },
  {
    name: "Sistema-Bancario-Simples",
    repo: "https://github.com/Diogo-Nobrega7/Sistema-Bancario-Simples",
    language: "C++",
    domain: "Orientação a objetos",
    summary:
      "Contas e clientes em C++ com headers separados, depósito, saque e transferência com sobrecarga.",
    details: [],
    tags: ["C++", "POO"],
  },
];

export const stack: { domain: string; note: string; items: string[] }[] = [
  {
    domain: "Engenharia de Dados & BI",
    note: "Onde passo a maior parte do tempo.",
    items: ["Power BI", "DAX", "Power Query", "Python", "pandas", "scikit-learn", "SQL", "PostgreSQL", "Modelagem dimensional"],
  },
  {
    domain: "Back-end & Web",
    note: "Regra de negócio perto do dado.",
    items: ["TypeScript", "React", "Next.js", "Vite", "Tailwind CSS", "Supabase", "Row Level Security", "Java", "C", "C++"],
  },
  {
    domain: "Infraestrutura & Ferramentas",
    note: "O que segura o resto de pé.",
    items: ["Git", "GitHub Pages", "Vitest", "Playwright", "Linux", "Jupyter", "Notion API", "Claude (agentes)"],
  },
];
