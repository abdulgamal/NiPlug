"use client";
import Image from "next/image";
import React, { useState } from "react";
import NipCard from "./NipCard";
import NipSection from "./NipSection";
import NipModal from "./NipModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css";
import Link from "next/link";

function NipHome() {
  const [isToggle, setIsToggle] = useState(false);
  const createPlugs = [
    {
      title: "Create Influencer Plugs",
      subTitle: "Create Influencer Plugs",
      link: "https://app.niplug.com/auth",
    },
    {
      title: "Create Ad Plugs",
      subTitle: "Create Ad Plugs",
      link: "https://advertising.niplug.com/login?post_ads=1",
    },
    {
      title: "Create Entreprenuers Plugs",
      subTitle: "Create Entreprenuers Plugs",
      link: "https://niplug.com/auth/login",
    },
  ];
  return (
    <>
      <NipModal
        isToggle={isToggle}
        setIsToggle={setIsToggle}
        data={createPlugs}
      />
      <section className="min-h-screen container mx-auto px-3">
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
                  <img
                    src="enterprenuer.svg"
                    alt=""
                    className="w-full h-full"
                  />
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
                  <img
                    src="enterprenuer.svg"
                    alt=""
                    className="w-full h-full"
                  />
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
        <div className="flex flex-col space-y-3 justify-around items-center">
          <div className="flex flex-1 flex-col justify-center items-center gap-4 px-5">
            <h2 className="my-1 text-gray-500 tracking-wider font-semibold text-center">
              A PLATFORM FOR ENTREPRENEURS
            </h2>
            <Image width={500} height={500} src="/section_D.png" alt="" />
            <h1 className="font-bold text-4xl md:text-5xl text-center max-w-xl my-8">
              Transform your online presence into income
            </h1>
            <p className="text-center max-w-lg text-lg">
              By utilizing Plugs, entrepreneurs are equipped with the necessary
              power and tools to monetize their social presence.
            </p>
          </div>
          <div className="mt-5">
            <button
              onClick={() => {
                setIsToggle(true);
              }}
              className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#010101] py-3 px-8 rounded-full gap-2 my-2"
            >
              Create Plugs
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-7 p-4">
          <NipCard
            icon1={"🏗️"}
            icon2={"⚡"}
            title1={"Plugs"}
            title2={"Shops"}
            subtitle1={"10+ usable"}
            subtitle2={"sell anything"}
            header={"Create Plugs 🔥"}
            content={
              "Like Tip Requests, eCommerce Storefront, Memberships, Paid Images, Videos, Links, and More."
            }
          />
          <NipCard
            icon1={"📱"}
            icon2={"🔥"}
            title1={"Builder"}
            title2={"Page"}
            subtitle1={"drag & drop"}
            subtitle2={"under 5 min"}
            header={"Mobile first 📱"}
            isRow
            content={
              "Craft Your Page Swiftly: Embrace Our Mobile-First Builder."
            }
          />
          <NipCard
            icon1={"📈"}
            icon2={"🪢"}
            title1={"Ads"}
            title2={"Influencer"}
            subtitle1={"view live users"}
            subtitle2={"storefront"}
            header={"Promote Your Plugs 🔌"}
            content={
              "Promote your Plugs through our Ad Plug System or through Influencer Storefronts."
            }
          />
          <div className="bg-[#F6F6F6] p-10 rounded-xl flex flex-col gap-6 min-h-[350px] justify-between items-center md:col-span-3">
            <Image
              width={500}
              height={500}
              src="/section_D.png"
              alt=""
              className="w-full"
            />
            <div className="flex flex-col justify-center items-center max-w-xl">
              <h3 className="font-bold text-xl text-center">
                More ways to reach your audience.
              </h3>
              <p className="text-center text-gray-500">
                Storefronts Plugs, Tip Plugs,Courses Plugs, Memberships, Ad
                Plugs, In-Link-Bio Plugs and many more are available on our
                platform.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <NipSection
            title={"Seamlessly Launch Your eCommerce Storefront"}
            content={
              "We provide the ultimate solution for creating and managing your eCommerce storefront effortlessly. Whether you&apos;re a passionate creator, a small business owner, or a digital entrepreneur, our platform enables you to set up and customize your online store with ease. Sell products, services, or digital content, and watch your online business thrive."
            }
            image={"/section_E.png"}
            right
          />
          <NipSection
            title={"Lots of creative features"}
            content={
              "Empower Your Collection: Garner Payments, Feedback, Emails, and Anonymous Notes – Your Canvas of Possibilities. Craft and Personalize Elements from a Myriad of Available Apps, with More to Unfold!"
            }
            left
          />
          <NipSection
            title={"Ads Plugs - Free Ads to Boost Your Customer Base"}
            content={
              "With Ads Plugs on NiPlug, you can expand your reach and attract more customers without breaking the bank. Our free ads are designed to increase your customer base and drive more traffic to your online business."
            }
            image="/section_G.png"
            right
            link
          />
        </div>
        <section className="my-3">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Enough Talk,
                <strong className="font-extrabold text-red-700 sm:block">
                  Get started.
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Start Creating your own storefront Plugs, Tip Plugs, Content
                Plugs, In-link-Plugs and many more.
              </p>
              <div className="flex flex-col md:flex-row mt-3 items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="sm:text-xl/relaxed">Create Plugs.</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="sm:text-xl/relaxed">Browse Plugs.</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <p className="sm:text-xl/relaxed">Share Plugs.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="https://niplug.com/"
                  target="_blank"
                  className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#010101] py-3 px-8 rounded-full gap-2 my-2"
                >
                  Plug me up
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default NipHome;
