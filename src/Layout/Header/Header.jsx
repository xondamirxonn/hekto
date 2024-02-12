import React from "react";
import Logo from "../../assets/icon/logo";
import Search from "../../assets/icon/search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="">
      <div className="container-uz flex justify-between items-center py-3">
        <Link to={"/"}>
         
          <Logo />
        </Link>
        <ul className="flex gap-3 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/pages"}>Pages</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <div className="flex ">
          <input id="search" type="text" />
          <label className="bg-red-600 p-2 rounded-r-lg " htmlFor="search">
            <Search />
          </label>
        </div>
      </div>
    </div>
  );
}
