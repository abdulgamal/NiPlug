"use client";
import React, { useState } from "react";
import { useOnBoardingContext } from "../../context/OnBoarding";

function Business() {
  const { businessData, setBusinessData, isDigital } = useOnBoardingContext();
  const [businessName, setBusinessName] = useState(
    businessData?.businessName || ""
  );
  const [businessAddress, setBusinessAddress] = useState(
    businessData?.businessAddress || ""
  );
  const [industry, setIndustry] = useState(businessData?.industry || "");
  const [digitalTool, setDigitalTool] = useState(
    businessData?.toolToLearn || ""
  );
  const [businessType, setBusinessType] = useState(
    businessData?.businessPremise || ""
  );
  const [businessEmail, setBusinessEmail] = useState(
    businessData?.businessEmail || ""
  );
  const [businessPhone, setBusinessPhone] = useState(
    businessData?.businessPhone || ""
  );
  const [businessWebsite, setBusinessWebsite] = useState(
    businessData?.businessWebsite || ""
  );

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
              onChange={(e) => {
                setBusinessName(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  businessName: e.target.value,
                }));
              }}
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
              onChange={(e) => {
                setBusinessAddress(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  businessAddress: e.target.value,
                }));
              }}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Business Email
          </label>
          <input
            type="email"
            placeholder="abc@example.com"
            value={businessEmail}
            onChange={(e) => {
              setBusinessEmail(e.target.value);
              setBusinessData((prev) => ({
                ...prev,
                businessEmail: e.target.value,
              }));
            }}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Business Phone
          </label>
          <input
            type="text"
            placeholder="0712345678"
            value={businessPhone}
            onChange={(e) => {
              const newValue = e.target.value.replace(/[^0-9.]/g, "");
              setBusinessPhone(newValue);
              setBusinessData((prev) => ({
                ...prev,
                businessPhone: newValue,
              }));
            }}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Business Website
          </label>
          <input
            type="text"
            placeholder="abc.com"
            value={businessWebsite}
            onChange={(e) => {
              setBusinessWebsite(e.target.value);
              setBusinessData((prev) => ({
                ...prev,
                businessWebsite: e.target.value,
              }));
            }}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Do you operate a physical or online business, or both?
          </label>
          <select
            id="digital_tool"
            value={businessType}
            onChange={(e) => {
              setBusinessType(e.target.value);
              setBusinessData((prev) => ({
                ...prev,
                businessPremise: e.target.value,
              }));
            }}
            className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="">Select</option>
            <option value="physical business">Physical business</option>
            <option value="online business">Online business</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="industry"
            className="block mb-2 text-sm text-gray-600"
          >
            Which industry do you operate in?
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => {
              setIndustry(e.target.value);
              setBusinessData((prev) => ({
                ...prev,
                industry: e.target.value,
              }));
            }}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="">Select Industry</option>
            <option value="Fashion">Fashion</option>
            <option value="Grocery Store">Grocery Store</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Retail & Wholesale">Retail & Wholesale</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Agriculture & Agribusiness">
              Agriculture & Agribusiness
            </option>
            <option value="Healthcare & Pharmaceutical">
              Healthcare & Pharmaceutical
            </option>
            <option value="Education & Institutions">
              Education & Institutions
            </option>
            <option value="Real Estate & Property Management">
              Real Estate & Property Management
            </option>
            <option value="Construction & Engineering">
              Construction & Engineering
            </option>
            <option value="Hospitality & Tourism">Hospitality & Tourism</option>
            <option value="Logistics & Transportation">
              Logistics & Transportation
            </option>
            <option value="Electronics & Gadgets">Electronics & Gadgets</option>
            <option value="Furniture & Home Decor">
              Furniture & Home Decor
            </option>
          </select>
        </div>

        {isDigital ? (
          <div className="mt-4">
            <label
              htmlFor="digital_tool"
              className="block mb-2 text-sm text-gray-600"
            >
              Which digital tools are you interested in learning?
            </label>
            <select
              id="digital_tool"
              value={digitalTool}
              onChange={(e) => {
                setDigitalTool(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  toolToLearn: e.target.value,
                }));
              }}
              className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
        ) : (
          <div className="mt-4">
            <label
              htmlFor="digital_tool"
              className="block mb-2 text-sm text-gray-600"
            >
              Which software programs would you be most interested in learning?
            </label>
            <select
              id="digital_tool"
              value={digitalTool}
              onChange={(e) => {
                setDigitalTool(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  toolToLearn: e.target.value,
                }));
              }}
              className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="">Select Tool</option>
              <option value="Adobe Illustrator">Adobe Illustrator</option>
              <option value="Adobe in Design">Adobe in Design</option>
              <option value="Adobe Photoshop">Adobe Photoshop</option>
              <option value="Corel Draw">Corel Draw</option>
              <option value="Microsoft Publisher">Microsoft Publisher</option>
              <option value="Premier Pro">Premier Pro</option>
              <option value="CapCut">CapCut</option>
              <option value="After Effects">After Effects</option>
              <option value="DaVinci Resolve">DaVinci Resolve</option>
              <option value="Final Cut">Final Cut</option>
            </select>
          </div>
        )}

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
