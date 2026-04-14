import { Geist_Mono, Lexend, Montserrat, Syne } from "next/font/google"

const fontHeading = Lexend({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const fontDecorative = Syne({
  subsets: ["latin"],
  variable: "--font-decorative",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: false,
})

const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
})

export const fonts = {
  heading: fontHeading,
  decorative: fontDecorative,
  sans: fontSans,
  mono: fontMono,
}

export const fontVariables = `${fontHeading.variable} ${fontDecorative.variable} ${fontSans.variable} ${fontMono.variable}`
