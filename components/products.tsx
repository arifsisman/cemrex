import { faParachuteBox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Products() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-3/4 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore the products</h2>
            <p className="text-xl text-gray-600">
              We can product with the materials and dimensions which you desire. <br />
              It's enough to inform us about the difference which you choose and want.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-black">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX P1</h4>
              <p className="text-gray-600 text-center">Nylon radiosonde parachute</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-black">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX P2</h4>
              <p className="text-gray-600 text-center">Tyvek radiosonde parachute</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl border-2 border-black">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX B1</h4>
              <p className="text-gray-600 text-center">Nylon parachute with higher payload</p>
            </div>

            {/* 4th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714A5.714 5.714 0 0037.714 32a5.714 5.714 0 005.715 5.714"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M32 37.714a5.714 5.714 0 015.714 5.715 5.714 5.714 0 015.715-5.715M20.571 26.286a5.714 5.714 0 005.715-5.715A5.714 5.714 0 0032 26.286"
                    />
                    <path
                      className="stroke-current text-white"
                      d="M20.571 26.286A5.714 5.714 0 0126.286 32 5.714 5.714 0 0132 26.286"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M21.714 40h4.572M24 37.714v4.572M37.714 24h4.572M40 21.714v4.572"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div> */}

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-2"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path
                      className="stroke-current text-white"
                      d="M19.429 32a12.571 12.571 0 0021.46 8.89L23.111 23.11A12.528 12.528 0 0019.429 32z"
                    />
                    <path
                      className="stroke-current text-blue-300"
                      d="M32 19.429c6.943 0 12.571 5.628 12.571 12.571M32 24a8 8 0 018 8"
                    />
                    <path className="stroke-current text-white" d="M34.286 29.714L32 32" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Headless CMS</h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  icon: {
    height: "64px",
    width: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}
