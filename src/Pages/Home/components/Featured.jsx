import React from "react";
import Img1 from "../../../assets/featured1.svg";
import Img2 from "../../../assets/featured2.svg";
import Img3 from "../../../assets/featured3.svg";
import Img4 from "../../../assets/featured4.svg";

export default function Featured() {
  return (
    <div className="container-uz pt-20 flex justify-between items-center ">
      <div>
        <div className=" bg-slate-50 p-3 rounded-md shadow-2xl w-72 h-72 items-center flex ">
          <img className="mx-auto" src={Img1} alt="" />
        </div>
        <div className="bg-white text-center shadow-2xl  rounded-b-md py-3">
          <h3 className="text-red-500">Cantilever chair</h3>
          <p className="text-blue-600">Code - Y523201</p>
          <p className="text-blue-600">$42.00</p>
        </div>
      </div>
      <div>
        <div className=" bg-slate-50 p-3 rounded-md shadow-2xl w-72  h-72 flex items-center">
          <img className="mx-auto " src={Img2} alt="" />
        </div>
        <div className="bg-white text-center shadow-2xl  rounded-b-md py-3 imgs  ">
          <h3 className="text-red-500 ">Cantilever chair</h3>
          <p className="text-blue-600">Code - Y523201</p>
          <p className="text-blue-600">$42.00</p>
        </div>
      </div>
      <div>
        <div className=" bg-slate-50 p-3 rounded-md shadow-2xl w-72 h-72 flex items-center">
          <img className="mx-auto" src={Img3} alt="" />
        </div>
        <div className="bg-white text-center shadow-2xl  rounded-b-md py-3 ">
          <h3 className="text-red-500">Cantilever chair</h3>
          <p className="text-blue-600">Code - Y523201</p>
          <p className="text-blue-600">$42.00</p>
        </div>
      </div>
      <div>
        <div className=" bg-slate-50 p-3 rounded-md shadow-2xl w-72 h-72 flex items-center">
          <img className="mx-auto" src={Img4} alt="" />
        </div>
        <div className="bg-white text-center shadow-2xl  rounded-b-md py-3 ">
          <h3 className="text-red-500">Cantilever chair</h3>
          <p className="text-blue-600">Code - Y523201</p>
          <p className="text-blue-600">$42.00</p>
        </div>
      </div>
    </div>
  );
}
