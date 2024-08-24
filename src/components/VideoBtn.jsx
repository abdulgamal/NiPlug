"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoBtn = ({ handleClick }) => {
  return (
    <button
      className="w-24 h-24 rounded-full bg-white bg-opacity-50 flex justify-center items-center text-white cursor-pointer transition duration-500 hover:bg-teal-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
      aria-label="play Video"
      onClick={handleClick}
    >
      <FaPlay className="left-1 text-4xl" />
    </button>
  );
};

export default VideoBtn;
