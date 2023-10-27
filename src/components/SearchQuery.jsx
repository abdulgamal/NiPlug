"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsQuery } from "../../requests";
import Link from "next/link";

function SearchQuery() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex items-center mt-4 gap-2 border border-[#d4af37] rounded-md p-1">
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
        placeholder="Search for a product..."
        className="bg-transparent flex-1 py-1 outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <Link href={`/search/${query}`} className="p-1 bg-[#1d7874] rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Link>
      )}
    </div>
  );
}

export default SearchQuery;
