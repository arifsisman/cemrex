import Hero from "@/components/hero"
import Features from "@/components/features"
import Products from "@/components/products"
import References from "@/components/references"
import Contact from "@/components/contact"
import Gallery from "@/components/gallery"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cemrex Meteorological Parachute",
  description: "CMX P1 | Handmade Radiosonde Parachute | Contact us for price and more information",
  keywords: [
    "Radiosonde",
    "Radiosonde Parachute",
    "Parachute",
    "Meteorology",
    "Meteorological Parachute",
    "High Altitude Balloon Parachute",
    "Marine",
    "Military",
    "Weather",
    "Weather Balloon",
    "Weather Balloon Parachute",
    "Environmental Protection",
    "Research"
  ]
}

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Features />
      <Products />
      <Gallery />
      <References />
      <Contact />
    </>
  )
}
