/**
 * Todo o conteúdo do site fica aqui. Os componentes só leem este arquivo.
 * Fonte: currículo 2026 e repositórios do GitHub. Regra: nenhum número entra sem ser verdadeiro.
 */

/** URL pública do site (sem barra no fim). Definida no build pelo workflow de deploy. */
export const siteUrl = (
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://diogo-nobrega7.github.io") + (process.env.NEXT_PUBLIC_BASE_PATH ?? "")
).replace(/\/$/, "");

export const profile = {
  name: "Diogo Nóbrega",
  role: "Analista de Dados & Desenvolvedor",
  org: "SEEC/RN · SUEP",
  orgLong:
    "Secretaria de Estado da Educação, da Cultura, do Esporte e do Lazer do Rio Grande do Norte",
  position: "Estagiário de TI · Análise de Dados",
  since: "2026 – hoje",
  education: "Bacharelado em TI · UFRN",
  educationDetail: "6º período · 2024–2027",
  location: "Natal, RN",
  languages: "Inglês fluente · Espanhol intermediário",
  availability: "Aberto a oportunidades como Analista de Dados",
  summary: [
    "Estudante de TI na UFRN e estagiário de análise de dados na SEEC/RN. Transformo as planilhas de monitoramento da educação profissional em bases prontas para análise e em painéis de Power BI que a SUEP usa para planejar a rede estadual.",
    "Também desenvolvo sites e plataformas web e crio agentes de IA que automatizam processos.",
  ],
  email: "diogonobrega0110@gmail.com",
  links: {
    github: "https://github.com/Diogo-Nobrega7",
    linkedin: "https://www.linkedin.com/in/diogo-n%C3%B3brega-044265302/",
  },
} as const;

export type CaseStudy = {
  id: string;
  index: string;
  client: string;
  title: string;
  lede: string;
  problem: string;
  architecture: { step: string; detail: string }[];
  /** Entregas concretas (ex.: cada painel). */
  deliverables?: { name: string; detail: string; badge?: string }[];
  impact: string[];
  stack: string[];
  /** Power BI: URL de "Publicar na Web". Vazio = mostra o esquema do pipeline. */
  embedUrl?: string;
  /** Capturas em /public/cases/... (sem dados de estudantes). */
  screenshots?: { src: string; alt: string }[];
  link?: { label: string; href: string };
};

export const cases: CaseStudy[] = [
  {
    id: "bi-rede-estadual",
    index: "01",
    client: "SEEC/RN — SUEP",
    title: "Dados e painéis da Educação Profissional",
    lede: "Bases tratadas e painéis em Power BI para a SUEP acompanhar as escolas técnicas da rede estadual do RN.",
    problem:
      "Os dados sobre professores, turmas e matrículas do ensino técnico chegavam em planilhas de monitoramento, feitas para preencher e não para analisar. Para planejar, a secretaria precisava ver a rede inteira e saber quais escolas pedem atenção.",
    architecture: [
      {
        step: "Fontes",
        detail: "Planilhas de monitoramento sobre professores, turmas e matrículas do ensino técnico.",
      },
      {
        step: "Tratamento",
        detail: "Scripts em Python que convertem as planilhas em bases prontas para análise.",
      },
      {
        step: "Modelo",
        detail: "Modelagem de dados no Power BI e medidas em DAX para cada indicador.",
      },
      {
        step: "Painéis",
        detail: "Filtros por DIREC, município e curso, com formatação condicional nas escolas que precisam de atenção.",
      },
    ],
    deliverables: [
      {
        name: "Visitas técnicas",
        detail: "Acompanhamento das visitas técnicas às unidades da rede.",
        badge: "publicado na web",
      },
      {
        name: "Indicadores de qualidade",
        detail: "Aprovação, retenção e evasão das escolas técnicas, com SAEB e IDEB.",
      },
    ],
    impact: [
      "As escolas que precisam de atenção aparecem destacadas, sem cruzar planilhas à mão.",
      "Os indicadores de qualidade ficam num só lugar, filtráveis por DIREC, município e curso.",
      "Métricas mapeadas para apoiar o planejamento educacional da secretaria.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Python", "SQL", "Excel"],
    // Cole aqui o link "Publicar na Web" do painel de visitas técnicas para ele aparecer embutido.
    embedUrl: "",
    screenshots: [],
  },
  {
    id: "portal-ept-rn",
    index: "02",
    client: "SEEC/RN — SUEP",
    title: "Portal da Rede Estadual de EPT do RN",
    lede: "O portal oficial da SUEP para a educação profissional e tecnológica do estado, com todas as escolas de ensino técnico da rede.",
    problem:
      "Estudantes e famílias precisavam de um lugar único para conhecer as escolas de ensino técnico da rede estadual, e a SUEP precisava de um canal oficial para a educação profissional do RN.",
    architecture: [
      { step: "Conteúdo", detail: "Todas as escolas de ensino técnico da rede estadual, distribuídas em várias páginas." },
      { step: "Navegação", detail: "Caminhos simples, pensados para quem não é da área técnica." },
      { step: "Layout", detail: "Responsivo: se adapta ao computador e ao celular." },
      { step: "Tecnologia", detail: "HTML, CSS e JavaScript, sem dependências pesadas." },
    ],
    impact: [
      "Um endereço oficial para a educação profissional e tecnológica do RN.",
      "Todas as escolas técnicas da rede reunidas num só lugar.",
      "Uso fácil no computador e no celular.",
    ],
    stack: ["HTML", "CSS", "JavaScript"],
    // Cole aqui a URL pública do portal.
    link: undefined,
  },
];

export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  kind: string;
  status?: string;
  context: string;
  features: string[];
  engineering: string[];
  stack: string[];
  live?: { label: string; href: string };
  /** Imagens em /public/projetos. "telas" = capturas de interface; "vertical" = quadros 9:16. */
  media?: {
    layout: "telas" | "vertical";
    note: string;
    items: { src: string; alt: string; caption: string }[];
  };
};

/** Projetos próprios, fora da SUEP. Sem link para código: o foco é o que o sistema faz e como foi pensado. */
export const projects: Project[] = [
  {
    id: "monte-trip",
    index: "01",
    name: "Monte Trip 2028",
    tagline: "A gestão financeira da viagem de formatura de uma turma, com prestação de contas aberta.",
    kind: "Sistema web · Gestão financeira",
    context:
      "Uma turma do 3º ano junta dinheiro para a viagem de formatura. Mensalidades, ações de arrecadação, despesas e rendimentos precisavam de controle confiável e de transparência para alunos, famílias e professor.",
    features: [
      "Mensalidades com vencimento, pagamento parcial e adicional por atraso.",
      "Arrecadações, despesas com comprovante e rendimentos num livro-caixa único.",
      "Página pública com os totais, sem expor dados de nenhum aluno.",
      "Prestação de contas em CSV e PDF, importação de planilhas e backup.",
      "Perfis separados: administrador, professor supervisor e visitante.",
    ],
    engineering: [
      "Dinheiro imutável: nada é apagado ou editado; corrigir é estornar, e o banco valida o estorno.",
      "Permissões garantidas no próprio Postgres (RLS e funções por papel), não só na tela.",
      "Valores em centavos e chave de idempotência: sem erro de arredondamento nem lançamento duplicado.",
      "Auditoria automática com antes/depois de cada alteração.",
      "A regra das parcelas existe em SQL e em TypeScript, testada com os mesmos cenários nos dois lados.",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vitest", "GitHub Pages"],
    live: { label: "Ver o site", href: "https://diogo-nobrega7.github.io/monte-trip-2028/" },
    media: {
      layout: "telas",
      note: "Capturas em modo demonstração, sem dados de alunos.",
      items: [
        { src: "/projetos/monte-painel.webp", alt: "Painel do Monte Trip com saldo da turma, meta e evolução financeira", caption: "Painel da turma" },
        { src: "/projetos/monte-simulador.webp", alt: "Simulador do Monte Trip com parâmetros e projeção do saldo", caption: "Simulador de arrecadação" },
      ],
    },
  },
  {
    id: "rumo",
    index: "02",
    name: "Rumo · Plano de Vida",
    tagline: "Um painel de estudos e vida para quem está se preparando para o ENEM.",
    kind: "Aplicação web · Educação",
    context:
      "Estudar para o ENEM envolve cronograma, revisão, redação, simulados e ainda planejar o futuro. A ideia foi reunir tudo num só lugar e transformar a constância em hábito.",
    features: [
      "Plano do dia com contagem para o ENEM, metas e sequência de dias estudados.",
      "Cronograma semanal, aulas com Modo Foco e Pomodoro, simulados e metas no SISU.",
      "Revisão espaçada com flashcards a partir dos próprios erros.",
      "Redação com pré-análise pelas competências C1–C5 e pedido de correção ao Claude.",
      "Finanças e carreira: simulador de investimentos com IR, salário líquido e comparador de carreiras.",
    ],
    engineering: [
      "Cálculos (juros, impostos, nota de redação, XP) isolados em funções puras e cobertos por testes.",
      "Um único módulo fala com o banco; o resto da aplicação não conhece o Supabase.",
      "Funciona em modo local, só no navegador, ou sincronizado com o Supabase.",
      "Gamificação (XP, nível, missões e conquistas) para manter a constância.",
    ],
    stack: ["React", "TypeScript", "Vite", "Tailwind", "Supabase"],
    media: {
      layout: "telas",
      note: "Capturas em modo local, com perfil fictício.",
      items: [
        { src: "/projetos/rumo-hoje.webp", alt: "Tela Hoje do Rumo com plano do dia, missões e contagem para o ENEM", caption: "Hoje: plano do dia e missões" },
        { src: "/projetos/rumo-redacao.webp", alt: "Tela de redação do Rumo com correção pelas competências C1 a C5", caption: "Redação: correção C1–C5" },
      ],
    },
  },
  {
    id: "operacao-videos",
    index: "03",
    name: "Operação Vídeos com IA",
    tagline: "Uma fábrica de vídeos curtos de ciência e história em que agentes de IA fazem o trabalho e um humano aprova.",
    kind: "Automação · IA multiagente",
    status: "Em construção · fase de pilotos",
    context:
      "Produzir vídeos curtos com regularidade, em duas marcas, dois idiomas e três plataformas, sem cair em conteúdo repetitivo nem publicar informação errada.",
    features: [
      "13 agentes com funções definidas: tendências, roteiro, checagem de fatos, adaptação para inglês, narração, edição, revisão, publicação e métricas.",
      "Pauta, banco de ganchos, contas e métricas organizados em 7 bases no Notion.",
      "Vídeos 9:16 renderizados a partir de HTML/SVG animado, com narração sincronizada às legendas.",
      "Fluxos que levam o público a infoprodutos (ebook e curso) e reduzem o trabalho manual de produção.",
    ],
    engineering: [
      "Uma IA cria e outra revisa; um fato surpreendente só passa com duas fontes independentes.",
      "Cada função tem uma ordem de provedores (Claude, Gemini, Perplexity, GPT, ElevenLabs) com plano B automático.",
      "Nada vai ao ar sem a etapa de revisão humana.",
      "A narração é o relógio: as pausas da voz definem o tempo de cada cena e legenda.",
    ],
    stack: ["Claude", "Python", "Notion API", "HyperFrames", "FFmpeg", "Node.js"],
    media: {
      layout: "vertical",
      note: "Quadros de vídeos produzidos na fase de pilotos. As fontes aparecem no próprio vídeo.",
      items: [
        { src: "/projetos/video-agua-viva.webp", alt: "Quadro de vídeo: água-viva em cartoon com o texto 'Em vez de morrer, volta a ser bebê'", caption: "Água-viva imortal" },
        { src: "/projetos/video-estrela-neutrons.webp", alt: "Quadro de vídeo: balança com um cubinho e muitas pessoas, texto '1 cubinho > 2x a humanidade'", caption: "Estrela de nêutrons" },
        { src: "/projetos/video-alasca.webp", alt: "Quadro de vídeo: mapa do Alasca com countryballs da Rússia e dos EUA, texto '1867'", caption: "A venda do Alasca" },
        { src: "/projetos/video-polvo.webp", alt: "Quadro de vídeo: polvo em cartoon com comparações 'Polvo: cobre, Humano: ferro'", caption: "Os três corações do polvo" },
      ],
    },
  },
];

export const stack: { domain: string; note: string; items: string[] }[] = [
  {
    domain: "Dados & BI",
    note: "Onde passo a maior parte do tempo.",
    items: ["Power BI", "DAX", "Power Query", "Python", "pandas", "SQL", "Excel avançado", "Modelagem de dados"],
  },
  {
    domain: "Bancos de dados",
    note: "Regra de negócio perto do dado.",
    items: ["PostgreSQL", "MySQL", "Oracle", "Supabase", "Row Level Security"],
  },
  {
    domain: "Desenvolvimento",
    note: "Do site institucional à aplicação completa.",
    items: ["TypeScript", "JavaScript", "React", "HTML", "CSS", "Tailwind CSS", "C++", "C99"],
  },
  {
    domain: "IA & Ferramentas",
    note: "Automação e o que segura o resto de pé.",
    items: ["LLMs", "Agentes de IA", "Claude", "Notion API", "Git", "GitHub", "Vitest"],
  },
];

export const education: { title: string; org: string; period: string }[] = [
  { title: "Bacharelado em Tecnologia da Informação", org: "UFRN", period: "2024 – 2027" },
  { title: "Google Data Analytics Professional Certificate", org: "Google", period: "2026" },
  { title: "CS50x — Introdução à Ciência da Computação", org: "HarvardX", period: "2025" },
  { title: "SQL para Análise de Dados", org: "Udemy", period: "2025" },
  { title: "Língua Inglesa (curso completo)", org: "Senac RN", period: "2017 – 2020" },
];
