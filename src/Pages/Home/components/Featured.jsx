import React from "react";
import Img1 from "../../../assets/featured1.svg";
import Img2 from "../../../assets/featured2.svg";
import Img3 from "../../../assets/featured3.svg";
import Img4 from "../../../assets/featured4.svg";
import { featured } from "../../../data/featured";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div className="container-uz pt-20 flex justify-between items-center ">
      {featured.map((item) => (
        <Link to={`product/${item.id}`} >
          <div className="bg-slate-50 p-3 rounded-md shadow-2xl w-72 h-72 flex items-center ">
            <img className="mx-auto" src={item.img} alt="" />
          </div>
          <div className="bg-white text-center shadow-2xl  rounded-b-md py-3 -mt-2">
            <h3 className="text-red-500">{item.title}</h3>
            <p className="text-blue-600">{item.text}</p>
            <p className="text-blue-600">${item.price}.00</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
