"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css";
import Link from "next/link";

function SwiperCard() {
  return (
    <section className="container mx-auto px-3 mt-5">
      <div className="flex flex-wrap w-full mb-5 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
          Select Plug Type
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Discover the world of Plugs to get connected effortlessly
        </p>
      </div>
      <div className="hidden my-6 px-4 max-w-3xl mx-auto md:block">
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="my-6 px-4 md:hidden">
        <Swiper
          spaceBetween={10}
          slidesPerView={1.5}
          scrollbar={{ draggable: true }}
          modules={[Scrollbar]}
        >
          <SwiperSlide>
            <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
              <div className="h-[200px] w-[200px]">
                <img src="influencer.svg" alt="" className="w-full h-full" />
              </div>
              <h2 className="text-lg text-gray-900 font-medium mb-2">
                Influencer Plugs
              </h2>
              <a
                href="https://app.niplug.com/influencers"
                target="_blank"
                className=" bg-green-300 py-2 px-6 rounded-xl"
              >
                Get plug
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="border border-gray-200 p-6 rounded-lg flex flex-col justify-center items-center">
              <div className="h-[200px] w-[200px]">
                <img
                  src="https://niplug.com/assets/image/date.svg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Dates Plugs
              </h2>
              <button className=" bg-green-300 py-2 px-6 rounded-xl">
                Coming Soon
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default SwiperCard;
