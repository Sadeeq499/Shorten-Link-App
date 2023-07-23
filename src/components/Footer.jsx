import React from "react";
import Images from "../assets/index";
function Footer() {
  return (
    <footer className="py-16 bg-VeryDarkViolet">
      <div className="flex flex-col items-center justify-between mx-auto  space-y-16 md:mx-24 md:flex-row md:space-y-0 md:items-start">
        {/* logo */}
        <img src={Images.Logo} alt="logo" className="brightness-0 invert" />

        {/* menu container */}
        <div className="flex flex-col  space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* menu 1*/}
          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="mb-5 font-bold text-white hover:text-Cyan capitalize">
              features
            </h2>
            <ul className="flex flex-col items-center space-y-3 w-32 md:items-start">
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Link Shortening
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Branded Links
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Analytics
              </li>
            </ul>
          </div>
          {/* menu 1*/}
          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="mb-5 font-bold text-white hover:text-Cyan capitalize">
              Resources
            </h2>
            <ul className="flex flex-col items-center space-y-3 md:items-start">
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Blog
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Developers
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Support
              </li>
            </ul>
          </div>
          {/* menu 1*/}
          <div className="flex flex-col items-center w-full md:items-start">
            <h2 className="mb-5 font-bold text-white hover:text-Cyan capitalize">
              features
            </h2>
            <ul className="flex flex-col items-center space-y-3 md:items-start">
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                About
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Our Team
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Careers
              </li>
              <li className="text-gray-400 hover:text-Cyan transition-colors duration-300 ease-in-out">
                Contact
              </li>
            </ul>
          </div>
        </div>

        {/* social media */}
        <div className="flex  space-x-5 ">
          <div className="img-hover cursor-pointer">
            <img
              src={Images.IconFacebook}
              alt="facebook"
              className="w-6 h-6 "
            />
          </div>
          <img
            src={Images.IconTwitter}
            alt="twitter"
            className="w-6 h-6 cursor-pointer img-hover"
          />
          <img
            src={Images.IconPinterest}
            alt="pinterest"
            className="w-6 h-6 cursor-pointer img-hover"
          />
          <img
            src={Images.IconInstagram}
            alt="instagram"
            className="w-6 h-6 cursor-pointer img-hover"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
