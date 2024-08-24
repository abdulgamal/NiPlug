"use client";
import React from "react";

function ToggleBtn({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="flex items-center font-bold text-white w-full justify-center md:w-auto hover:bg-teal-700 transform duration-75 bg-teal-500 py-3 px-8 rounded-full gap-2 my-2"
    >
      Create Plugs
    </button>
  );
}

export default ToggleBtn;
