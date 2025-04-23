import React from "react";
import { useState } from "react";
import NavMain from "../Components/NavMain";

export default function MainLayouts({ children }) {
  return (
    <>
      {/* <NavMain></NavMain> */}
      <div className="px-6 md:px-10 lg:px-12 bg-gray-950 min-h-screen text-gray-50 font-inter">
        {children}
      </div>
    </>
  );
}
