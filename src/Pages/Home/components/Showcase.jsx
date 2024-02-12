import React from 'react'
import Sofa from '../../../assets/sofa-showcase.svg'
import '../home.css'

export default function Showcase() {
  return (
    <div className="bg-violet-100 p-3  mt-5">
      <div className="container-uz flex justify-between items-center gap-3">
        <div className="ligth-img  mt-[-11%] "></div>
        <div>
          <p className='text-red-500 text-xs'>Best Furniture For Your Castle....</p>
          <h1 className='w text-4xl'>New Furniture Collection Trends in 2020</h1>
          <p className='text-xs text-gray-500'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className='bg-red-400 rounded-sm px-2 p-1 mt-2 text-white'>Shop Now</button>
        </div>
        <div>
          <img src={Sofa} alt="" />
        </div>
      </div>
    </div>
  );
}
