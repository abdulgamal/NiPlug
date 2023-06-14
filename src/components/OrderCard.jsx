import React from "react";

function OrderCard({ item }) {
  return (
    <div className="shadow-md rounded-md p-3 flex items-center justify-between gap-2">
      <img
        src={item?.prod?.image_url}
        alt={item?.prod?.title}
        className="h-14 w-14 object-cover rounded-md"
      />
      <div>
        <p className="text-sm font-semibold">{item?.name}</p>
        <p className="text-sm font-semibold">{item?.phone}</p>
      </div>
      <p className="text-sm font-semibold">{item?.prod?.title}</p>
    </div>
  );
}

export default OrderCard;
