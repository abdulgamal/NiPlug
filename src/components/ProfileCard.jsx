"use client";
import Link from "next/link";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function Card({ product }) {
  return (
    <div className="w-full pb-4">
      <img
        className="object-cover w-full rounded-lg h-96"
        src={product?.product?.image_url}
        alt=""
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize truncate">
        {product?.product?.title}
      </h2>
      <p className="text-md tracking-wider text-gray-500 mb-2 truncate">
        AccessCode:{" "}
        <span className="text-xs font-bold">{product?.product?.slug}</span>
      </p>
      <Link
        href={`/business/${product?.product?.id}`}
        className="bg-[#1d7874] text-white px-5 py-1 mb-2 rounded-2xl w-full md:w-auto"
      >
        Go To Link
      </Link>
    </div>
  );
}

export default Card;
