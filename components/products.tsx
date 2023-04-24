import { faParachuteBox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

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
        <div className="pb-24">
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
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX P1</h4>
              <p className="text-gray-600 text-center">Nylon radiosonde parachute</p>

              <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mt-4" href="p1">
                Explore
              </a>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX P2</h4>
              <p className="text-gray-600 text-center">Tyvek radiosonde parachute</p>

              <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mt-4" href="p2">
                Explore
              </a>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="bg-blue-600 p-1 -mt-1 mb-2" style={styles.icon}>
                <FontAwesomeIcon icon={faParachuteBox} color="white" height={30} width={30} />
              </div>

              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">CMX B1</h4>
              <p className="text-gray-600 text-center">Nylon parachute with higher payload</p>

              <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow mt-4" href="b1">
                Explore
              </a>
            </div>
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
