"use client";
import Begin from "@/components/begin";
import Business from "@/components/business";
import Wrapper from "@/components/Wrapper";
import { useOnBoardingContext } from "../../../context/OnBoarding";

export const businessPages = [<Begin />, <Business />];

function Onboarding() {
  const { step } = useOnBoardingContext();
  return <Wrapper>{businessPages[step]}</Wrapper>;
}

export default Onboarding;
