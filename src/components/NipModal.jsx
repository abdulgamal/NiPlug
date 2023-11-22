import React from "react";

function NipModal({ isToggle, setIsToggle }) {
  return (
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      onClick={() => setIsToggle(false)}
      className={`${
        !isToggle && "hidden"
      } overflow-y-auto bg-black/60 overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow p-10">
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-xl text-gray-700 mb-2">
              Select Plug Type
            </h2>
            <p className="text-center text-gray-400 text-xs">
              Discover the world of Plugs to get connected effortlessly
            </p>
          </div>
          <div className="bg-[#F6F6F6] p-3 my-3 rounded-xl flex flex-col gap-3">
            <div className="bg-[#E7E7E7] p-3 rounded-lg flex items-center justify-center gap-2">
              <a href="https://app.niplug.com/" target="_blank">
                <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl">
                  <p>🔌</p>
                  <p className="font-semibold text-center text-gray-600">
                    Influencer Plugs
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    Get Influencer Plugs
                  </p>
                </div>
              </a>
              <a href="https://advertising.niplug.com/" target="_blank">
                <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl">
                  <p>🔌</p>
                  <p className="font-semibold text-center text-gray-600">
                    Ad Plugs
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    Get Ad Plugs
                  </p>
                </div>
              </a>
            </div>
            <div className="bg-[#E7E7E7] p-3 rounded-lg flex items-center justify-center gap-2">
              <a href="https://niplug.com/discover" target="_blank">
                <div className="bg-white p-2 flex flex-col justify-center items-center rounded-xl">
                  <p>🔌</p>
                  <p className="font-semibold text-center text-gray-600">
                    Entrepreneurs Plugs
                  </p>
                  <p className="text-xs text-gray-400 text-center">
                    Get Entrepreneurs Plugs
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NipModal;
