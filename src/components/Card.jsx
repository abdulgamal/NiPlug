import Link from "next/link";
import React from "react";

function Card({ product, shop }) {
  return (
    <div>
      <img
        className="object-cover w-full rounded-lg h-96 "
        src={product.img}
        alt=""
      />
      <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
        {product.title}
      </h2>
      <p className="text-lg tracking-wider text-gray-500">
        AccessCode: {product.code}
      </p>
      {shop ? (
        <button className="bg-blue-500 text-white mt-2 px-5 py-1 rounded-2xl w-full md:w-auto">
          Go To Link
        </button>
      ) : (
        <Link
          href={`/profile/${product?.id}`}
          className="bg-blue-500 text-white mt-3 px-5 py-1 rounded-2xl w-full md:w-auto"
        >
          Add To Profile
        </Link>
      )}
    </div>
  );
}

export default Card;
