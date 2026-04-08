import { Variants } from "framer-motion"

export const EASE_APPLE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const TRANSITION_SLOW = { duration: 1.2, ease: EASE_APPLE }
export const TRANSITION_MEDIUM = { duration: 0.8, ease: EASE_APPLE }
export const TRANSITION_QUICK = { duration: 0.5, ease: EASE_APPLE }

export const VARIANTS_FADE_IN_UP: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...TRANSITION_MEDIUM,
      delay: i * 0.1,
    },
  }),
}

export const VARIANTS_TEXT_REVEAL: Variants = {
  hidden: { y: "100%" },
  visible: (i: number = 0) => ({
    y: 0,
    transition: {
      ...TRANSITION_SLOW,
      delay: i * 0.08,
    },
  }),
}
