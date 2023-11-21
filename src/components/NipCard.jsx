import React from "react";

function NipCard({
  icon1,
  icon2,
  title1,
  title2,
  subtitle1,
  subtitle2,
  header,
  content,
  isRow,
}) {
  return (
    <div className="bg-[#F6F6F6] p-10 rounded-xl flex flex-col gap-6 min-h-[350px] justify-between">
      <div className="bg-[#E8E8E8] p-3 rounded-xl">
        <div
          className={`${
            isRow
              ? "flex flex-col justify-center"
              : " flex justify-center items-center"
          }bg-[#ECECEC] rounded-xl p-2 gap-1`}
        >
          <div className="bg-white flex-1 p-2 rounded-xl flex flex-col justify-center items-center">
            <p>{icon1}</p>
            <p className="font-bold">{title1}</p>
            <p className="text-xs text-gray-400">{subtitle1}</p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <p>{icon2}</p>
            <p className="font-bold">{title2}</p>
            <p className="text-xs text-gray-400">{subtitle2}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-bold text-xl">{header}</h3>
        <p className="text-center text-gray-500">{content}</p>
      </div>
    </div>
  );
}

export default NipCard;
