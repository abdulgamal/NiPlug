import React from "react";

function ServicesCard({ imageUrl, title }) {
  return (
    <a href="#contacts" className="block">
      <img
        alt=""
        src={imageUrl}
        class="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
      />

      <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong class="font-medium">{title}</strong>

        {/* <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

        <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p> */}
      </div>
    </a>
  );
}

export default ServicesCard;
