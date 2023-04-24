"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-24 pb-6">
          {/* Section header */}
          <div className="text-center pb-12">
            <h1
              className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-600 pb-6"
              data-aos="zoom-y-out"
            >
              Professional Radiosonde Parachutes
            </h1>

            <div className="flex justify-center">
              <Image
                src="/images/products.webp"
                alt="parachute"
                height={400}
                width={800}
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
