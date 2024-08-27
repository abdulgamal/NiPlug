"use client";
import React, { useState } from "react";
import VideoBtn from "./VideoBtn";
import ToggleBtn from "./ToggleBtn";
import VideoModal from "./VideoModal";
import NipModal from "./NipModal";

const Banner = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <section
        id="banner"
        className="container mx-auto pt-24 pb-0 bg-gradient-to-b from-[#E0F5FA] to-[#FFFDE6] md:pb-20"
        style={{ backgroundImage: `url('/banner-bg-1-1.png')` }}
      >
        <div className="max-w-full md:max-w-5xl lg:max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Left Column */}
            <div className="px-4 w-full md:w-1/2 flex flex-col justify-center">
              <div className="pr-10">
                {/* Heading Section */}
                <h3 className="text-black font-bold text-3xl md:text-5xl lg:text-5xl xl:text-6xl relative mb-5">
                  Transform your <br /> online presence into income
                </h3>

                {/* Description Text */}
                <p className="text-[#02073E] text-sm md:text-base leading-7 mb-10">
                  By utilizing Plugs, entrepreneurs are equipped with the{" "}
                  <br className="hidden lg:inline-block" />
                  necessary power and tools to monetize their social{" "}
                  <br className="hidden lg:inline-block" />
                  presence.
                </p>
                <ToggleBtn handleClick={() => setIsToggle(true)} />
              </div>
            </div>

            {/* Right Column */}
            <div className="px-4 w-full md:w-1/2 mt-4 md:mt-0">
              <div className="flex justify-start lg:justify-end mt-15 lg:mt-0">
                <div className="relative">
                  <img
                    src="/nipVideo.jpg"
                    alt="banner image"
                    className="relative z-10 max-w-full"
                  />
                  {/* <div
                  className="absolute inset-0 border-2 border-[#FFDC6B] rounded-lg z-5 hidden lg:block"
                  style={{ top: "30px", left: "30px" }}
                /> */}
                  <div
                    className="absolute inset-0 bg-center bg-no-repeat z-0 hidden lg:block"
                    style={{
                      width: "302px",
                      height: "347px",
                      backgroundImage: `url('/banner-pattern.png')`,
                      top: "-30px",
                      right: "-73px",
                    }}
                  />
                  <VideoBtn handleClick={() => setIsOpen(true)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
