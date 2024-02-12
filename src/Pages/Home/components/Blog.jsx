import React from 'react'
import { blogs } from '../../../data/blog'
import Pen from '../../../assets/icon/pen';
import Calendar from './../../../assets/icon/calendar';

export default function Blog() {
  return (
    <div className="container-uz">
      <div className="flex justify-between">
        {blogs.map((item) => (
          <div>
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
            <div className="flex justify-around mt-1">
              <div className="flex gap-2 items-center">
                <Pen />
                <p>{item.writer}</p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar />
                <p>{item.date}</p>
              </div>
            </div>
            <div>
              <h1 className="mt-3 text-blue-900 text-2xl hover:text-red-500 ">
                {item.title}
              </h1>
              <p className="text-gray-400 mt-2">{item.text}</p>
              <button className="mt-3 text-blue-900 border-b-2 border-b-blue-900 hover:text-red-500 hover:border-b-red-500">
                {item.read}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
