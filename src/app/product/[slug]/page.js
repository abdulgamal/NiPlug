"use client";
import { products } from "@/app/home/page";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Product() {
  const { slug } = useParams();
  const [prods, setProds] = useState([]);

  const filteredProds = (slug) => products.filter((p) => p.cat === slug);

  useEffect(() => {
    const data = filteredProds(slug);
    setProds(data);
  }, [slug]);
  return (
    <>
      <Navbar />
      <section className="bg-white min-h-[85vh]">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
            {slug}
          </h1>

          <p className="mt-4 text-center text-gray-500">
            Choose products you want to promote on your profile page.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {prods.map((product) => (
              <Card key={product?.id} product={product} />
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
      </section>
      <Footer />
    </>
  );
}
