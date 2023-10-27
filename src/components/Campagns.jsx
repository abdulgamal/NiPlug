"use client";
import React, { useEffect } from "react";
import { getOfferProducts } from "../../requests";

function Campagns() {
  const fetchData = async () => {
    try {
      const resp = await getOfferProducts();
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Promotions and Offers
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="block group relative">
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
            <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full absolute right-2 top-2">
              Offer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campagns;
