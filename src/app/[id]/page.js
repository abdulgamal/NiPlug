"use client";
import ProfileCard from "@/components/ProfileCard";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css/scrollbar";
import "swiper/css";
import { useParams } from "next/navigation";
import { fetchUserDetails, getCategories } from "../../../requests";
import Loading from "@/components/Loading";

function Page() {
  const [slug, setSlug] = useState(39);
  const [prods, setProds] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [code, setCode] = useState("");
  const [links, setLinks] = useState([]);
  const { id } = useParams();

  const filteredProds = (slug) =>
    info?.influencer_products.filter((p) => p.category_id == slug);

  const getDetails = async (name) => {
    const data = {
      username: name,
    };
    setLoading(true);
    try {
      const {
        data: { user },
      } = await fetchUserDetails(data);
      setInfo(user[0]);
      setLinks(user[0]?.links);
      setProds(user[0]?.influencer_products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFilter = () => {
    let data = info?.influencer_products.filter((p) =>
      p.product?.slug.includes(code)
    );
    setProds(data);
    setCode("");
  };

  const fetchCategories = async () => {
    try {
      const {
        data: { categories },
      } = await getCategories();
      setCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };

  function isVideo(string) {
    var videoPattern = /\.(mp4|mov|avi|wmv|flv|mkv|webm)$/i;

    return videoPattern.test(string);
  }

  useEffect(() => {
    const data = filteredProds(slug);
    setProds(data);
  }, [slug]);

  useEffect(() => {
    if (id) {
      getDetails(id);
    }
  }, [id]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (info) {
      localStorage.setItem("userId", info.id);
    }
  }, [info]);

  return (
    <section className="min-h-screen">
      {!loading && info && (
        <div className="md:max-w-lg md:mx-auto w-full flex md:px-5 md:py-24 flex-col md:shadow-lg">
          <div className="w-full">
            {info?.influencer?.background &&
            isVideo(info?.influencer?.background) ? (
              <ReactPlayer
                url={info?.influencer?.background}
                width={"100%"}
                playing
                controls
              />
            ) : (
              <img
                className="w-full object-cover object-center md:rounded-t-lg"
                alt="hero"
                src={
                  info?.image ||
                  "https://static.wixstatic.com/media/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg/v1/crop/x_73,y_0,w_1850,h_1850/fill/w_375,h_375,al_c,q_375,usm_0.66_1.00_0.01,enc_auto/9ce014_17143136f6fa44d39c7ca66a64576bff~mv2.jpg"
                }
              />
            )}
          </div>
          <div className="flex flex-col items-center mt-2 px-4">
            <p className="text-xl font-bold text-[#1d7874] my-2">
              {info?.username}
            </p>
            <div className="flex items-center mt-3 gap-10">
              <a
                href={info?.influencer?.facebook || "https://www.facebook.com/"}
                target="_blank"
              >
                <BsFacebook size={24} />
              </a>
              <a
                href={
                  info?.influencer?.instagram || "https://www.instagram.com/"
                }
                target="_blank"
              >
                <BsInstagram size={24} />
              </a>
              <a
                href={info?.influencer?.tiktok || "https://www.tiktok.com/"}
                target="_blank"
              >
                <BsTiktok size={24} />
              </a>
              <a
                href={info?.influencer?.twitter || "https://twitter.com/"}
                target="_blank"
              >
                <BsTwitter size={24} />
              </a>
            </div>
            <div className="border border-gray-300 w-full my-5" />
          </div>
          <div className="py-2 border-b border-gray-300 mx-4 pb-4">
            {links.length > 0 && (
              <div>
                <p className="text-center font-bold text-[#1d7874] mb-3">
                  Other Links
                </p>
                <div className="flex flex-wrap gap-3 items-center border-b border-gray-300 mb-2 pb-3">
                  {links.map((link) => (
                    <a
                      key={link?.id}
                      href={link?.link}
                      target="_blank"
                      className="bg-[#1d7874] flex items-center text-white px-3 py-1 rounded-2xl gap-1"
                    >
                      {link?.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
            <p className="text-center font-bold text-[#1d7874] mb-3">
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button
                disabled={!code}
                className="p-1 bg-[#1d7874] rounded-md"
                onClick={handleFilter}
              >
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
          {categories?.length > 0 && (
            <div className="px-4 my-4">
              <select
                id="countries_multiple"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="bg-transparent border border-gray-300 text-gray-900 h-16 text-sm rounded-lg outline-none block w-full p-2.5"
              >
                {categories.map((cat) => (
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
          <div className="my-2">
            <p className="text-center text-[#1d7874] font-bold mb-3">
              My Recommended Products
            </p>
            {prods?.length > 0 && (
              <div className="mt-8 px-4 mb-8">
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1.5}
                  scrollbar={{ draggable: true }}
                  modules={[Scrollbar]}
                >
                  {prods.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProfileCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            {prods?.length === 0 && (
              <div className="grid grid-cols-1 gap-8 mt-8 px-4 mb-5">
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
              </div>
            )}
          </div>
        </div>
      )}
      {loading && <Loading />}
    </section>
  );
}

export default Page;
