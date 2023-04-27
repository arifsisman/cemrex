import Image from "next/image"

export default function References() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
        <div className="py-12">
          {/* Section header */}
          <div className="max-w-4xl mx-auto text-center pb-4">
            <h2 className="h2 mb-2">About Us</h2>
          </div>

          <div
            className="place-items-center py-2 max-w-sm mx-auto 
            grid md:grid-cols-2 lg:grid-cols-2 md:max-w-2xl lg:max-w-none gap-4"
          >
            <div className=" max-w-2xl mx-auto">
              <p className="text-l text-gray-600">
                Cemrex Radiosonde Parachute is a Turkish brand of the company Ankara iz Organizasyon
                Ltd. Sti. Our company has been producing Radiosonde parachutes since 2010 for
                Turkish State General Directorate of Meteorology
              </p>
            </div>

            <a href="https://mgm.gov.tr/" target="_blank" rel="noreferrer">
              <Image
                src="/images/mgm.png"
                alt="meteoroloji genel müdürlüğü"
                height={150}
                width={300}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
