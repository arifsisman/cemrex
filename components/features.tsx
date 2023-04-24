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
                  A radiosonde is a small weather station coupled with a radio transmitter. The
                  radiosonde is attached to a helium or hydrogen-filled balloon, generally called a
                  weather balloon, and the balloon lifts the radiosonde to altitudes exceeding
                  115,000 feet. During the radiosonde’s ascent, it transmits data on temperature,
                  pressure, and humidity to a sea-, air-, or land-based receiving station. Often,
                  the position of the radiosonde is tracked through GPS, radar, or other means, to
                  provide data on the strength and direction of winds aloft. Thus the radiosonde
                  flight produces a vertical profile of weather parameters in the area above which
                  it was launched.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
