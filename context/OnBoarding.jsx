"use client";
import { businessPages } from "@/app/onboarding/page";
import React, { useContext, useState } from "react";

const OnBoardingContext = React.createContext(null);

function OnBoarding({ children }) {
  const [step, setStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(businessPages.length || 0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDigital, setIsDigital] = useState(false);
  return (
    <OnBoardingContext.Provider
      value={{
        step,
        setStep,
        totalSteps,
        setTotalSteps,
        error,
        setError,
        loading,
        setLoading,
        isDigital,
        setIsDigital,
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
}

export const useOnBoardingContext = () => useContext(OnBoardingContext);

export default OnBoarding;
