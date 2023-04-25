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
                  Meteorology stations release balloons into the sky to receive information on
                  pressure, temperature, humidity and wind in the air. The radiosonde device
                  connected to the balloons ascends to a height of 35 km from the ground and
                  transmits the information in the air to the ground station via radio waves during
                  its stay in the air.
                </p>
                <br />
                <p className="text-l text-gray-600">
                  A parachute is used to prevent the radiosonde device attached to the balloon
                  bursting at a certain altitude from falling randomly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
