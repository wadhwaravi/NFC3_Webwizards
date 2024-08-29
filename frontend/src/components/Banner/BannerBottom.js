import React from "react";
import { FaShippingFast, FaRegClock, FaShieldAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
      <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
        {/* Fast Process */}
        <div className="flex items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 text-blue-500">
            <FaShippingFast />
          </span>
          <p className="text-xl text-lightText text-base">
            Fast Process
          </p>
        </div>

        {/* No Line */}
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 text-green-500">
            <FaRegClock />
          </span>
          <p className="text-xl text-lightText text-base">
            No Line
          </p>
        </div>

        {/* Quality Assurance */}
        <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
          <span className="text-5xl text-center w-10 text-yellow-500">
            <FaShieldAlt />
          </span>
          <p className="text-xl text-lightText text-base">
            Quality Assurance
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;
