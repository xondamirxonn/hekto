import React from "react";
import Check from "./../../../assets/icon/check";
import sofa from '../../../assets/sofa3.svg'
export default function Discount() {
  return (
    <div className="container-uz pt-20">
      <h1 className="text-4xl text-center font-bold text-blue-900">
        Discount Item
      </h1>

      <div className="flex gap-3 justify-center mt-2">
        <p className="text-red-500 border-b-2 border-red-500">Wood Chair</p>
        <p>Plastic Chair</p>
        <p>Sofa Collection</p>
      </div>
      <div className="flex  items-center">
        <div>
          <h2 className="mt-8 font-bold text-3xl text-blue-900">
            20% Discount Of All Products
          </h2>
          <p className="text-red-400 text-2xl mt-3">Eams Sofa Compact</p>

          <p className="text-xl text-gray-400 mt-2 w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>

          <div className="grid grid-cols-2 mt-4">
            <div className="flex gap-3 items-center">
              <Check />{" "}
              <span className="text-gray-400">Material expose like metals</span>
            </div>
            <div className="flex gap-3 items-center">
              <Check />{" "}
              <span className="text-gray-400">
                Clear lines and geomatric figures
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Check />{" "}
              <span className="text-gray-400">Simple neutral colours.</span>
            </div>
            <div className="flex gap-3 items-center">
              <Check />{" "}
              <span className="text-gray-400">Material expose like metals</span>
            </div>
          </div>

          <button className="bg-red-400 px-6 py-3 text-white rounded-sm mt-5">
            Shop Now
          </button>
        </div>

        <div>
          <img src={sofa} alt="" />
        </div>
      </div>
    </div>
  );
}
