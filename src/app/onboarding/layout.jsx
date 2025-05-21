import React from "react";
import ProgressBar from "@/components/progressBar";

function OnbordingLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-WHITE">
        <main className="flex-1 flex justify-center items-center">
          {children}
        </main>
        <ProgressBar />
      </div>
    </>
  );
}

export default OnbordingLayout;
