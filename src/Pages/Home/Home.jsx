import React from "react";

import { FaFire } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Trends from "./Trends";

const Home = () => {
  const theme = useSelector((state) => state.theme.colors);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      <div className={`w-11/12 h-28 flex items-center mt-4 `}>
        <FaFire className="text-5xl ml-36" />
        <p className="text-4xl font-bold ml-2">Trends</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      <Trends />
    </div>
  );
};

export default Home;

// api hatası alıyorum
