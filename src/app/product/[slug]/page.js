"use client";
import { products } from "@/app/home/page";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { getCatProducts, getCatSubs } from "../../../../requests";
import { AuthenticateContext } from "../../../../context/AuthContext";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import { ToastContainer } from "react-toastify";

export default function Product() {
  const { slug } = useParams();
  const router = useRouter();
  const { user } = useContext(AuthenticateContext);
  const [prods, setProds] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subs, setSubs] = useState([]);
  const [cat, setCat] = useState("");

  const fetchProducts = async (id) => {
    setLoading(true);
    try {
      const {
        data: { products },
      } = await getCatProducts(id);
      const {
        data: { sub_categories },
      } = await getCatSubs(id);
      setSubs(sub_categories);
      setProds(products);
      setProducts(products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const filterProducts = (val) => {
    if (val === "All") {
      return products;
    } else {
      return products?.filter(
        (product) => product?.subcategories[0]?.id == val
      );
    }
  };

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  useEffect(() => {
    const data = filterProducts(cat);
    setProds(data);
  }, [cat]);

  useEffect(() => {
    fetchProducts(slug);
  }, [slug]);

  return (
    <>
      <Navbar />
      <section className="bg-white min-h-[85vh]">
        <ToastContainer />
        <div className="container px-6 py-5 mx-auto">
          <p className="mt-4 text-center text-gray-500 font-bold">
            Choose products you want to promote on your profile page.
          </p>
          {subs?.length > 0 && (
            <div className="px-4 my-4 md:max-w-lg md:mx-auto">
              <select
                id="countries_multiple"
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="bg-transparent border border-gray-300 text-gray-900 h-16 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                <option className="text-center py-2 mb-1" value="All">
                  Choose subcategory
                </option>
                {subs.map((cat) => (
                  <option
                    className="text-center py-2 mb-1"
                    key={cat?.id}
                    value={cat?.id}
                  >
                    {cat?.title}
                  </option>
                ))}
              </select>
            </div>
          )}
          {loading && <Loading />}
          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 md:gap-8">
            {prods?.map((product) => (
              <Card key={product?.id} product={product} token={user?.token} />
            ))}
            {prods?.length === 0 && !loading && <NotFound />}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
