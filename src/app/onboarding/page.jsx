"use client";
import Begin from "@/components/begin";
import Business from "@/components/business";
import Wrapper from "@/components/Wrapper";
import { useOnBoardingContext } from "../../../context/OnBoarding";
import { useEffect } from "react";

export const businessPages = [
  <Begin key="begin" />,
  <Business key="business" />,
];

export const servicePages = [<Begin key="begin" />];

function Onboarding() {
  const { step, setService, setTotalSteps, businessData } =
    useOnBoardingContext();

  useEffect(() => {
    if (businessData.hasBusiness == true) {
      setTotalSteps(2);
    } else {
      setTotalSteps(1);
    }
  }, [businessData.hasBusiness]);

  useEffect(() => {
    return () => {
      setService("");
    };
  }, []);
  return <Wrapper>{businessPages[step]}</Wrapper>;
}

export default Onboarding;
