import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Contact() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* CTA box */}
          <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
            {/* Background illustration */}
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">
              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-8">Contact Us</h3>

                {/* <div className="flex flex-row gap-2 mb-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    height={30}
                    width={30}
                    color="white"
                  ></FontAwesomeIcon>
                  <a className="text-gray-300 text-lg">cemrexparachute@gmail.com</a>
                </div>

                <div className="flex flex-row gap-2">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    height={30}
                    width={30}
                    color="white"
                  ></FontAwesomeIcon>
                  <a className="text-gray-300 text-lg">+90 555 456 49 00</a>
                </div> */}

                <div className="pt-4">
                  <h5 className="text-white font-bold text-xl">Ankara İz Organizasyon</h5>

                  <a className="text-gray-300 text-lg">
                    Lizbon St. 47/2 Cankaya
                    <br />
                    Ankara/TURKEY 06460
                  </a>
                </div>

                <div className="pb-2 pt-8">
                  <a href="mailto:cemrexparachute@gmail.com">
                    <button className="inline-flex items-center h-10 px-5 text-indigo-100 font-bold transition-colors duration-150 bg-blue-700 rounded focus:shadow-outline hover:bg-blue-800 mb-2 mr-4">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        height={24}
                        width={24}
                        color="white"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      <span>cemrexparachute@gmail.com</span>
                    </button>
                  </a>

                  <a href="https://wa.me/905554564900" target="blank">
                    <button className="inline-flex items-center h-10 px-5 text-indigo-100 font-bold transition-colors duration-150 bg-blue-700 rounded focus:shadow-outline hover:bg-blue-800 ">
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        height={24}
                        width={24}
                        color="white"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      <span>+90 555 456 49 00</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
