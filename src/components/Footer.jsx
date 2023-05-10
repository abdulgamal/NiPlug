import React from "react";

function Footer() {
  return (
    <footer className="bg-white md:rounded-lg shadow m-4 container mx-auto">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2023{" "}
          <a href="#" className="hover:underline">
            NiPlug™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
