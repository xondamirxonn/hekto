import { useState } from "react";

import "./index.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Product } from "./Pages/Product/Product";
import { main_pages } from "./routers/MainLayout";
import { MainLayout } from "./Layout/MainLayouts";

function App() {
  return (
    <div className=" ">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {main_pages.map((route) => (
            <Route
              index={route.path ? false : true}
              key={crypto.randomUUID()}
              path={route.path}
              element={route.component}
            />
          ))}
          {/* <Route path="singleproduct/:id" element={<SingleProduct />} />
          <Route path="latestproduct/:id" element={<SingleLatestProduct />} />
          <Route path="trandingproduct/:id" element={<SingleTranding />} /> */}
        </Route>
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
