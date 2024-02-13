import React from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Showcase from "./components/Showcase";
import Featured from "./components/Featured";
import LeatestProduct from "./components/LeatestProducts";
import Shopex from "./components/Shopex";
import Unique from "./components/Unique";
import Tranding from "./components/Tranding";
import Discount from "./components/Discount";
import Top from "./components/Top";
import Get from "./components/Get";
import Brands from "./components/Brands";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <div>
      <Showcase />
      <Featured />
      <LeatestProduct />
      <Shopex />
      <Unique />
      <Tranding />
      <Discount />
      <Top />
      <Get />
      <Brands />
      <Blog />
    </div>
  );
}
