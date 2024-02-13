import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { topCategory } from "../../data/top";
import { Stars } from "../../assets/icon/stars";
import { Heart } from './../../assets/icon/heart';
import Facebook from "../../assets/icon/facebook";
import Instagram from "../../assets/icon/instagram";
import Twitter from "../../assets/icon/twitter";
import { leatestProduct } from "../../data/leatest-product";
import { featured } from "../../data/featured";  
import { products, trending, product } from "../../data/trending";

export const Product = () => {
  const navigate = useNavigate()
  const Back = () => {
    navigate("/")
  }
  const { id } = useParams();
  const top = topCategory.find((product) => product.id === parseInt(id));
  const feat = featured.find((feat) => feat.id === parseInt(id));
  const trendings = trending.find((trending) => trending.id === parseInt(id));
  const products1 = products.find((trending) => trending.id === parseInt(id));
  const products2 = product.find((trending) => trending.id === parseInt(id));
  return (
    <div>
      <div className="container-uz ">
        {feat ? (
          <div className="bg-white shadow-2xl p-3 mt-10 items-start flex justify-between">
            <div className="grid-flow-col grid-rows-3 relative h-[75vh] flex items-center">
              <div>
                <img src={feat.img} alt="" />
                <img src={feat.img} alt="" />
                <img src={feat.img} alt="" />
                <div className="bg-gray-100 absolute top-0 left-48 h-[100%] w-72 flex items-center ">
                  <img className="mx-auto w-72" src={feat.img} alt="" />
                </div>
              </div>
            </div>

            <div className="mr-44 mt-10">
              <h1 className="text-4xl text-blue-900 font-bold">{feat.title}</h1>
              <div className="flex items-center gap-3">
                <Stars /> <span className="text-blue-800">(22)</span>
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-blue-800">${feat.price}.00</p>
                <del className="text-red-500">${feat.price}.00</del>
              </div>
              <p className="">Color</p>
              <p className="text-gray-400 w-96 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-start">
                <button className="text-blue-800 mt-8 p-2 ">
                  Add To Cart{" "}
                </button>
                <Heart />
              </div>
              <p>Catagories: </p>
              <p>Tags:</p>
              <div className="flex items-center gap-2">
                <p>Share:</p>
                <div className="flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {top ? (
          <div className="bg-white shadow-2xl p-3 mt-10 items-start flex justify-between">
            <div className="grid-flow-col grid-rows-3 relative h-[75vh] flex items-center">
              <div>
                <img src={top.img} alt="" />
                <img src={top.img} alt="" />
                <img src={top.img} alt="" />
                <div className="bg-gray-100 absolute top-0 left-48 h-[100%] w-72 flex items-center ">
                  <img className="mx-auto w-72" src={top.img} alt="" />
                </div>
              </div>
            </div>

            <div className="mr-44 mt-10">
              <h1 className="text-4xl text-blue-900 font-bold">{top.title}</h1>
              <div className="flex items-center gap-3">
                <Stars /> <span className="text-blue-800">(22)</span>
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-blue-800">${top.price}.00</p>
                <del className="text-red-500">${top.price}.00</del>
              </div>
              <p className="">Color</p>
              <p className="text-gray-400 w-96 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-start">
                <button className="text-blue-800 mt-8 p-2 ">
                  Add To Cart{" "}
                </button>
                <Heart />
              </div>
              <p>Catagories: </p>
              <p>Tags:</p>
              <div className="flex items-center gap-2">
                <p>Share:</p>
                <div className="flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        ) : 
          null
        }
        {trendings ? (
          <div className="bg-white shadow-2xl p-3 mt-10 items-start flex justify-between">
            <div className="grid-flow-col grid-rows-3 relative h-[75vh] flex items-center">
              <div>
                <img src={trendings.img} alt="" />
                <img src={trendings.img} alt="" />
                <img src={trendings.img} alt="" />
                <div className="bg-gray-100 absolute top-0 left-48 h-[100%] w-72 flex items-center ">
                  <img className="mx-auto w-72" src={trendings.img} alt="" />
                </div>
              </div>
            </div>

            <div className="mr-44 mt-10">
              <h1 className="text-4xl text-blue-900 font-bold">
                {trendings.title}
              </h1>
              <div className="flex items-center gap-3">
                <Stars /> <span className="text-blue-800">(22)</span>
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-blue-800">${trendings.price}.00</p>
                <del className="text-red-500">${trendings.delPrice}.00</del>
              </div>
              <p className="">Color</p>
              <p className="text-gray-400 w-96 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-start">
                <button className="text-blue-800 mt-8 p-2 ">
                  Add To Cart{" "}
                </button>
                <Heart />
              </div>
              <p>Catagories: </p>
              <p>Tags:</p>
              <div className="flex items-center gap-2">
                <p>Share:</p>
                <div className="flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {products1 ? (
          <div className="bg-white shadow-2xl p-3 mt-10 items-start flex justify-between">
            <div className="grid-flow-col grid-rows-3 relative h-[75vh] flex items-center">
              <div>
                <img className="w-48" src={products1.img} alt="" />
                <img className="w-48" src={products1.img} alt="" />
                <img className="w-48" src={products1.img} alt="" />
                <div className="bg-gray-100 absolute top-0 left-48 h-[100%] w-72 flex items-center ">
                  <img className="mx-auto w-72" src={products1.img} alt="" />
                </div>
              </div>
            </div>

            <div className="mr-44 mt-10">
              <h1 className="text-4xl text-blue-900 font-bold">
                {products1.title}
              </h1>
              <div className="flex items-center gap-3">
                <Stars /> <span className="text-blue-800">(22)</span>
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-blue-800">${products1.price}.00</p>
                <del className="text-red-500">${products1.price}.00</del>
              </div>
              <p className="">Color</p>
              <p className="text-gray-400 w-96 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-start">
                <button className="text-blue-800 mt-8 p-2 ">
                  Add To Cart{" "}
                </button>
                <Heart />
              </div>
              <p>Catagories: </p>
              <p>Tags:</p>
              <div className="flex items-center gap-2">
                <p>Share:</p>
                <div className="flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {products2 ? (
          <div className="bg-white shadow-2xl p-3 mt-10 items-start flex justify-between">
            <div className="grid-flow-col grid-rows-3 relative h-[75vh] flex items-center">
              <div>
                <img className="w-44" src={products2.img} alt="" />
                <img className="w-44" src={products2.img} alt="" />
                <img className="w-44" src={products2.img} alt="" />
                <div className="bg-gray-100 absolute top-0 left-48 h-[100%] w-72 flex items-center ">
                  <img className="mx-auto w-72" src={products2.img} alt="" />
                </div>
              </div>
            </div>

            <div className="mr-44 mt-10">
              <h1 className="text-4xl text-blue-900 font-bold">
                {products2.title}
              </h1>
              <div className="flex items-center gap-3">
                <Stars /> <span className="text-blue-800">(22)</span>
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-blue-800">${products2.price}.00</p>
                <del className="text-red-500">${products2.price}.00</del>
              </div>
              <p className="">Color</p>
              <p className="text-gray-400 w-96 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-start">
                <button className="text-blue-800 mt-8 p-2 ">
                  Add To Cart{" "}
                </button>
                <Heart />
              </div>
              <p>Catagories: </p>
              <p>Tags:</p>
              <div className="flex items-center gap-2">
                <p>Share:</p>
                <div className="flex gap-2">
                  <Facebook />
                  <Instagram />
                  <Twitter />
                </div>
              </div>
            </div>
          </div>
        ) :null}
      </div>
    </div>
  );
};
