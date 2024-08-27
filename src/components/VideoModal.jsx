import React from "react";

function VideoModal({ isOpen, setIsOpen }) {
  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      onClick={() => setIsOpen(false)}
      className={`${
        !isOpen && "hidden"
      } overflow-y-auto bg-black/60 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full`}
    >
      <div className="w-[90vw] h-[80vh]">
        <video className="w-full h-full object-cover max-w-full" controls>
          <source src="/niplug.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default VideoModal;
