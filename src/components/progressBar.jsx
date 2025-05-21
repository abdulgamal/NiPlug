"use client";
import React, { useEffect, useState } from "react";
import { useOnBoardingContext } from "../../context/OnBoarding";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProgressBar() {
  const [isLastStep, setIsLastStep] = useState(false);
  const {
    step,
    totalSteps,
    setStep,
    loading,
    error,
    setError,
    handleRegisterBusiness,
  } = useOnBoardingContext();
  const router = useRouter();

  const notify = (message) =>
    toast(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    setIsLastStep(step === totalSteps - 1);
  }, [step, totalSteps]);

  return (
    <div className="container mx-auto p-3.5 mb-5">
      <div className="sm:flex sm:items-center sm:gap-4 mb-4">
        <div className="flex items-center gap-4">
          {step > 0 && (
            <button
              className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#509478] focus:ring-3 focus:outline-hidden cursor-pointer"
              onClick={() => setStep(step - 1)}
            >
              Previous
            </button>
          )}
          <button
            onClick={async () => {
              setError("");
              if (step < totalSteps - 1) {
                setStep(step + 1);
              } else {
                // setIsModalOpen(true);
                const status = await handleRegisterBusiness();
                if (status) {
                  router.push("/niplugacademy");
                  notify("Registration successful. We will be in touch");
                }
              }
            }}
            className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#509478] focus:ring-3 focus:outline-hidden cursor-pointer"
            disabled={loading}
          >
            {loading ? "Loading..." : isLastStep ? "Submit" : "Continue"}
          </button>
        </div>
        {error && (
          <p className="text-red-300 text-xs my-1 font-bold">{error}</p>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-teal-600 h-2.5 rounded-full"
          style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
        ></div>
        <h1 className="text-gray-400 text-xs my-1">
          Chapter {step + 1} of {totalSteps} - The Beginning of Your BIG
          Adventure
        </h1>
      </div>
    </div>
  );
}

export default ProgressBar;
