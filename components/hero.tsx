"use client"

import Image from "next/image"
import ImageGallery from "react-image-gallery"

export default function Hero() {
  const images = [
    {
      original: "/images/products.webp",
      thumbnail: "/images/products.webp"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ]

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-24 pb-6">
          {/* Section header */}
          <div className="text-center pb-12">
            <h1
              className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-stone-700 to-pink-400 pb-6"
              data-aos="zoom-y-out"
            >
              Cemrex Radiosonde Parachutes
            </h1>

            {/* <div className="flex justify-center">
              <Image
                src="/images/products.webp"
                alt="parachute"
                height={400}
                width={800}
                style={{ borderRadius: "5px" }}
              />
            </div> */}

            {/* <ImageGallery items={images} /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
