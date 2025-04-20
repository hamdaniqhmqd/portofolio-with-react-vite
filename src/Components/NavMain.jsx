import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavItemsLink } from "./NavItemsLink";

export default function NavMain() {
  return (
    <nav
      id="navbar-fixed"
      className="w-full absolute top-0 z-50 bg-slate-950/80 backdrop-blur-lg shadow-lg h-fit border-b border-lime-800"
      // className={`w-full relative top-0 z-50 transition-all duration-300 ${
      //   isScrolled
      //     ? "bg-slate-950/80 backdrop-blur-lg shadow-lg"
      //     : "bg-slate-950"
      // }`}
    >
      <div className="max-w-[1440px] flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold text-lime-400 whitespace-nowrap ">
            Gacha Humans
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <NavItemsLink to="/">Home</NavItemsLink>
            </li>
            <li>
              <NavItemsLink to="/quickstart">Quick Start</NavItemsLink>
            </li>
            <li>
              <NavItemsLink to="/documentation">Dokumentasi</NavItemsLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
