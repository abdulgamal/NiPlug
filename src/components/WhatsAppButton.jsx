"use client";
import React from "react";

const WhatsAppButton = ({ phoneNumber = "1234567890", message = "Hello!" }) => {
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M12.04 2C6.49 2 2 6.49 2 12.04c0 2.11.55 4.13 1.6 5.92L2 22l4.2-1.54a10.03 10.03 0 005.84 1.78c5.55 0 10.04-4.49 10.04-10.04S17.59 2 12.04 2zm0 18.39c-1.76 0-3.46-.5-4.94-1.45l-.35-.22-2.48.91.88-2.56-.23-.37A8.032 8.032 0 014.02 12c0-4.43 3.6-8.03 8.03-8.03s8.03 3.6 8.03 8.03-3.6 8.03-8.03 8.03zm4.3-6.07c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.53.12-.15.24-.61.78-.75.94-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.36.1-.47.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.28-.72-1.74-.19-.46-.38-.4-.53-.41h-.45c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.06s.89 2.38 1.02 2.54c.12.16 1.76 2.7 4.27 3.78.6.26 1.07.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.42-.58 1.62-1.13.2-.55.2-1.02.14-1.13-.06-.12-.22-.18-.46-.3z" />
      </svg>
    </button>
  );
};

export default WhatsAppButton;
