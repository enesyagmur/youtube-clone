import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { LuMusic4 } from "react-icons/lu";
import { CgLivePhoto } from "react-icons/cg";
import { LuGamepad2 } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import { SiYoutubeshorts } from "react-icons/si";
import { useNavigate } from "react-router-dom";

const CategorieList = ({ theme2 }) => {
  const navigate = useNavigate();

  const goCategory = (categoryId) => {
    navigate(`/selectedCategory/${categoryId}`);
  };

  return (
    <div className="w-10/12  flex flex-col">
      <div className="sidebar-categorie" onClick={() => navigate("/")}>
        <MdHomeFilled className="text-lg" />
        <p className="sidebar-categorie-name">Home</p>
      </div>
      <div className="sidebar-categorie" onClick={() => navigate("/shorts")}>
        <SiYoutubeshorts className="text-lg" />
        <p className="sidebar-categorie-name">Shorts</p>
      </div>

      <div className="w-full h-10 flex items-center justify-center">
        <div className={`w-full h-[2px] ${theme2}`}></div>
      </div>
      <div className="sidebar-categorie" onClick={() => navigate("/trends")}>
        <FaFire className="text-lg" />
        <p className="sidebar-categorie-name">Trends</p>
      </div>
      <div className="sidebar-categorie" onClick={() => goCategory(10)}>
        <LuMusic4 className="text-md" />
        <p className="sidebar-categorie-name">Music</p>
      </div>
      <div className="sidebar-categorie" onClick={() => navigate("/live")}>
        <CgLivePhoto className="text-lg" />
        <p className="sidebar-categorie-name">Live</p>
      </div>
      <div className="sidebar-categorie" onClick={() => goCategory(20)}>
        <LuGamepad2 className="text-lg" />
        <p className="sidebar-categorie-name">Games</p>
      </div>
      <div className="sidebar-categorie" onClick={() => goCategory(17)}>
        <TfiCup className="text-lg" />
        <p className="sidebar-categorie-name">Spor</p>
      </div>
    </div>
  );
};

export default CategorieList;
