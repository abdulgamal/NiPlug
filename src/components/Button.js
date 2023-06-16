import Link from "next/link";
import React from "react";

function Button() {
  return (
    <a
      href="https://earnsoko.ssnapp.com/?Menu=Deals&Deal=48080"
      target="_blank"
      className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-transparent hover:border hover:text-gray-500 bg-[#1d7874] py-3 px-8 rounded-2xl gap-2 my-2"
    >
      Request Access{" "}
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
  );
}

export default Button;
