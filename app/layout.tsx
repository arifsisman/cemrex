import "./css/style.css"

import { Inter } from "next/font/google"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import Header from "@/components/ui/header"
import Banner from "@/components/banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Cemrex",
  description:
    "Radiosonde Parachute, Meteorological Parachute, Totex Parachute, Weather Parachute, Weather Balloon Parachute",
  keywords: [
    "Radiosonde",
    "Radiosonde Parachute",
    "Parachute",
    "Meteorology",
    "Meteorological Parachute",
    "Marine",
    "Military",
    "Weather",
    "Weather Balloon",
    "Weather Balloon Parachute",
    "Environmental Protection",
    "Research"
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}
      >
        <div className="Simpleflex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          <Banner />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
