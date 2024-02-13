import Home from "../Pages/Home/Home";
import { Product } from "../Pages/Product/Product";

export const main_pages = [
  {
    component: <Home />,
  },

  {
    component: <Product />,
    path: "product/:id",
  },
]

