import { locales } from "@/src/i18n/config"

export type AppLocale = (typeof locales)[number]

export interface ProjectCaseJourneyItem {
  label: string
  description: string
}

export interface ProjectCaseContent {
  title: string
  summary: string
  intro: string
  sector: string
  scope: string
  role: string
  format: string
  year: string
  audience: string
  objective: string
  challenge: string
  context: string
  direction: string
  system: string
  experience: string
  capabilities: string[]
  journey: ProjectCaseJourneyItem[]
  differentiators: string[]
  deliverables: string[]
  stack: string[]
  notes: string[]
  quote: string
  closing: string
}

export interface ProjectCaseRecord {
  id: "aparecaEVenda" | "powervet" | "horizonTravels"
  slug: string
  image: string
  liveUrl: string
  theme: {
    accent: string
    glow: string
    panel: string
    typeface: string
    mood: [string, string, string]
    palette: [
      {
        hex: string
        label: string
      },
      {
        hex: string
        label: string
      },
      {
        hex: string
        label: string
      },
    ]
  }
  content: Record<AppLocale, ProjectCaseContent>
}

export const projectCases: readonly ProjectCaseRecord[] = [
  {
    id: "aparecaEVenda",
    slug: "apareca-e-venda",
    image: "/projects/thais.png",
    liveUrl: "https://aparecaevenda.com.br",
    theme: {
      accent: "from-[#ff7a18] via-[#ff8f3f] to-[#ffb36b]",
      glow: "shadow-[0_0_140px_rgba(255,138,61,0.28)]",
      panel: "bg-[#16110d]",
      typeface: "Lexend / Montserrat",
      mood: ["Contraste alto", "Ritmo comercial", "Calor visual"],
      palette: [
        { label: "Primary", hex: "#FF7A18" },
        { label: "Accent", hex: "#FFB36B" },
        { label: "Surface", hex: "#16110D" },
      ],
    },
    content: {
      pt: {
        title: "Apareça e venda",
        summary:
          "Uma landing page pensada para transformar posicionamento em clareza comercial, com hierarquia forte, ritmo visual e uma chamada direta para ação.",
        intro:
          "Este projeto foi desenvolvido para demonstrar como a MAGUI estrutura páginas que precisam vender percepção antes de vender oferta. A direção parte de contraste alto, copy objetiva e blocos que sustentam leitura rápida sem perder sofisticação.",
        sector: "Posicionamento digital",
        scope: "Landing page estratégica",
        role: "Direção visual, interface e front-end",
        format: "Landing page de aquisição",
        year: "2026",
        audience: "Especialistas, consultores e marcas pessoais",
        objective:
          "Transformar uma oferta consultiva em uma página que organiza valor, diferenciação e urgência de contato logo nos primeiros blocos.",
        challenge:
          "Criar pressão comercial sem parecer genérico, equilibrando desejo, objetividade e leitura fluida em uma estrutura curta.",
        context:
          "O ponto de partida foi uma página que precisasse comunicar autoridade logo no primeiro impacto, sem depender de excesso de elementos ou de argumentação longa demais para gerar interesse.",
        direction:
          "A direção visual foi construída com massa tipográfica forte, contraste quente e cortes gráficos mais agressivos para passar energia comercial, objetividade e presença.",
        system:
          "A estrutura foi organizada em blocos claros de promessa, benefício, prova de leitura e CTA. Cada seção foi desenhada para manter cadência e reduzir fricção até o contato.",
        experience:
          "A experiência foi desenhada como uma leitura de decisão rápida: impacto inicial, entendimento do valor, reforço de confiança e estímulo direto para avançar ao briefing.",
        capabilities: [
          "Abre com uma proposta visual forte para elevar percepção em poucos segundos.",
          "Conduz a leitura com blocos curtos, contraste alto e ritmo tipográfico controlado.",
          "Reduz fricção comercial ao deixar a promessa e a ação principal sempre evidentes.",
          "Mantém a página pronta para campanhas, tráfego pago e captação orientada a performance.",
        ],
        journey: [
          {
            label: "Impacto",
            description:
              "A primeira dobra trabalha presença, promessa e tom visual para fazer a página parecer valiosa antes mesmo da leitura completa.",
          },
          {
            label: "Clareza",
            description:
              "Os blocos seguintes explicam o que está sendo oferecido sem diluir energia, preservando escaneabilidade e foco comercial.",
          },
          {
            label: "Convicção",
            description:
              "A página intercala benefício e direção visual para reforçar segurança e transformar interesse em intenção.",
          },
          {
            label: "Ação",
            description:
              "O encerramento puxa o usuário para o próximo passo com CTA dominante e sem concorrência visual desnecessária.",
          },
        ],
        differentiators: [
          "Hierarquia pensada para campanhas e decisões rápidas.",
          "Estética quente e assertiva para reforçar valor percebido.",
          "Estrutura pronta para crescer com novas provas e blocos comerciais.",
        ],
        deliverables: [
          "Arquitetura visual da landing",
          "Interface responsiva para desktop e mobile",
          "Direção de hierarquia e ritmo de conteúdo",
          "Implementação em Next.js com foco em performance",
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
        notes: [
          "Leitura direta com seções de decisão rápida",
          "Tipografia e contraste desenhados para percepção de valor",
          "Estrutura preparada para campanhas e aquisição",
        ],
        quote:
          "Uma página curta pode parecer muito maior quando cada dobra aumenta a convicção de quem lê.",
        closing:
          "O projeto mostra como direção visual e estrutura comercial podem trabalhar juntas para transformar uma landing em um ativo de percepção e conversão.",
      },
      en: {
        title: "Apareça e venda",
        summary:
          "A landing page was designed to turn positioning into commercial clarity, with strong hierarchy, visual rhythm, and a direct call to action.",
        intro:
          "This project was built to demonstrate how MAGUI structures pages that need to sell perception before they sell the offer itself. The direction starts with high contrast, concise copy, and sections that support quick reading without losing sophistication.",
        sector: "Digital positioning",
        scope: "Strategic landing page",
        role: "Visual direction, interface, and front-end",
        format: "Acquisition landing page",
        year: "2026",
        audience: "Specialists, consultants, and personal brands",
        objective:
          "Turn a consulting offer into a page that organizes value, differentiation, and urgency within the first few sections.",
        challenge:
          "Create commercial tension without feeling generic, balancing desire, objectivity, and fluid reading in a short structure.",
        context:
          "The starting point was a page that needed to communicate authority on first impact without depending on visual excess or overly long argumentation to create interest.",
        direction:
          "The visual direction was built with dense typography, warm contrast, and sharper graphic cuts to convey commercial energy, objectivity, and presence.",
        system:
          "The structure was organized into clear blocks of promise, benefit, reading proof, and CTA. Every section was designed to preserve cadence and reduce friction toward contact.",
        experience:
          "The experience was designed as a quick-decision reading flow: initial impact, value understanding, trust reinforcement, and a direct push toward the brief.",
        capabilities: [
          "Opens with a strong visual proposition that elevates perceived value within seconds.",
          "Guides reading through short sections, high contrast, and controlled typographic rhythm.",
          "Reduces commercial friction by keeping the promise and primary action clearly visible.",
          "Keeps the page ready for campaigns, paid traffic, and performance-oriented lead capture.",
        ],
        journey: [
          {
            label: "Impact",
            description:
              "The first fold works on presence, promise, and visual tone so the page feels valuable before the full reading even starts.",
          },
          {
            label: "Clarity",
            description:
              "The following blocks explain the offer without losing momentum, preserving scannability and commercial focus.",
          },
          {
            label: "Conviction",
            description:
              "The page alternates benefit and visual direction to reinforce confidence and turn attention into intent.",
          },
          {
            label: "Action",
            description:
              "The closing section drives the user toward the next step with a dominant CTA and no unnecessary visual competition.",
          },
        ],
        differentiators: [
          "Hierarchy shaped for campaigns and fast decisions.",
          "Warm, assertive aesthetics that reinforce perceived value.",
          "A structure ready to grow with new proof points and commercial blocks.",
        ],
        deliverables: [
          "Landing page visual architecture",
          "Responsive interface for desktop and mobile",
          "Hierarchy and content rhythm direction",
          "Next.js implementation focused on performance",
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
        ],
        notes: [
          "Direct reading flow with quick decision sections",
          "Typography and contrast shaped for perceived value",
          "Structure prepared for campaigns and acquisition",
        ],
        quote:
          "A short page can feel much larger when each fold increases the reader's conviction.",
        closing:
          "This project shows how visual direction and commercial structure can work together to turn a landing page into both a perception and conversion asset.",
      },
    },
  },
  {
    id: "powervet",
    slug: "powervet",
    image: "/projects/powervet.png",
    liveUrl: "https://powervet.com.br",
    theme: {
      accent: "from-[#4f46e5] via-[#2563eb] to-[#38bdf8]",
      glow: "shadow-[0_0_140px_rgba(59,130,246,0.24)]",
      panel: "bg-[#0b1220]",
      typeface: "Lexend / Montserrat",
      mood: [
        "Precisão técnica",
        "Confiança institucional",
        "Respiro controlado",
      ],
      palette: [
        { label: "Primary", hex: "#4F46E5" },
        { label: "Accent", hex: "#38BDF8" },
        { label: "Surface", hex: "#0B1220" },
      ],
    },
    content: {
      pt: {
        title: "Powervet",
        summary:
          "Uma interface criada para um universo técnico e confiável, equilibrando clareza institucional, linguagem de produto e uma apresentação visual mais precisa.",
        intro:
          "A proposta do projeto foi construir uma presença digital com tom mais sólido e profissional, capaz de organizar informação técnica sem parecer fria ou burocrática. O foco esteve em precisão visual, confiança e leitura objetiva.",
        sector: "Saúde animal",
        scope: "Site institucional de produto",
        role: "Estrutura, direção visual e interface",
        format: "Site institucional com produto",
        year: "2026",
        audience: "Distribuidores, clínicas e parceiros comerciais",
        objective:
          "Apresentar uma marca com densidade técnica de forma mais clara, confiável e visualmente controlada, sem cair em uma estética corporativa pesada.",
        challenge:
          "Traduzir repertório técnico em entendimento rápido, preservando credibilidade, proximidade e leitura confortável para públicos diferentes.",
        context:
          "O desafio central era apresentar uma marca com repertório técnico de forma segura e clara, sem transformar a experiência em algo pesado ou excessivamente corporativo.",
        direction:
          "A linguagem visual seguiu um caminho mais controlado, com fundo escuro, acentos frios e composição limpa para reforçar competência, rigor e consistência.",
        system:
          "O sistema distribui informação em níveis bem definidos, alternando áreas de impacto visual com blocos de leitura mais racional para manter equilíbrio entre branding e compreensão.",
        experience:
          "A experiência foi construída para alternar segurança institucional e entendimento do produto, usando hierarquia estável, boa escaneabilidade e poucos ruídos visuais.",
        capabilities: [
          "Organiza conteúdo técnico em camadas claras para evitar sobrecarga de leitura.",
          "Equilibra linguagem institucional e apresentação de produto dentro da mesma narrativa.",
          "Usa contraste e respiro para gerar confiança sem ficar frio demais.",
          "Entrega uma base preparada para evolução de catálogo, materiais e expansão de páginas.",
        ],
        journey: [
          {
            label: "Marca",
            description:
              "A abertura trabalha credibilidade e posicionamento para preparar a leitura do restante da experiência.",
          },
          {
            label: "Produto",
            description:
              "As áreas centrais distribuem informações de forma técnica, mas com ritmo e hierarquia que evitam cansaço visual.",
          },
          {
            label: "Confiança",
            description:
              "A interface sustenta competência com um visual mais contido, seguro e consistente em toda a composição.",
          },
          {
            label: "Continuidade",
            description:
              "A página foi pensada para escalar bem com novos blocos, extensões institucionais e aprofundamento de linha.",
          },
        ],
        differentiators: [
          "Tom visual técnico sem rigidez excessiva.",
          "Boa leitura para públicos institucionais e comerciais.",
          "Base preparada para desdobramentos mais amplos da marca.",
        ],
        deliverables: [
          "Página principal institucional",
          "Sistema visual para apresentação de produto",
          "Composição para leitura técnica mais fluida",
          "Interface adaptada para diferentes larguras de tela",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
        notes: [
          "Tom visual mais confiável e controlado",
          "Organização de conteúdo técnico com boa escaneabilidade",
          "Direção pensada para marca, produto e contexto institucional",
        ],
        quote:
          "Quando a informação técnica ganha hierarquia e respiro, a confiança vem antes do esforço de leitura.",
        closing:
          "Powervet demonstra como um projeto institucional pode ser preciso, estável e elegante ao mesmo tempo, sem perder clareza nem presença de marca.",
      },
      en: {
        title: "Powervet",
        summary:
          "The interface was created for a technical and trustworthy space, balancing institutional clarity, product language, and a more precise visual presentation.",
        intro:
          "The goal of this project was to build a stronger, more professional digital presence capable of organizing technical information without feeling cold or bureaucratic. The focus stayed on visual precision, trust, and objective reading.",
        sector: "Animal health",
        scope: "Institutional product website",
        role: "Structure, visual direction, and interface",
        format: "Institutional website with product narrative",
        year: "2026",
        audience: "Distributors, clinics, and commercial partners",
        objective:
          "Present a technically grounded brand with more clarity, trust, and visual control without falling into a heavy corporate aesthetic.",
        challenge:
          "Translate technical depth into quick understanding while preserving credibility, proximity, and comfortable reading for different audiences.",
        context:
          "The core challenge was to present a technically grounded brand in a clear and safe way without turning the experience heavy or excessively corporate.",
        direction:
          "The visual language followed a more controlled route, with dark backgrounds, cool accents, and clean composition to reinforce competence, rigor, and consistency.",
        system:
          "The system distributes information across clearly defined levels, alternating high-impact visual areas with more rational reading blocks to balance branding and comprehension.",
        experience:
          "The experience was structured to alternate institutional confidence and product understanding through stable hierarchy, strong scannability, and very little visual noise.",
        capabilities: [
          "Organizes technical content in clear layers to avoid reading overload.",
          "Balances institutional language and product presentation within the same narrative.",
          "Uses contrast and breathing room to build trust without feeling too cold.",
          "Provides a foundation ready for catalog growth, new materials, and additional pages.",
        ],
        journey: [
          {
            label: "Brand",
            description:
              "The opening establishes credibility and positioning to frame the rest of the experience.",
          },
          {
            label: "Product",
            description:
              "The core sections distribute information in a technical but paced structure that avoids visual fatigue.",
          },
          {
            label: "Trust",
            description:
              "The interface sustains competence through a more restrained, safe, and consistent visual language.",
          },
          {
            label: "Continuity",
            description:
              "The page was designed to scale well with new sections, institutional extensions, and deeper product lines.",
          },
        ],
        differentiators: [
          "A technical visual tone without excessive stiffness.",
          "Strong reading flow for institutional and commercial audiences.",
          "A foundation prepared for broader brand expansion.",
        ],
        deliverables: [
          "Institutional homepage",
          "Visual system for product presentation",
          "Composition designed for more fluid technical reading",
          "Interface adapted for multiple screen widths",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
        notes: [
          "A more trustworthy and controlled visual tone",
          "Technical content organized with strong scannability",
          "Direction designed for brand, product, and institutional context",
        ],
        quote:
          "When technical information gains hierarchy and breathing room, trust arrives before the effort of reading.",
        closing:
          "Powervet shows how an institutional project can be precise, stable, and elegant at the same time without losing clarity or brand presence.",
      },
    },
  },
  {
    id: "horizonTravels",
    slug: "horizon-travels",
    image: "/projects/horizon.png",
    liveUrl: "https://horizontravels.com.br",
    theme: {
      accent: "from-[#0f766e] via-[#14b8a6] to-[#7dd3fc]",
      glow: "shadow-[0_0_140px_rgba(20,184,166,0.22)]",
      panel: "bg-[#071918]",
      typeface: "Syne / Montserrat",
      mood: ["Atmosfera editorial", "Cadência visual", "Desejo aspiracional"],
      palette: [
        { label: "Primary", hex: "#0F766E" },
        { label: "Accent", hex: "#7DD3FC" },
        { label: "Surface", hex: "#071918" },
      ],
    },
    content: {
      pt: {
        title: "Horizon Travels",
        summary:
          "Uma página com atmosfera editorial e foco aspiracional, criada para demonstrar como viagem, desejo e sofisticação podem conviver com leitura clara e navegação objetiva.",
        intro:
          "Este projeto explora um território mais sensorial. A intenção foi desenhar uma experiência que transmitisse escapismo, curadoria e valor percebido, sem cair em layouts genéricos de turismo ou em excesso de informação.",
        sector: "Viagens e experiência",
        scope: "Landing page de marca",
        role: "Conceito visual, interface e composição",
        format: "Landing page editorial",
        year: "2026",
        audience: "Público aspiracional e viajantes premium",
        objective:
          "Construir uma presença digital que desperte desejo e percepção de curadoria, sem sacrificar clareza, leitura ou intenção comercial.",
        challenge:
          "Criar atmosfera e sofisticação em uma página de viagem sem repetir clichês visuais do segmento nem perder condução de navegação.",
        context:
          "A construção partiu da necessidade de apresentar uma marca de viagens com mais atmosfera e presença, usando imagem, escala tipográfica e ritmo para sustentar o imaginário da experiência.",
        direction:
          "A direção combina respiro, tipografia expansiva e uma paleta mais aquática para gerar sensação de deslocamento, desejo e curadoria premium.",
        system:
          "O layout prioriza narrativa visual, blocos de destaque e transições suaves de leitura. A organização favorece imersão sem comprometer clareza ou condução.",
        experience:
          "A página foi pensada para ser lida como um convite visual: primeiro a atmosfera, depois a promessa, em seguida a curadoria e por fim o avanço para conhecer mais.",
        capabilities: [
          "Usa imagem e tipografia como elementos de narrativa, não apenas decoração.",
          "Sustenta desejo com bastante respiro e uma cadência mais editorial.",
          "Organiza informações sem quebrar o clima aspiracional da marca.",
          "Entrega uma base forte para campanhas, coleções e páginas futuras de destino.",
        ],
        journey: [
          {
            label: "Atmosfera",
            description:
              "A abertura busca capturar sensação e imaginário antes de explicar funcionalmente a proposta da marca.",
          },
          {
            label: "Desejo",
            description:
              "Os blocos seguintes usam composição e hierarquia para transformar beleza em intenção real de explorar mais.",
          },
          {
            label: "Curadoria",
            description:
              "A página insinua repertório e seleção premium por meio da linguagem visual, do ritmo e da distribuição dos destaques.",
          },
          {
            label: "Direção",
            description:
              "Mesmo mais sensorial, a estrutura mantém pontos claros de leitura e navegação para não perder objetividade.",
          },
        ],
        differentiators: [
          "Tom editorial sem sacrificar usabilidade.",
          "Atmosfera aspiracional construída com contenção e intenção.",
          "Narrativa visual preparada para expansão em novos destinos e experiências.",
        ],
        deliverables: [
          "Landing page com direção editorial",
          "Sistema visual para marca de experiência",
          "Composição com foco em atmosfera e desejo",
          "Implementação responsiva orientada a performance",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
        notes: [
          "Escala tipográfica usada como elemento de cenário",
          "Narrativa visual mais sensorial e menos utilitária",
          "Equilíbrio entre impacto aspiracional e leitura objetiva",
        ],
        quote:
          "Quando a página sustenta atmosfera sem perder direção, o desejo deixa de ser só visual e passa a parecer próximo.",
        closing:
          "Horizon Travels mostra como uma landing pode funcionar quase como editorial: mais narrativa, mais respiro e uma percepção de valor construída com ritmo.",
      },
      en: {
        title: "Horizon Travels",
        summary:
          "The page brings an editorial atmosphere and an aspirational focus, showing how travel, desire, and sophistication can coexist with clear reading and objective navigation.",
        intro:
          "This project explores a more sensory territory. The goal was to design an experience that conveyed escapism, curation, and perceived value without falling into generic travel layouts or information overload.",
        sector: "Travel and experience",
        scope: "Brand landing page",
        role: "Visual concept, interface, and composition",
        format: "Editorial landing page",
        year: "2026",
        audience: "Aspirational audiences and premium travelers",
        objective:
          "Build a digital presence that sparks desire and a sense of curation without sacrificing clarity, readability, or commercial intent.",
        challenge:
          "Create atmosphere and sophistication on a travel page without repeating category clichés or losing navigational direction.",
        context:
          "The structure started from the need to present a travel brand with more atmosphere and presence, using image, typographic scale, and rhythm to sustain the imagination of the experience.",
        direction:
          "The direction combines breathing room, expansive typography, and a more aquatic palette to create a sense of movement, desire, and premium curation.",
        system:
          "The layout prioritizes visual narrative, highlight blocks, and smooth reading transitions. The organization favors immersion without compromising clarity or guidance.",
        experience:
          "The page was designed to be read like a visual invitation: atmosphere first, then promise, then curation, and finally the push to explore more.",
        capabilities: [
          "Uses imagery and typography as narrative elements, not just decoration.",
          "Sustains desire through generous breathing room and a more editorial cadence.",
          "Organizes information without breaking the aspirational tone of the brand.",
          "Provides a strong base for campaigns, collections, and future destination pages.",
        ],
        journey: [
          {
            label: "Atmosphere",
            description:
              "The opening aims to capture feeling and imagination before functionally explaining the brand proposition.",
          },
          {
            label: "Desire",
            description:
              "The following blocks use composition and hierarchy to turn beauty into real intent to explore further.",
          },
          {
            label: "Curation",
            description:
              "The page suggests repertoire and premium selection through visual language, rhythm, and how highlights are distributed.",
          },
          {
            label: "Direction",
            description:
              "Even though it is more sensory, the structure keeps clear points of reading and navigation to preserve objectivity.",
          },
        ],
        differentiators: [
          "An editorial tone without sacrificing usability.",
          "Aspirational atmosphere built with restraint and intention.",
          "A visual narrative ready to expand into new destinations and experiences.",
        ],
        deliverables: [
          "Landing page with editorial direction",
          "Visual system for an experience-driven brand",
          "Composition focused on atmosphere and desire",
          "Responsive implementation oriented to performance",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],
        notes: [
          "Typographic scale used as part of the scenery",
          "A more sensory visual narrative and less utilitarian feel",
          "Balance between aspirational impact and objective reading",
        ],
        quote:
          "When the page sustains atmosphere without losing direction, desire stops being merely visual and starts to feel close.",
        closing:
          "Horizon Travels shows how a landing page can function almost like an editorial piece: more narrative, more breathing room, and a stronger perception of value built through rhythm.",
      },
    },
  },
] as const

export const portfolioProjects = projectCases.map((projectCase) => ({
  id: projectCase.id,
  slug: projectCase.slug,
  image: projectCase.image,
  liveUrl: projectCase.liveUrl,
}))

export type PortfolioProjectId = (typeof portfolioProjects)[number]["id"]
export type PortfolioProjectSlug = (typeof portfolioProjects)[number]["slug"]

export interface LocalizedProjectCase extends ProjectCaseContent {
  id: ProjectCaseRecord["id"]
  slug: string
  image: string
  liveUrl: string
  theme: ProjectCaseRecord["theme"]
}

export function getProjectCaseSlugs(): string[] {
  return projectCases.map((projectCase) => projectCase.slug)
}

export function getProjectCases(locale: AppLocale): LocalizedProjectCase[] {
  return projectCases.map((projectCase) => ({
    id: projectCase.id,
    slug: projectCase.slug,
    image: projectCase.image,
    liveUrl: projectCase.liveUrl,
    theme: projectCase.theme,
    ...projectCase.content[locale],
  }))
}

export function getProjectCaseBySlug(
  slug: string,
  locale: AppLocale
): LocalizedProjectCase | null {
  const projectCase = projectCases.find((entry) => entry.slug === slug)

  if (!projectCase) {
    return null
  }

  return {
    id: projectCase.id,
    slug: projectCase.slug,
    image: projectCase.image,
    liveUrl: projectCase.liveUrl,
    theme: projectCase.theme,
    ...projectCase.content[locale],
  }
}

export function getAdjacentProjectCases(
  slug: string,
  locale: AppLocale
): {
  nextProject: LocalizedProjectCase
  previousProject: LocalizedProjectCase
} | null {
  const cases = getProjectCases(locale)
  const currentIndex = cases.findIndex(
    (projectCase) => projectCase.slug === slug
  )

  if (currentIndex === -1) {
    return null
  }

  const previousProject =
    cases[(currentIndex - 1 + cases.length) % cases.length] ?? cases[0]
  const nextProject = cases[(currentIndex + 1) % cases.length] ?? cases[0]

  return { nextProject, previousProject }
}
