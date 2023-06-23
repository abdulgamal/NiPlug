"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { AuthenticateContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logOut, userInfo } = useContext(AuthenticateContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
    setIsOpen(false);
  };
  return (
    <>
      <nav className="py-5 md:py-10 px-4 flex justify-between items-center container mx-auto">
        <img
          src="https://res.cloudinary.com/dinfpnmrf/image/upload/v1684594826/dukaapp/ymusvqugr2sck88mmp5r.png"
          alt="logo"
          className="h-8"
        />
        {user ? (
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300"
            src={
              userInfo?.image ||
              "https://images.unsplash.com/photo-1682821890455-044ea43d8b57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            }
            alt="Bordered avatar"
          />
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/auth"
              className="text-white bg-[#1d7874] py-1 px-6 rounded-3xl font-bold"
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
        )}
      </nav>
      <div
        className={`${
          !isOpen && "hidden"
        } container mx-auto w-full mb-3 md:w-auto`}
      >
        <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0">
          <li>
            <Link
              href="/profile"
              className="block py-2 pl-3 pr-4 text-[#1d7874] rounded"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/home"
              className="block py-2 pl-3 pr-4 text-[#1d7874] rounded"
            >
              Add Items
            </Link>
          </li>
          <li>
            <span
              onClick={handleLogOut}
              className="block py-2 pl-3 pr-4 text-[#1d7874] rounded cursor-pointer"
            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
