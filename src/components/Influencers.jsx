"use client";
import React, { useEffect, useState } from "react";
import Search from "./Search";
import { getInfluencers } from "../../requests";
import Loading from "./Loading";
import Link from "next/link";
import NotFound from "./NotFound";

function Influencers() {
  const [accounts, setAccounts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(9);
  const [skip, setSkip] = useState(18);

  const fallback =
    "https://cdn.vectorstock.com/i/preview-1x/63/42/avatar-photo-placeholder-icon-design-vector-30916342.webp";

  const goNext = () => {
    setInitial((prev) => prev + 9);
    setSkip((prev) => prev + 9);
  };

  const goBack = () => {
    setInitial((prev) => prev - 9);
    setSkip((prev) => prev - 9);
  };

  function shuffleArray(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const fetchData = async () => {
    try {
      const {
        data: { users },
      } = await getInfluencers();
      const shuffledUsers = shuffleArray(users);
      setAccounts(shuffledUsers);
      setProducts(shuffledUsers);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-white" id="influencers">
      <div className="container px-6 py-1 mx-auto">
        <h1 className="text-xl font-semibold text-center text-[#1d7874] capitalize">
          NiPlug Influencers
        </h1>
        <Search
          setLoading={setLoading}
          setAccounts={setAccounts}
          products={products}
          setInitial={setInitial}
          setSkip={setSkip}
        />
        {loading && <Loading />}
        {accounts.length > 0 && (
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            {accounts.slice(initial, skip).map((account) => (
              <div
                className="flex items-end overflow-hidden bg-cover rounded-lg h-96"
                style={{
                  backgroundImage: `url(${account?.image || fallback})`,
                }}
                key={account?.id}
              >
                <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60">
                  <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize">
                    {account?.username}
                  </h2>
                  <Link
                    href={`/${account?.username}`}
                    className="mt-2 text-lg tracking-wider text-blue-500 uppercase"
                  >
                    Visit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {accounts.length > 9 && (
          <div className="flex flex-col items-center my-5">
            <span className="text-sm text-gray-700">
              Showing
              <span className="font-semibold text-gray-900">
                {" "}
                {initial + 1}{" "}
              </span>{" "}
              to
              <span className="font-semibold text-gray-900">
                {" "}
                {skip > accounts.length ? accounts.length : skip}{" "}
              </span>
              of
              <span className="font-semibold text-gray-900">
                {" "}
                {accounts.length}{" "}
              </span>
              Entries
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button
                disabled={initial === 0}
                onClick={goBack}
                className="inline-flex disabled:bg-gray-400 disabled:cursor-not-allowed items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a href="#influencers">Prev</a>
              </button>
              <button
                onClick={goNext}
                disabled={skip >= accounts.length}
                className="inline-flex disabled:bg-gray-400 disabled:cursor-not-allowed  items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900"
              >
                <a href="#influencers">Next</a>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        )}
        {accounts.length === 0 && !loading && <NotFound influencer />}
      </div>
    </section>
  );
}

export default Influencers;
