"use client";
import React, { useState } from "react";

function Business() {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [industry, setIndustry] = useState("");
  const [digitalTool, setDigitalTool] = useState("");
  const [businessType, setBusinessType] = useState("");
  return (
    <>
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Diving Into Your Business
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Now tell me about your business
      </p>
      <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600">
              Business Name
            </label>
            <input
              type="text"
              placeholder="John Enterprise"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-600">
              Business Address
            </label>
            <input
              type="text"
              placeholder="Nairobi CBD"
              value={businessAddress}
              onChange={(e) => setBusinessAddress(e.target.value)}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            You have physical or online business?
          </label>
          <input
            type="text"
            placeholder="physical or online business"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="industry"
            className="block mb-2 text-sm text-gray-600"
          >
            You are positioned In?
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="">Select Industry</option>
            <option value="Fashion">Fashion</option>
            <option value="Grocery Store">Grocery Store</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="digital_tool"
            className="block mb-2 text-sm text-gray-600"
          >
            Digital Tools you want to Learn?
          </label>
          <select
            id="digital_tool"
            value={digitalTool}
            onChange={(e) => setDigitalTool(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="">Select Tool</option>
            <option value="POS">POS</option>
            <option value="Inventory Management">Inventory Management</option>
            <option value="eCommerce">eCommerce</option>
            <option value="Accounting">Accounting</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Social Media">Social Media</option>
          </select>
        </div>

        {/* <div className="w-full mt-4">
            <label className="block mb-2 text-sm text-gray-600">
              Which package would you like to get?
            </label>
            <textarea
              className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div> */}
      </div>
    </>
  );
}

export default Business;
