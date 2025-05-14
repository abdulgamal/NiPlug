"use client";
import { businessPages } from "@/app/onboarding/page";
import axios from "axios";
import React, { useContext, useState } from "react";

const OnBoardingContext = React.createContext(null);
const initialBusiness = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  businessName: "",
  businessAddress: "",
  industry: "",
  businessPremise: "",
  toolToLearn: "",
  businessEmail: "",
  businessPhone: "",
  businessWebsite: "",
  hasBusiness: true,
};

function OnBoarding({ children }) {
  const [service, setService] = useState(null);
  const [step, setStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isDigital, setIsDigital] = useState(false);
  const [businessData, setBusinessData] = useState(initialBusiness);

  const handleRegisterBusiness = async () => {
    let obj = {
      name: `${businessData.firstName} ${businessData.lastName}`,
      email: businessData.email,
      phone: businessData.phone,
      businessName: businessData.businessName || businessData.firstName,
      businessAddress: businessData.businessAddress || "Nairobi CBD",
      industry: businessData.industry || "Fashion",
      businessPremise: businessData.businessPremise,
      toolToLearn: service ?? businessData.toolToLearn,
      businessEmail: businessData.businessEmail || businessData.email,
      businessPhone: businessData.businessPhone || businessData.phone,
      website: businessData.businessWebsite
        ? businessData.businessWebsite.startsWith("http://") ||
          businessData.businessWebsite.startsWith("https://")
          ? businessData.businessWebsite
          : `https://${businessData.businessWebsite}`
        : "",
      zipCode: "00100",
      month: 4,
      day: 4,
      year: 2002,
      ethnicity: "African",
      gender: "male",
      state: "Nairobi",
      ref_code: "123456",
      password: "Niplug001",
      password_confirmation: "Niplug001",
      type: "trial",
      plan: "1",
      ba_email: "hr@paysokosystems.com",
    };
    setLoading(true);
    try {
      const response = await axios.post(
        "https://test.paysokoerp.com/api/business-register",
        obj
      );
      setBusinessData(initialBusiness);
      return true;
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

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
        businessData,
        setBusinessData,
        handleRegisterBusiness,
        service,
        setService,
      }}
    >
      {children}
    </OnBoardingContext.Provider>
  );
}

export const useOnBoardingContext = () => useContext(OnBoardingContext);

export default OnBoarding;
