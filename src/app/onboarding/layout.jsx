import React from "react";
import ProgressBar from "@/components/progressBar";

function OnbordingLayout({ children }) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <main className="flex-1">{children}</main>
        <ProgressBar />
      </div>
    </>
  );
}

export default OnbordingLayout;
