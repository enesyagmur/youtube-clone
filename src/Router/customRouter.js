import Categories from "../Pages/Categories/Categories";
import Channel from "../Pages/Channel/Channel";
import Game from "../Pages/Game/Game";
import Home from "../Pages/Home/Home";
import Music from "../Pages/Music/Music";
import Search from "../Pages/Search/Search";
import SelectedCategory from "../Pages/SelectedCategory/SelectedCategory";
import Shorts from "../Pages/Shorts/Shorts";
import Video from "../Pages/Video/Video";

export const customRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories/:id",
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
  {
    path: "/search/:search",
    element: <Search />,
  },
  {
    path: "/shorts",
    element: <Shorts />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/game",
    element: <Game />,
  },
  {
    path: "/selectedCategory/:categoryId",
    element: <SelectedCategory />,
  },
];
