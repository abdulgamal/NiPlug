import React from "react";
import Lottie from "lottie-react";
import banner from "../../public/banner.json";
import Button from "./Button";

function Landing() {
  return (
    <main className="min-h-screen container mx-auto">
      <div className=" grid md:grid-cols-2 gap-10">
        <div className="h-screen flex flex-col justify-center px-4">
          <div className="">
            <Lottie animationData={banner} />
            <div className="mb-5">
              <p className="text-2xl font-bold tracking-widest text-[#1d7874]">
                Monetize your following and online presence
              </p>
            </div>
            <p className="text-sm md:text-xl tracking-wider">
              At NiPlug, we empower influencers like you to monetize your online
              presence by providing you with your own customized storefront. Our
              platform connects you with a wide range of brands and allows you
              to sell their products and services directly to your audience.
              It&apos;s time to turn your influence into income!
            </p>
          </div>
          <div className="mt-5">
            <Button />
          </div>
          {/* <div className="flex items-center mt-4 gap-2 border border-[#d4af37] rounded-md p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search or type a code"
              className="bg-transparent flex-1 py-1 outline-none"
            />
            <button className="p-1 bg-[#1d7874] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div> */}
        </div>
        <div className="">
          <img
            src="banner1.webp"
            alt="banner-image"
            className="md:rounded-2xl"
          />
        </div>
      </div>
      <div className="bg-[#F4F4F4] min-h-screen p-5 md:rounded-2xl my-10 flex flex-col justify-around items-center">
        <h2 className="text-4xl text-center mb-3 font-bold text-[#1d7874]">
          Why Choose NiPLUG
        </h2>
        <div className="grid md:grid-cols-3 gap-10 my-3">
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Seamless Storefront Creation:
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              We make it incredibly easy for you to set up your own online
              store. Our user-friendly interface enables you to customize your
              storefront to reflect your personal brand. Showcase your favorite
              products and curate collections that resonate with your audience.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Diverse Product and Services Catalog:
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              Gain access to a vast selection of high-quality products from
              reputable brands across various industries. From fashion and
              beauty to fitness and home decor, you can choose the products that
              align with your interests and your followers preferences.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Hassle-Free Order Management:
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              Leave the logistics to us! We handle all aspects of order
              processing, including payment processing, inventory management,
              and shipping. You can focus on creating engaging content and
              nurturing your community while we take care of the rest.
            </p>
          </div>
        </div>
        <Button />
      </div>
      <div className="my-12 min-h-screen grid md:grid-cols-2 gap-10">
        <div className="px-4 mb-4 pt-10">
          <p className="text-2xl md:text-5xl text-[#1d7874] font-bold tracking-widest">
            With NiPlug,
          </p>
          <div className="mt-5">
            <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-[#d4af37] font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p className="text-md">
                Create a Single link and connect it to your photos, videos and
                shorts so that when your follower asks where to find the product
                simply direct them to your NiPlug link on your bio
              </p>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-[#d4af37] font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p className="text-md">
                Connect with as many brand patners and affiliates as you want
                without changing your link on your Bio. More Income for you!
              </p>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-300 py-5 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 text-[#d4af37] font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <p className="text-md">
                Tag your favorite products and services with a special Access
                Code and simply promote that code to your audience
              </p>
            </div>
          </div>
          <Button />
        </div>
        <div className="order-first">
          <img src="banner2.webp" alt="banner-img" className="md:rounded-2xl" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#1d7874] to-[#151B7B] px-5 md:rounded-3xl mt-5 flex flex-col items-center justify-around py-10 min-h-screen">
        <h2 className="text-gray-300 text-center font-bold text-3xl tracking-widest">
          How it works
        </h2>
        <div className="mt-5 flex justify-between items-center gap-10">
          <div className="hidden md:block">
            <img src="banner3.gif" alt="banner-image" className="w-[50vh]" />
          </div>
          <div>
            <div className="border-b border-gray-400 flex items-center gap-5 py-7 w-[40vh] mb-7">
              <p className="font-bold text-4xl text-gray-100">1</p>
              <div>
                <p className="font-bold text-2xl text-gray-100">Create</p>
                <p className="text-base text-gray-100 tracking-wider">
                  a code for what you want to promote and assign it a URL.
                </p>
              </div>
            </div>
            <div className="border-b border-gray-400 flex items-center gap-5 py-7 w-[40vh] mb-7">
              <p className="font-bold text-4xl text-gray-100">2</p>
              <div>
                <p className="font-bold text-2xl text-gray-100">Share</p>
                <p className="text-base text-gray-100 tracking-wider">
                  your code in text, on a sticker, or in your videos.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 py-7 w-[40vh] mb-5">
              <p className="font-bold text-4xl text-gray-100">3</p>
              <div>
                <p className="font-bold text-2xl text-gray-100">Grow</p>
                <p className="text-base text-gray-100 tracking-wider">
                  your audience with a platform that lets followers search for
                  whatever they are looking for—easy as that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Landing;
