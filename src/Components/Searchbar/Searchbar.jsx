import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { changeMode } from "../../Redux/themeSlice";
import profile from "../../Assets/profile.jpg";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mode, setMode] = useState(true);
  const theme = useSelector((state) => state.theme.colors);

  const modeChange = () => {
    setMode(!mode);
    dispatch(changeMode());
  };

  const searchButtonFunc = () => {
    navigate(`/search/${search}`);
    setSearch("");
  };

  return (
    <div
      className={`w-full h-12 flex items-center justify-between ${theme[0]} ${theme[1]} font-roboto`}
    >
      <div className="w-9/12 lg:h-full flex items-center justify-center">
        <div
          className={`w-6/12 h-8 rounded-full flex items-center justify-between ${theme[2]} ${theme[1]}`}
        >
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-11/12 h-7 ml-[2px] pl-4 text-sm text-black rounded-l-full placeholder-neutral-400`}
          />
          <IoSearchOutline
            className="mr-3 text-lg"
            onClick={searchButtonFunc}
          />
        </div>
        <div
          className={`w-8 h-9 ml-2 rounded-full flex items-center justify-center ${theme[2]} ${theme[1]}`}
        >
          <FaMicrophone />
        </div>
      </div>

      <div className="w-2/12 h-full flex items-center justify-evenly">
        {mode ? (
          <MdLightMode
            className="text-lg font-thin cursor-pointer "
            onClick={modeChange}
          />
        ) : (
          <IoMoonSharp
            className="text-lg font-thin cursor-pointer "
            onClick={modeChange}
          />
        )}
        <LuVideo className={`text-lg font-thin ${theme[1]}`} />
        <FaRegBell className={`text-lg font-thin ${theme[1]}`} />
        <img
          src={profile}
          alt=""
          className="w-7 h-7 rounded-full bg-pink-50 object-cover"
        />
      </div>
    </div>
  );
};

export default Searchbar;
