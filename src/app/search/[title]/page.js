"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsQuery } from "../../../../requests";
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import Link from "next/link";
import Footer from "@/components/Footer";

function SearchPage({ params }) {
  const { title } = params;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const fetchProducts = async (v) => {
    const value = {
      q: v,
    };
    try {
      const { data } = await fetchProductsQuery(value);
      setProducts(data?.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(title);
  }, [title]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container px-6 pb-10 mx-auto min-h-[90vh]">
        {loading && <Loading />}
        {products?.length === 0 && !loading && <NotFound />}
        {products?.length > 0 && (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product?.prd_id} className="w-full pb-4">
                <img
                  className="object-cover w-full rounded-lg h-96"
                  src={product?.img_url}
                  alt=""
                />
                <h2 className="my-3 text-xl font-semibold text-gray-800 capitalize truncate">
                  {product?.title}
                </h2>
                <Link
                  href={`/business/${product?.prd_id}`}
                  className="bg-[#1d7874] text-white px-5 py-1 mb-2 rounded-2xl w-full md:w-auto"
                >
                  Go To Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
