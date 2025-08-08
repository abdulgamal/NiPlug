import React from "react";

function StudioNav() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="logo.png" className="h-8" alt="Niplug Logo" />
        </div>
        <div className="flex space-x-3 ">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
                >
                  Services
                </a>
              </li>
              {/* <li>
                <a
                  href="#academy"
                  className="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
                >
                  Academy
                </a>
              </li> */}
            </ul>
          </div>
          <a
            href="#contacts"
            className="text-teal-600 bg-[#FBF2B8] hover:bg-[#FBF2B8] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default StudioNav;
