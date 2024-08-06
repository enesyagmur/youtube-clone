import React from "react";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";

import yotubeLogo from "../../Assets/youtube-logo.png";
import CategorieList from "./CategorieList";
import TopChannels from "./TopChannels";

const Sidebar = () => {
  const theme = useSelector((state) => state.theme.colors);
  return (
    <div
      className={`lg:w-52 min-h-screen flex flex-col items-start ${theme[0]} ${theme[1]} pl-2 font-roboto fixed`}
    >
      <div className="lg:w-10/12 h-12 flex items-center justify-evenly">
        <RxHamburgerMenu />

        <div className="w-7/12 h-full flex items-center justify-start">
          <img
            src={yotubeLogo}
            alt=""
            className="w-[25px] h-[25px] object-cover"
          />
          <p className="font-semibold">Youtube</p>
          <p className="text-[8px] font-bold text-neutral-500 ml-1 mb-4"> TR</p>
        </div>
      </div>
      <CategorieList theme2={theme[2]} />
      <TopChannels theme2={theme[2]} />
    </div>
  );
};

export default Sidebar;
