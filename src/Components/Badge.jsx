import React from "react";

export default function Badge({ img, children, className }) {
  return (
    <div
      className={`px-4 py-2 flex justify-center items-center gap-2 bg-gray-900 hover:bg-gray-800 rounded-md ${className}`}>
      <img src={img} alt="" className="h-4" />
      <span className="pointer-events-none text-[14px] text-gray-200 text-justify">
        {children}
      </span>
    </div>
  );
}
