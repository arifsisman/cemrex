"use client"

import ImageGallery from "react-image-gallery"

export default function Gallery() {
  const images = [
    { original: "/images/gallery/products.webp" },
    { original: "/images/gallery/9.jpg" },
    { original: "/images/gallery/5.jpg" },
    { original: "/images/gallery/16.jpg" }
  ]

  return (
    <section className="relative bg-gray-100">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="pt-16 pb-6">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-8">
            <h2 className="h2 mb-4">Gallery</h2>
          </div>

          {/* Section content */}
          <ImageGallery items={images} />
        </div>
      </div>
    </section>
  )
}
