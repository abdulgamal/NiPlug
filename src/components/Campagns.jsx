import React from "react";

function Campagns() {
  return (
    <section className="my-4">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Promoted Campaigns/Offers
                </h2>
              </header>

              <p className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-[#1d7874] rounded hover:shadow focus:outline-none focus:ring">
                See All
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <div className="block group">
                  <img
                    src="https://admin.niplug.com/assets/uploads/media-uploader/46ddb52e-d327-464e-82d5-6f70794a0d9b16786935961684328510.jpg"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900">Adidas</h3>

                    <p className="mt-1 text-sm justify-center items-center flex p-2 rounded-md bg-[#1d7874] text-white">
                      Details
                    </p>
                  </div>
                </div>
              </li>

              <li>
                <div className="block group">
                  <img
                    src="https://admin.niplug.com/assets/uploads/media-uploader/img-20230216-wa005616765467971684413582.jpg"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900">Airforce</h3>

                    <p className="mt-1 text-sm justify-center items-center flex p-2 rounded-md bg-[#1d7874] text-white">
                      Details
                    </p>
                  </div>
                </div>
              </li>
              <li className="lg:hidden">
                <div className="block group">
                  <img
                    src="https://admin.niplug.com/assets/uploads/media-uploader/whatsapp-image-2023-03-22-at-14404-pm16794952621684401224.jpg"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900">
                      Clear Lipgloss
                    </h3>

                    <p className="mt-1 text-sm justify-center items-center flex p-2 rounded-md bg-[#1d7874] text-white">
                      Details
                    </p>
                  </div>
                </div>
              </li>
              <li className="lg:hidden">
                <div className="block group">
                  <img
                    src="https://admin.niplug.com/assets/uploads/media-uploader/whatsapp-image-2023-06-16-at-91034-am-11686895943.jpeg"
                    alt=""
                    className="object-cover w-full rounded aspect-square"
                  />

                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900">Bikini Waxing</h3>

                    <p className="mt-1 text-sm justify-center items-center flex p-2 rounded-md bg-[#1d7874] text-white">
                      Details
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campagns;
