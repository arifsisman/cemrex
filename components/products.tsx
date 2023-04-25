import { faParachuteBox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import cizim from "@/public/images/cizim.png"

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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="h2 mb-4">Explore the product</h2>
            <p className="text-xl text-gray-600">
              We can produce with the materials and dimensions which you desire. <br />
              It's enough to inform us about the difference which you choose and want.
            </p>
          </div>

          <div
            className="place-items-center py-8 max-w-sm mx-auto 
            grid md:grid-cols-2 lg:grid-cols-2 md:max-w-2xl lg:max-w-none"
          >
            <div>
              <table className="shadow-lg bg-white border-collapse">
                <tbody>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Max. Weight</td>
                    <td className="border px-8 py-4">60 ± 10 g</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Max. Weight</td>
                    <td className="border px-8 py-4">170 cm</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Cold Resistance</td>
                    <td className="border px-8 py-4">-65 C</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Drop Rate</td>
                    <td className="border px-8 py-4">6 m/s</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Fabric Type</td>
                    <td className="border px-8 py-4">Nylon</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Fabric Color</td>
                    <td className="border px-8 py-4">Orange</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Fabric Thickness</td>
                    <td className="border px-8 py-4">0,6 ± 0,1 mm</td>
                  </tr>
                  <tr>
                    <td className="border px-8 py-4 font-bold">Rope Type</td>
                    <td className="border px-8 py-4">Macrame</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-12">
              <Image src={cizim} alt="parachute"></Image>
            </div>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/1.jpg"></img>
            </div>

            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/2.jpg"></img>
            </div>

            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/3.jpg"></img>
            </div>

            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/4.jpg"></img>
            </div>

            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/5.jpg"></img>
            </div>

            <div className="relative flex flex-col items-center p-2 bg-white rounded shadow-xl">
              <img src="/images/product/6.jpg"></img>
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
