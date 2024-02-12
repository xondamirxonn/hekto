import React from 'react'
import { product, products, trending } from '../../../data/trending'

export default function Tranding() {
  return (
    <div className="container-uz pt-10">
      <div className="flex items-center justify-between ">
        {trending.map((item) => (
          <div className="bg-white shadow-lg text-center p-3">
            <div className="bg-gray-300 w-56 h-56 justify-center flex items-center">
              <img src={item.img} alt="" />
            </div>
            <h4 className="text-blue-900 mt-5">{item.title}</h4>
            <div className="flex gap-3 justify-center">
              <p className="text-blue-900">${item.price}.00</p>
              <small>
                <del className="text-gray-300">${item.delPrice}.00</del>
              </small>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-5 ">
          {products.map((item) => (
            <div className="bg-violet-200 p-5 mt-5 " key={item.id}>
              <h1>{item.title}</h1>
              <div className="flex justify-between items-start">
                <button className="mt-2 text-red-500 border-b-red-300 border-b-2">
                  {item.text}
                </button>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div>
          {product.map((item) => (
            <div className='flex items-center'>
              <div key={item.id} className="bg-gray-100 px-3 mt-3 shadow-md h-[4.5rem]">
                <img src={item.img} alt="" />
              </div>

              <div className='bg-white shadow-md py-[.7rem] px-3 mt-3'>
                <p>{item.title}</p>
                <del>${item.price}.00</del>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
