"use client";
import { products } from "@/app/home/page";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { getCatProducts } from "../../../../requests";
import { AuthenticateContext } from "../../../../context/AuthContext";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";

export default function Product() {
  const { slug } = useParams();
  const router = useRouter();
  const { user } = useContext(AuthenticateContext);
  const [prods, setProds] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (id) => {
    setLoading(true);
    try {
      const { products } = await getCatProducts(id);
      setProds(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!user) {
  //     router.replace("/");
  //   }
  // }, [user]);

  useEffect(() => {
    fetchProducts(slug);
  }, [slug]);

  return (
    <>
      <Navbar />
      <section className="bg-white min-h-[85vh]">
        <div className="container px-6 py-5 mx-auto">
          <p className="mt-4 text-center text-gray-500 font-bold">
            Choose products you want to promote on your profile page.
          </p>
          {loading && <Loading />}
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {prods?.map((product) => (
              <Card key={product?.id} product={product} token={user?.token} />
            ))}
            {prods.length === 0 && <NotFound />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
