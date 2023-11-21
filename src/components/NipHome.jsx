import Image from "next/image";
import Link from "next/link";
import React from "react";
import NipCard from "./NipCard";
import NipSection from "./NipSection";

function NipHome() {
  return (
    <section className="min-h-screen container mx-auto">
      <div className="flex flex-col space-y-5 justify-around items-center h-[85vh]">
        <Image width={500} height={500} src="/section_D.png" alt="" />
        <div className="flex flex-1 flex-col justify-center items-center gap-4 px-5">
          <h2 className="my-1 text-gray-500 tracking-widest font-semibold">
            A PLATFORM FOR ENTREPRENEURS
          </h2>
          <h1 className="font-bold text-4xl md:text-5xl text-center max-w-xl">
            Transform your online presence into income
          </h1>
          <p className="text-center max-w-lg text-lg">
            By utilizing Plugs, entrepreneurs are equipped with the necessary
            power and tools to monetize their social presence.
          </p>
        </div>
        <div className="mt-5">
          <Link
            href="/offers-page"
            className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#010101] py-3 px-8 rounded-full gap-2 my-2"
          >
            Get Plugged
          </Link>
          <a
            href="https://niplug.com/"
            target="_blank"
            className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#010101] py-3 px-8 rounded-full gap-2 my-2"
          >
            Create Plugs
          </a>
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
          content={"Craft Your Page Swiftly: Embrace Our Mobile-First Builder."}
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
              Storefronts Plugs, Tip Plugs,Courses Plugs, Memberships, Ad Plugs,
              In-Link-Bio Plugs and many more are available on our platform.
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
  );
}

export default NipHome;
