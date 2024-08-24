import Link from "next/link";
import React from "react";

function PlugsContent() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">
            Select Plug Type
          </h1>

          <p className="max-w-lg mx-auto mt-4 text-gray-500">
            Discover the world of Plugs to get connected effortlessly
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="influencer.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium mb-2">
              Influencer Plugs
            </h2>
            <Link
              href="/influencers"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </Link>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="ads.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Ads Plugs
            </h2>
            <a
              href="https://advertising.niplug.com/"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="enterprenuer.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium mb-2">
              Entreprenuers
            </h2>
            <a
              href="https://niplug.com/discover"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="offers.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Offers Plugs
            </h2>
            <a
              href="https://niplug.com/@offers"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="tickets.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Events Plugs
            </h2>
            <a
              href="https://eventsplug.com/"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="vip.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Vip Plugs
            </h2>
            <a
              href="https://niplug.vip/"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="tipplug.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Tip Plugs
            </h2>
            <a
              href="https://tiplug.ke/"
              target="_blank"
              className=" bg-green-300 py-2 px-6 rounded-xl"
            >
              Get plug
            </a>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
            <div className="h-[200px] w-[200px]">
              <img src="date.svg" alt="" className="w-full h-full" />
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Dates Plugs
            </h2>
            <button className=" bg-green-300 py-2 px-6 rounded-xl">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlugsContent;
