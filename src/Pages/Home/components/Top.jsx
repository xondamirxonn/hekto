import React from 'react'
import { topCategory } from '../../../data/top'

export default function Top() {
  return (
    <div className="container-uz pt-20">
      <h1 className="text-center text-4xl text-blue-900 font-bold">
        Top Categories
      </h1>
      <div className="flex justify-between mt-5">
        {topCategory.map((item) => (
          <div>
            <div
              key={item.id}
              className="bg-slate-100 rounded-full w-56 h-56  flex items-center mx-auto shadow-2xl"
            >
              <img className="mx-auto" src={item.img} alt="" />
            </div>
            <div className='text-center mt-3 text-blue-800'>
              <h2>{item.title}</h2>
              <p>${item.price}.00</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
