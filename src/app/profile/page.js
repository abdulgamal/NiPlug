"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

function Page() {
  const [isActive, setIsActive] = useState("Profile");
  return (
    <>
      <Navbar />
      <section className="bg-white min-h-screen">
        <div className="md:max-w-lg md:mx-auto w-full flex px-4 md:py-24 flex-col">
          <div className="">
            <h2 className="text-[#060D50] font-bold text-xl mb-2">
              Welcome to NiPlug
            </h2>
            <p className="text-gray-500 text-sm">Performance overview</p>
          </div>

          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex -mb-px">
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Profile"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Profile")}
                >
                  Profile
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Product"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Product")}
                >
                  Products
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Service"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Service")}
                >
                  Services
                </span>
              </li>
              <li className="mr-2">
                <span
                  className={`${
                    isActive === "Campaign"
                      ? "border-[#060D50] text-[#060D50]"
                      : "border-transparent"
                  } inline-block p-4 border-b-2  rounded-t-lg`}
                  onClick={() => setIsActive("Campaign")}
                >
                  Campaigns
                </span>
              </li>
            </ul>
          </div>
          <div className="my-5">
            {isActive === "Profile" && (
              <form>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      User name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Full name
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm password
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#060D50] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#060D50] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (1234567890)
                    </label>
                  </div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600"
                    htmlFor="file_input"
                  >
                    Upload file
                  </label>
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                  />
                  <p
                    className="mt-1 text-xs mb-3 text-gray-500"
                    id="file_input_help"
                  >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                  </p>
                </div>
                <button
                  type="submit"
                  className="text-white bg-[#060D50] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Update Profile
                </button>
              </form>
            )}
            {isActive === "Product" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3 col-span-2">
                  <p className="text-center font-semibold">
                    Total number of products
                  </p>
                  <p className="font-bold text-xl">40</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">Products sold</p>
                  <p className="font-bold text-xl">20</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">Total sales</p>
                  <p className="font-bold text-xl">20</p>
                </div>
              </div>
            )}
            {isActive === "Service" && (
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Total number of services
                  </p>
                  <p className="font-bold text-xl">30</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Services links clicked
                  </p>
                  <p className="font-bold text-xl">24</p>
                </div>
              </div>
            )}
            {isActive === "Campaign" && (
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Total number of campaigns
                  </p>
                  <p className="font-bold text-xl">50</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex flex-col justify-center items-center gap-3">
                  <p className="text-center font-semibold">
                    Campaign links clicked
                  </p>
                  <p className="font-bold text-xl">34</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
