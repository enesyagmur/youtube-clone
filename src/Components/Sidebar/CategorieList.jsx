import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { LuMusic4 } from "react-icons/lu";
import { CgLivePhoto } from "react-icons/cg";
import { LuGamepad2 } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const CategorieList = ({ theme2 }) => {
  const navigate = useNavigate();
  return (
    <div className="w-10/12  flex flex-col">
      <div className="sidebar-categorie">
        <MdHomeFilled className="text-lg" />
        <p className="sidebar-categorie-name" onClick={() => navigate("/")}>
          Home
        </p>
      </div>
      <div className="sidebar-categorie">
        <SiYoutubeshorts className="text-lg" />
        <p className="sidebar-categorie-name">Shorts</p>
      </div>
      <div className="sidebar-categorie">
        <MdOutlineSubscriptions className="text-lg" />
        <p className="sidebar-categorie-name">subscription</p>
      </div>
      <div className="sidebar-categorie">
        <GrHistory className="text-lg" />
        <p className="sidebar-categorie-name">History</p>
      </div>
      <div className="w-full h-10 flex items-center justify-center">
        <div className={`w-full h-[2px] ${theme2}`}></div>
      </div>
      <div className="sidebar-categorie">
        <FaFire className="text-lg" />
        <p className="sidebar-categorie-name" onClick={() => navigate("/")}>
          Trends
        </p>
      </div>
      <div className="sidebar-categorie">
        <LuMusic4 className="text-md" />
        <p className="sidebar-categorie-name">Music</p>
      </div>
      <div className="sidebar-categorie">
        <CgLivePhoto className="text-lg" />
        <p className="sidebar-categorie-name">Live</p>
      </div>
      <div className="sidebar-categorie">
        <LuGamepad2 className="text-lg" />
        <p className="sidebar-categorie-name">Games</p>
      </div>
      <div className="sidebar-categorie">
        <TfiCup className="text-lg" />
        <p className="sidebar-categorie-name">Spor</p>
      </div>
    </div>
  );
};

export default CategorieList;
