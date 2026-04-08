import * as React from "react"
import { m, AnimatePresence } from "framer-motion"
import { CaretRight } from "@phosphor-icons/react"
import { cn } from "@/src/lib/utils/utils"
import { TRANSITION_MEDIUM } from "@/src/config/animations"

interface AccordionItemProps {
  index: number
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

export function AccordionItem({
  index,
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) {
  const panelId = `accordion-panel-${index}`
  const buttonId = `accordion-button-${index}`

  return (
    <div className="border-b border-foreground/10">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onClick}
        className="w-full py-10 flex items-center justify-between text-left group focus-visible:outline-brand-primary focus-visible:outline-offset-4"
      >
        <div className="flex items-center gap-8 lg:gap-12">
          <span
            className={cn(
              "font-heading text-xl font-black transition-colors duration-500",
              isOpen ? "text-brand-primary" : "text-foreground/60"
            )}
          >
            0{index + 1}
          </span>
          <span
            className={cn(
              "text-xl md:text-3xl font-bold tracking-tight transition-all duration-500",
              isOpen
                ? "text-brand-primary"
                : "text-foreground group-hover:text-brand-primary"
            )}
          >
            {question}
          </span>
        </div>

        <div
          className={cn(
            "h-10 w-10 rounded-full border border-foreground/10 flex items-center justify-center transition-all duration-700 shrink-0",
            isOpen
              ? "rotate-90 bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20"
              : "text-muted-foreground/80 group-hover:border-brand-primary group-hover:text-brand-primary"
          )}
        >
          <CaretRight weight="bold" size={20} aria-hidden="true" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={TRANSITION_MEDIUM}
            className="overflow-hidden"
          >
            <div className="pl-16 lg:pl-24 pb-12">
              <p className="text-lg md:text-xl text-muted-foreground/70 leading-relaxed font-medium max-w-2xl border-l border-foreground/10 pl-8">
                {answer}
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
