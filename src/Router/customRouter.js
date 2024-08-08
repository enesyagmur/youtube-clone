import Categories from "../Pages/Categories/Categories";
import Channel from "../Pages/Channel/Channel";
import Home from "../Pages/Home/Home";
import Video from "../Pages/Video/Video";

export const customRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/channel/:id",
    element: <Channel />,
  },
  {
    path: "/video/:id",
    element: <Video />,
  },
];
