export const metadata = {
  title: "Cemrex Radiosonde Parachutes",
  description: "Radiosonde Parachutes"
}

import Hero from "@/components/hero"
import Features from "@/components/features"
import Products from "@/components/products"
import References from "@/components/references"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <References />
      <Contact />
    </>
  )
}
