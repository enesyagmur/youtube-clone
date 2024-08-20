import Home from "../Pages/Home/Home";
import Live from "../Pages/Live/Live";
import Search from "../Pages/Search/Search";
import SelectedCategory from "../Pages/SelectedCategory/SelectedCategory";
import Shorts from "../Pages/Shorts/Shorts";
import Trends from "../Pages/Trends/Trends";
import Video from "../Pages/Video/Video";

export const customRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/trends",
    element: <Trends />,
  },

  {
    path: "/video/:id",
    element: <Video />,
  },
  {
    path: "/search/:search",
    element: <Search />,
  },
  {
    path: "/shorts",
    element: <Shorts />,
  },
  {
    path: "/selectedCategory/:categoryId",
    element: <SelectedCategory />,
  },
  {
    path: "/live",
    element: <Live />,
  },
];
