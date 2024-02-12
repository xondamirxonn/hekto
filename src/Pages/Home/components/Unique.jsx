import React from "react";
import Sofa from "../../../assets/sofa2.svg";

export default function Unique() {
  return (
    <div className="bg-violet-100 p-3 mt-20">
      <div className="container-uz flex items-center">
        <img src={Sofa} alt="" />
        <div>
          <h1 className="text-[2.5rem] text-blue-900">
            Unique Features Of leatest & Trending Poducts
          </h1>
          <div className="flex flex-col gap-3">
            <p className="text-gray-400">
              All frames constructed with hardwood solids and laminates
            </p>
            <p className="w-[450px] text-gray-400">
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
            <p className="text-gray-400">
              Arms, backs and seats are structurally reinforced
            </p>
          </div>
          <div className="flex gap-3 items-center">
            {" "}
            <button className="mt-3 bg-red-500 p-2 rounded-sm text-white">
              Add to cart
            </button>
            <div className="flex flex-col mt-3 text-blue-800">
              <small>B&B Italian Sofa </small>
              <small>$32</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
