import React from "react";
import Images from "../assets/index";
function FeatureBox() {
  return (
    <section className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        {/* Horizontal LIne */}
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-Cyan md:block"></div>

        {/* vertical Line */}
        <div className="absolute w-3 h-full left-1/2 bg-Cyan md:hidden"></div>

        {/* box1 */}
        <div className="relative flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
          {/* image container */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-VeryDarkViolet">
              <img src={Images.IconBrandRecognition} alt="Brand Recognition" />
            </div>
          </div>
          {/* brand container */}

          <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h3>
          <p className="text-center text-gray-500 md:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        {/* box2 */}
        <div className="relative flex-col p-6 space-y-6  bg-white rounded-lg mt-20 md:mt-10 md:w-1/3">
          {/* image container */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-VeryDarkViolet">
              <img src={Images.IconDetailedRecords} alt="Brand Recognition" />
            </div>
          </div>
          {/* brand container */}

          <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Detailed Records
          </h3>
          <p className="text-center text-gray-500 md:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        {/* box3 */}
        <div className="relative flex-col p-6 space-y-6  bg-white rounded-lg mt-20 md:mt-20 md:w-1/3">
          {/* image container */}
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-VeryDarkViolet">
              <img src={Images.IconFullyCustomizable} alt="Brand Recognition" />
            </div>
          </div>
          {/* brand container */}

          <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Fully Customizable
          </h3>
          <p className="text-center text-gray-500 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureBox;
