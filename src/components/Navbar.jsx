import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="py-5 md:py-10 px-4 flex justify-between items-center container mx-auto">
      <img
        src="https://paysoko.com/asset/brands/brand_1676528257.png"
        alt="logo"
        className="h-8"
      />
      <div className="flex items-center gap-3">
        <Link
          href="/auth"
          className="bg-[#060D50] text-white py-1 px-6 rounded-3xl"
        >
          Log In
        </Link>
        <Link
          href="/auth"
          className="hidden md:block bg-[#DEDFE8] text-gray-500 py-1 px-6 rounded-3xl"
        >
          Get Started for Free
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
