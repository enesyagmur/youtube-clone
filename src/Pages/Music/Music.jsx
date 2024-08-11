import React, { useEffect, useState } from "react";
import { LuMusic } from "react-icons/lu";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Api/selectedCategoryApi";
import List from "../../Components/DataList/List";

const Music = () => {
  const theme = useSelector((state) => state.theme.colors);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const result = await getSelectedCategory(10, 10);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Muzik sayfasında verileri alırken hata:", error);
      }
    };
    fetchMusic();
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      <div className={`w-11/12 h-28 flex items-center mt-4 `}>
        <LuMusic className="text-5xl ml-36" />
        <p className="text-4xl font-bold ml-2">Music</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      <List data={data} />
    </div>
  );
};

export default Music;
