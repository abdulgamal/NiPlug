import React from "react";
import OnBoarding from "../../../context/OnBoarding";
import ProgressBar from "@/components/progressBar";

function OnbordingLayout({ children }) {
  return (
    <OnBoarding>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">{children}</main>
        <ProgressBar />
      </div>
    </OnBoarding>
  );
}

export default OnbordingLayout;
