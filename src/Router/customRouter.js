import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";

export const customRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
];
