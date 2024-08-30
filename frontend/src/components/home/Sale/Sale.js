import React from "react";
import { ShoppingCartIcon, CheckCircleIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { saleImgTwo, saleImgThree } from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 px-4 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
      {/* Container for Steps */}
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto gap-8">
        {/* Step 1 */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center bg-[#f3f3f3] text-black rounded-lg shadow-lg p-4">
          <div className="w-full mb-4 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <ShoppingCartIcon className="w-full h-full text-gray-600" />
            </div>
          </div>
          <div className="w-full text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Step 1: Add to Cart</h2>
            <p className="text-base md:text-lg mb-4">
              Select the ration items as per your limit and add them to your cart.
            </p>
            <div className="mt-4">
              <a href="/cart" className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Arrow between Step 1 and Step 2 */}
        <div className="hidden md:flex items-center">
          <ArrowRightIcon className="w-8 h-8 text-gray-600" />
        </div>

        {/* Step 2 */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center bg-[#f3f3f3] text-black rounded-lg shadow-lg p-4">
          <div className="w-full mb-4 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <CheckCircleIcon className="w-full h-full text-gray-600" />
            </div>
          </div>
          <div className="w-full text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Step 2: Verify Ration Card</h2>
            <p className="text-base md:text-lg mb-4">
              Verify your ration card information before proceeding.
            </p>
            <div className="mt-4">
              <a href="/verify" className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600">
                Verify Now
              </a>
            </div>
          </div>
        </div>

        {/* Arrow between Step 2 and Step 3 */}
        <div className="hidden md:flex items-center">
          <ArrowRightIcon className="w-8 h-8 text-gray-600" />
        </div>

        {/* Step 3 */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center bg-[#f3f3f3] text-black rounded-lg shadow-lg p-4">
          <div className="w-full mb-4 flex items-center justify-center">
            <div className="w-24 h-24 flex items-center justify-center">
              <MapPinIcon className="w-full h-full text-gray-600" />
            </div>
          </div>
          <div className="w-full text-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Step 3: Pick Up Ration</h2>
            <p className="text-base md:text-lg mb-4">
              Visit your nearby store to collect the ration you ordered.
            </p>
            <div className="mt-4">
              <a href="/schedule" className="inline-block px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600">
                Set Time
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
