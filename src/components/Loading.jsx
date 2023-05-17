import React from "react";
import { RotatingLines } from "react-loader-spinner";

function Loading() {
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center">
      <RotatingLines
        strokeColor="#1d7874"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
}

export default Loading;
