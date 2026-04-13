import { locales } from "@/src/i18n/config"

export type AppLocale = (typeof locales)[number]

export interface ProjectCaseContent {
  title: string
  summary: string
  intro: string
  sector: string
  scope: string
  role: string
  context: string
  direction: string
  system: string
  deliverables: string[]
  stack: string[]
  notes: string[]
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
        context:
          "O ponto de partida foi uma página que precisasse comunicar autoridade logo no primeiro impacto, sem depender de excesso de elementos ou de argumentação longa demais para gerar interesse.",
        direction:
          "A direção visual foi construída com massa tipográfica forte, contraste quente e cortes gráficos mais agressivos para passar energia comercial, objetividade e presença.",
        system:
          "A estrutura foi organizada em blocos claros de promessa, benefício, prova de leitura e CTA. Cada seção foi desenhada para manter cadência e reduzir fricção até o contato.",
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
        context:
          "The starting point was a page that needed to communicate authority on first impact without depending on visual excess or overly long argumentation to create interest.",
        direction:
          "The visual direction was built with dense typography, warm contrast, and sharper graphic cuts to convey commercial energy, objectivity, and presence.",
        system:
          "The structure was organized into clear blocks of promise, benefit, reading proof, and CTA. Every section was designed to preserve cadence and reduce friction toward contact.",
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
        context:
          "O desafio central era apresentar uma marca com repertório técnico de forma segura e clara, sem transformar a experiência em algo pesado ou excessivamente corporativo.",
        direction:
          "A linguagem visual seguiu um caminho mais controlado, com fundo escuro, acentos frios e composição limpa para reforçar competência, rigor e consistência.",
        system:
          "O sistema distribui informação em níveis bem definidos, alternando áreas de impacto visual com blocos de leitura mais racional para manter equilíbrio entre branding e compreensão.",
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
        context:
          "The core challenge was to present a technically grounded brand in a clear and safe way without turning the experience heavy or excessively corporate.",
        direction:
          "The visual language followed a more controlled route, with dark backgrounds, cool accents, and clean composition to reinforce competence, rigor, and consistency.",
        system:
          "The system distributes information across clearly defined levels, alternating high-impact visual areas with more rational reading blocks to balance branding and comprehension.",
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
        context:
          "A construção partiu da necessidade de apresentar uma marca de viagens com mais atmosfera e presença, usando imagem, escala tipográfica e ritmo para sustentar o imaginário da experiência.",
        direction:
          "A direção combina respiro, tipografia expansiva e uma paleta mais aquática para gerar sensação de deslocamento, desejo e curadoria premium.",
        system:
          "O layout prioriza narrativa visual, blocos de destaque e transições suaves de leitura. A organização favorece imersão sem comprometer clareza ou condução.",
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
        context:
          "The structure started from the need to present a travel brand with more atmosphere and presence, using image, typographic scale, and rhythm to sustain the imagination of the experience.",
        direction:
          "The direction combines breathing room, expansive typography, and a more aquatic palette to create a sense of movement, desire, and premium curation.",
        system:
          "The layout prioritizes visual narrative, highlight blocks, and smooth reading transitions. The organization favors immersion without compromising clarity or guidance.",
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
