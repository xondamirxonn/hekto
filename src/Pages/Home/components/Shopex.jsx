import React from "react";
import free from "../../../assets/free.svg";
import support from "../../../assets/support.svg";
import gold from "../../../assets/gold.svg";
import s24 from "../../../assets/24.7.png";

export default function Shopex() {
  return (
    <div className="container-uz">
      <h1 className="text-blue-950 text-center mt-16 font-bold text-5xl ">
        What Shopex Offer!
      </h1>
      <div className="flex justify-between gap-4 rounded-md">
        <div className="bg-white shadow-xl flex flex-col items-center p-3">
          <img src={free} alt="" />
          <p className="text-blue-700 font-bold mt-2">24/7 Support</p>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col items-center p-3">
          <img src={support} alt="" />
          <p className="text-blue-700 font-bold mt-2">24/7 Support</p>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col items-center p-3">
          <img src={gold} alt="" />
          <p className="text-blue-700 font-bold mt-2">24/7 Support</p>
          <p className="text-gray-400 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
        <div className="bg-white shadow-xl flex flex-col items-center p-3">
          <img src={s24} alt="" />
          <p className="text-blue-700 font-bold mt-2">24/7 Support</p>
          <p className="text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
            gravida.
          </p>
        </div>
      </div>
    </div>
  );
}
