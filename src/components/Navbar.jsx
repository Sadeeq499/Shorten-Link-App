import React from "react";
import Images from "../assets/index";
function Navbar() {
  return (
    <>
      {/* navbar */}
      <nav className="flex justify-between items-center p-10 ">
        {/* buttons and menu */}
        <div className="flex flex-row justify-between ml-16 ">
          {/* logo an links */}
          <div className="flex flex-row  space-x-24">
            {/* logo */}
            <img src={Images.Logo} alt="logo" />

            {/* links */}
            <div className="hidden  md:flex md:flex-row md:justify-between md:items-center md:space-x-10">
              <a
                href="#"
                className=" text-2xl text-gray-500 hover:text-gray-950"
              >
                Feature
              </a>
              <a
                href="#"
                className="text-2xl text-gray-500 hover:text-gray-950"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-2xl text-gray-500 hover:text-gray-950"
              >
                Resources
              </a>
            </div>
          </div>
        </div>
        {/* login and sign up buttons */}
        <div className="sm:hidden md:flex flex-row space-x-4  mr-24 lg:block">
          <button className=" text-gray-400 font-bold text-2xl py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-Cyan hover:bg-cyan-500 text-white font-bold py-4 px-6 rounded-full">
            Sign Up
          </button>
        </div>
        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className="block hamburger lg:hidden focus:outline-none"
          type="button"
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </button>

        {/* <!-- Mobile Menu --> */}
        <div
          id="menu"
          className="absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="#" className="w-full text-center">
              Features
            </a>
            <a href="#" className="w-full text-center">
              Pricing
            </a>
            <a href="#" className="w-full text-center">
              Resources
            </a>
            <a
              href="#"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="#"
              className="w-full py-3 text-center rounded-full bg-cyan"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
