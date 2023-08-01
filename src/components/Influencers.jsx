import React from "react";
import Search from "./Search";

function Influencers() {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Plug Influencers
        </h1>
        <Search />

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
          <div
            className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage:
                "url('http://res.cloudinary.com/dinfpnmrf/image/upload/v1685383022/dukaapp/vhqqkmswnidsndgvmbbc.jpg')",
            }}
          >
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                Chocority
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                Visit
              </p>
            </div>
          </div>

          <div
            className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage:
                "url('https://static.wixstatic.com/media/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg/v1/crop/x_73,y_0,w_1850,h_1850/fill/w_375,h_375,al_c,q_375,usm_0.66_1.00_0.01,enc_auto/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg')",
            }}
          >
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                TamactiJun
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                Visit
              </p>
            </div>
          </div>
          <div
            className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage:
                "url('http://res.cloudinary.com/dinfpnmrf/image/upload/v1685383022/dukaapp/vhqqkmswnidsndgvmbbc.jpg')",
            }}
          >
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                Chocority
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                Visit
              </p>
            </div>
          </div>

          <div
            className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
            style={{
              backgroundImage:
                "url('https://static.wixstatic.com/media/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg/v1/crop/x_73,y_0,w_1850,h_1850/fill/w_375,h_375,al_c,q_375,usm_0.66_1.00_0.01,enc_auto/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg')",
            }}
          >
            <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
              <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                TamactiJun
              </h2>
              <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase">
                Visit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Influencers;
