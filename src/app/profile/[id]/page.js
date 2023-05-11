"use client";
import { cats, products } from "@/app/home/page";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";

function Page() {
  const [slug, setSlug] = useState("dress");
  const [prods, setProds] = useState([]);

  const filteredProds = (slug) => products.filter((p) => p.cat === slug);

  useEffect(() => {
    const data = filteredProds(slug);
    setProds(data);
  }, [slug]);
  return (
    <section className="bg-gray-200 min-h-screen">
      <div className="md:max-w-lg md:mx-auto w-full flex md:px-5 md:py-24 flex-col">
        <img
          className="w-full object-cover object-center md:rounded-t-lg"
          alt="hero"
          src="https://static.wixstatic.com/media/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg/v1/crop/x_73,y_0,w_1850,h_1850/fill/w_375,h_375,al_c,q_375,usm_0.66_1.00_0.01,enc_auto/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg"
        />
        <div className="flex flex-col items-center mt-2 px-4">
          <p className="text-xl font-bold my-2">Tracy Muriti</p>
          <div className="flex items-center mt-3 gap-10">
            <BsFacebook size={24} />
            <BsInstagram size={24} />
            <BsTiktok size={24} />
            <BsTwitter size={24} />
          </div>
          <div className="border border-gray-300 w-full my-5" />
        </div>
        <div className="py-2 border-b border-gray-300 mx-4 pb-4">
          <p className="text-center font-bold mb-3">
            What are you looking for?
          </p>
          <div className="mx-4 flex items-center my-2 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search or type a code"
              className="bg-transparent flex-1 py-1 outline-none"
            />
            <button className="p-1 bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-4 my-4">
          <select
            id="countries_multiple"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="bg-transparent border border-gray-300 text-gray-900 h-16 text-sm rounded-lg outline-none block w-full p-2.5"
          >
            {cats.map((cat) => (
              <option
                className="text-center py-2 mb-1"
                key={cat?.id}
                selected={slug}
                value={cat?.slug}
              >
                {cat?.title}
              </option>
            ))}
          </select>
        </div>
        <div className="my-2">
          <p className="text-center font-bold mb-3">My Recommended Products</p>
          <div className="grid grid-cols-1 gap-8 mt-8 px-4 mb-5">
            {prods.map((product) => (
              <Card key={product?.id} product={product} shop />
            ))}
            {prods.length === 0 && (
              <div className="relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-md sm:p-6 lg:p-8">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 sm:h-8 sm:w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>

                  <h3 className="text-3xl font-bold sm:text-4xl">Oops!!!</h3>
                </div>

                <p className="mt-4 font-medium text-gray-500">
                  No products available at this time
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
