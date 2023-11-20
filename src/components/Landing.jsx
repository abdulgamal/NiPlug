import React from "react";
import Button from "./Button";
import SearchQuery from "./SearchQuery";
import Link from "next/link";
import Image from "next/image";

function Landing() {
  return (
    <main className="min-h-screen container mx-auto">
      <div className=" grid md:grid-cols-2 gap-10">
        <div className="h-[90vh] flex flex-col justify-around px-4">
          <Image width={500} height={500} src="/section_D.png" alt="" />
          <div className="">
            <div className="mb-5">
              <p className="text-2xl font-bold tracking-widest text-[#1d7874]">
                Welcome to NiPlug
              </p>
              <p className="text-sm font-bold tracking-widest">
                Transform you online presence into income
              </p>
            </div>
            <p className="text-sm md:text-xl tracking-wider">
              Discover how we seamlessly merge technology, eCommerce, and
              influencer marketing to help you turn your online presence into a
              revenue-generating powerhouse
            </p>
          </div>
          <div>
            <div className="mt-5">
              <Link
                href="/offers-page"
                className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#1d7874] py-3 px-8 rounded-2xl gap-2 my-2"
              >
                Get Plugged
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </Link>
              <a
                href="https://niplug.com/"
                target="_blank"
                className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#1d7874] py-3 px-8 rounded-2xl gap-2 my-2"
              >
                Create Plugs
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
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </a>
            </div>
            <SearchQuery />
          </div>
        </div>
        <div className="">
          <Image
            width={500}
            height={500}
            src="/influencer.png"
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
              Seamlessly Launch Your eCommerce Storefront
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              At NiPlug, we provide the ultimate solution for creating and
              managing your eCommerce storefront effortlessly. Whether
              you&apos;re a passionate creator, a small business owner, or a
              digital entrepreneur, our platform enables you to set up and
              customize your online store with ease. Sell products, services, or
              digital content, and watch your online business thrive.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Make money through Membership
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              Monetize your content and expertise by offering memberships to
              your audience. With NiPlug, you can easily create and manage
              membership tiers, provide exclusive content, and build a loyal
              community that&apos;s eager to support your work.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Empower Influencers with Storefronts
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              In the world of influencer marketing, NiPlug stands out. Our
              platform allows influencers to create storefronts without the
              hassle of managing inventory. Promote and sell products to your
              followers, turning your online influence into a lucrative
              business.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              In-Link-Bio - Streamline Your Social Commerce
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              Make the most of your social media presence with our In-Link-Bio
              feature. It&apos;s your all-in-one solution for directing your
              audience to your eCommerce storefront, memberships, and influencer
              partnerships. Streamline the customer journey and maximize your
              online sales.
            </p>
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Ads Plugs - Free Ads to Boost Your Customer Base
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              With Ads Plugs on NiPlug, you can expand your reach and attract
              more customers without breaking the bank. Our free ads are
              designed to increase your customer base and drive more traffic to
              your online business.
            </p>
            <Button
              link="https://advertising.niplug.com/"
              title="Create Ad Plugs"
            />
          </div>
          <div className="bg-white p-10 rounded-md h-[50vh] flex flex-col justify-around">
            <h5 className="font-bold text-[#1d7874] text-center mb-5 text-lg md:text-2xl">
              Tip Plugs - Hassle-Free Tips with Maximum Privacy
            </h5>
            <p className="text-gray-500 tracking-wide text-center">
              Say goodbye to exposing your personal information when receiving
              tips. NiPlug&apos;s Tip Plugs offer a secure and privacy-conscious
              solution for hassle-free tipping. Whether you&apos;re a content
              creator or service provider, you can accept tips with confidence.
            </p>
          </div>
        </div>
        <Button />
      </div>
      <div className="my-12 min-h-screen grid md:grid-cols-2 gap-10">
        <div className="px-4 mb-4 pt-10">
          <p className="text-base md:text-lg text-[#1d7874] font-bold tracking-widest">
            Ready to seize the opportunities of the digital world? NiPlug
            invites you to take action:
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
                <b>Build Your eCommerce Storefront:</b>Whether you&apos;re a
                creator, business owner, or digital entrepreneur, start selling
                your products, services, or content with ease. NiPlug makes it
                simple to launch your online store.
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
                <b>Create Memberships:</b>Monetize your expertise and content by
                offering memberships. Build a loyal community and generate
                consistent income from your dedicated followers.
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
                <b>Empower Influencers:</b>If you&apos;re an influencer,
                transform your online influence into a thriving business. Create
                your storefront without the burden of inventory management
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
                <b>In-Link-Bio:</b>Streamline your social commerce efforts by
                using our In-Link-Bio feature. Connect your audience directly to
                your monetization opportunities.
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
                <b>Ads Plugs:</b>Expand your reach with free ads that boost your
                customer base
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
                <b>Tip Plugs:</b>Enjoy hassle-free tips with maximum privacy.
              </p>
            </div>
          </div>
          <Button />
        </div>
        <div className="order-first">
          <Image
            width={500}
            height={500}
            src="/section_G.png"
            alt="banner-img"
            className="md:rounded-2xl h-full"
          />
        </div>
      </div>
    </main>
  );
}

export default Landing;
