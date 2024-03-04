import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <img
            src="https://res.cloudinary.com/dinfpnmrf/image/upload/v1684594826/dukaapp/ymusvqugr2sck88mmp5r.png"
            alt="logo"
            className="h-8"
          />
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Start collecting money, feedbacks, emails, anonymous notes and
              more.
            </p>
          </div>
        </div>
        <div>
          <p className="mt-4 text-sm text-gray-500">JOIN US TODAY! 🔥</p>
          <div className="p-2 border border-gray-200 shadow-sm flex items-center rounded-xl mt-2">
            <input
              type="email"
              id="UserEmail"
              placeholder="Enter your email"
              className="w-full rounded-md sm:text-sm outline-none bg-transparent"
            />
            <div className="bg-[#5DC2D3] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600 text-center">
          Copyright © {year} Niplug. All rights reserved. Powered by PaySoko
          Systems, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
