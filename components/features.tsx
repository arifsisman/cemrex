"use client"

export default function Features() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-24 pb-24">
          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Explore the solutions</h1>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur excepteur sint occaecat cupidatat.
            </p>
          </div> */}

          {/* Section content */}
          <div>
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h4 mb-3">What is a Radiosonde Parachute?</h3>
                <p className="text-l text-gray-600">
                  A radiosonde is a small box-like instrument that is carried into the upper
                  atmosphere by balloon. As it travels upward, it transmits meteorological
                  measurements to ground stations. Radiosondes measure temperature with a
                  thermometer, humidity with a hygrometer, and air pressure with a barometer.
                  Radiosondes are attached to helium-filled neoprene balloons that are designed to
                  burst when they reach a specified altitude. They can operate up to around 100,000
                  feet (30,000 meters).
                </p>
                <br />
                <p className="text-l text-gray-600">
                  Meteorologists send these instruments up into the upper atmosphere on balloons
                  twice a day simultaneously around the world--at midnight and at noon Greenwich
                  Mean Time (GMT) Radiosondes take continuous measurements as the balloon rises
                  through the air. This information is transmitted by radio back to the ground.
                  Special tracking equipment monitors the movement of the radiosonde, which is
                  converted into wind speed and wind direction data. When the balloon bursts, the
                  radiosonde falls back to Earth by parachute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
