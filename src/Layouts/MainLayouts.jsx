import React from "react";
import { useState } from "react";
import NavMain from "../Components/NavMain";

export default function MainLayouts({ children }) {
  return (
    <>
      <div className="px-16 bg-gray-950 min-h-screen text-gray-50 font-inter">
        {children}
      </div>
    </>
  );
}
