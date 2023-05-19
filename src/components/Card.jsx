"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToProfile } from "../../requests";

function Card({ product, shop, token }) {
  const [loading, setLoading] = useState(false);
  const handleAdd = async (item) => {
    let values = {
      product_id: item.id,
      category_id: item.category_id,
      sub_category_id: item.subcategories[0]?.id,
    };
    try {
      setLoading(true);
      const response = await addToProfile(values, token);
      if (response.code == 200) {
        notify("Product added successfully");
        setLoading(false);
      } else {
        notify(response.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="w-full pb-4">
      <img
        className="object-cover w-full rounded-lg h-96"
        src={product?.image_url}
        alt=""
      />
      <div className="px-2">
        <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize truncate">
          {product?.title}
        </h2>
        <p className="text-md tracking-wider text-gray-500 mb-2 truncate">
          AccessCode: <span className="text-xs font-bold">{product?.slug}</span>
        </p>
        {shop ? (
          <Link
            href="/business/loafer"
            className="bg-[#1d7874] text-white px-5 py-1 mb-2 rounded-2xl w-full md:w-auto"
          >
            Go To Link
          </Link>
        ) : (
          <button
            onClick={() => handleAdd(product)}
            className="bg-[#1d7874] inline-flex items-center justify-center gap-4 text-white px-5 py-1 rounded-2xl w-full md:w-auto"
          >
            {loading && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 animate-spin"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            )}
            Add To Profile
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
