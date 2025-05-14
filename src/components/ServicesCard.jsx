"use client";
import Link from "next/link";
import React from "react";
import { useOnBoardingContext } from "../../context/OnBoarding";

function ServicesCard({ imageUrl, title }) {
  const { setService } = useOnBoardingContext();
  return (
    <Link
      href="/onboarding"
      className="block"
      onClick={() => setService(title)}
    >
      <img
        alt=""
        src={imageUrl}
        class="h-56 w-full rounded-tr-3xl rounded-bl-3xl object-cover sm:h-64 lg:h-72"
      />

      <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
        <strong class="font-medium">{title}</strong>
      </div>
    </Link>
  );
}

export default ServicesCard;
