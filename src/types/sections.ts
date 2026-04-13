import { PortfolioProjectId } from "@/src/content/projects"

export interface Project {
  id: PortfolioProjectId
  slug: string
  image: string
  liveUrl: string
}

export interface Service {
  id: string
  title: string
  label: string
  description: string
  color: string
  textColor: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface Discipline {
  id: string
  title: string
  label: string
  description: string
}
