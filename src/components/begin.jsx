"use client";
import React, { useState } from "react";
import { useOnBoardingContext } from "../../context/OnBoarding";

function Begin() {
  const { businessData, setBusinessData } = useOnBoardingContext();
  const [name, setName] = useState(businessData?.firstName || "");
  const [lastName, setLastName] = useState(businessData?.lastName || "");
  const [email, setEmail] = useState(businessData?.email || "");
  const [phone, setPhone] = useState(businessData?.phone || "");
  //   const [subject, setSubject] = useState("");
  //   const [message, setMessage] = useState("");
  return (
    <>
      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Lets Begin
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Tell me a little about yourself
      </p>
      <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
        <div className="-mx-2 md:items-center md:flex">
          <div className="flex-1 px-2">
            <label className="block mb-2 text-sm text-gray-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="John "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }));
              }}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="flex-1 px-2 mt-4 md:mt-0">
            <label className="block mb-2 text-sm text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                setBusinessData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }));
              }}
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Email address
          </label>
          <input
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setBusinessData((prev) => ({ ...prev, email: e.target.value }));
            }}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2 text-sm text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="0712345678"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              setBusinessData((prev) => ({ ...prev, phone: e.target.value }));
            }}
            className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        {/* <div className="mt-4">
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <select
              id="underline_select"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option value="" selected>
                Choose a category
              </option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Dance">Dance</option>
              <option value="DJ">DJ</option>
              <option value="Tech Enablement">Tech Enablement</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div> */}

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

export default Begin;
