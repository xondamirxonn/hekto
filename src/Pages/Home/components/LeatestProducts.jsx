import React, { useState } from "react";
import { leatestProduct } from "../../../data/leatest-product";

export default function LeatestProduct() {
  const [state, setState] = useState(leatestProduct[0].new);
  const titles = Object.keys(leatestProduct[0]);
  const [name, setName] = useState(titles);
  const changeTab = (slug) => {
    setState(leatestProduct[0][slug]);
    setName(slug);
  };
  return (
    <div className="flex items-center pt-20 flex-col  container-uz">
      <div className="flex gap-3">
        {titles.map((item) => (
          <button
            onClick={() => changeTab(item)}
            className={name === item ? "text-red-500 border-b-2" : {}}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3  gap-3 ">
        {state.map((item) => (
          <div>
            {" "}
            <div
              key={item.id}
              className=" flex items-center justify-center mt-2 bg-gray-100 w-[350px] h-[300px]"
            >
              <img src={item.img} alt="" />
            </div>
            <div className="flex justify-between">
              <div className="text-blue-800">{item.title}</div>
              <div>
                <div className="flex gap-3">
                  <p className="text-blue-800"> ${item.price}</p>
                  <del className="text-red-600">${item.delPrice}.00</del>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
