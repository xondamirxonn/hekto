import React from 'react'
import Logo from '../../assets/icon/logo'
import { Link } from 'react-router-dom';
import Facebook from './../../assets/icon/facebook';
import Instagram from './../../assets/icon/instagram';
import Twitter from './../../assets/icon/twitter';

export default function Footer() {
  return (
    <div className=" mt-20">
      <div className="bg-violet-200 p-8">
        <div className="container-uz flex items-start justify-between ">
          <div>
            <Logo />
            <div className="relative mt-7 flex items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 w-[251px]"
              />
              <button className="absolute left-44 bg-red-500 p-2 text-white">
                Sign Up
              </button>
            </div>
            <div className="mt-3 text-gray-500">
              <p className="">Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div>
            <h1 className="text-blue-900"> Categories</h1>
            <div className="mt-1 flex flex-col">
              <Link className="text-gray-500">Laptops & Computers</Link>

              <Link className="text-gray-500">Cameras & Photography</Link>

              <Link className="text-gray-500">Smart Phones & Tablets</Link>

              <Link className="text-gray-500">Video Games & Consoles</Link>

              <Link to={"/"} className="text-gray-500">Waterproof Headphones</Link>
            </div>
          </div>
          <div>
            <h1 className="text-blue-900">Customer Care</h1>
            <div className="mt-1 flex flex-col">
              <Link className="text-gray-500">My Account</Link>
              <Link className="text-gray-500">Discount</Link>
              <Link className="text-gray-500">Returns</Link>
              <Link className="text-gray-500">Orders History</Link>
              <Link className="text-gray-500">Order Tracking</Link>
            </div>
          </div>
          <div>
            <h1 className="text-blue-900">Pages</h1>
            <div className="mt-1 flex flex-col">
              <Link className="text-gray-500">Blog</Link>
              <Link className="text-gray-500">Browse the Shop</Link>
              <Link className="text-gray-500">Category</Link>
              <Link className="text-gray-500">Pre-Built Pages</Link>
              <Link className="text-gray-500">Visual Composer Elements</Link>
              <Link className="text-gray-500">WooCommerce Pages</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-violet-300 p-3">
        <div className="container-uz flex justify-between items-center">
          <p className="text-gray-600">©Webecy - All Rights Reserved</p>
          <div className="flex gap-3">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
}
