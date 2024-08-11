import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Api/selectedCategoryApi";
import { LuGamepad2 } from "react-icons/lu";
import List from "../../Components/DataList/List";

const Game = () => {
  const theme = useSelector((state) => state.theme.colors);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const result = await getSelectedCategory(20, 10);
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("Oyun sayfasında verileri alırken hata:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      <div className={`w-11/12 h-28 flex items-center mt-4 `}>
        <LuGamepad2 className="text-5xl ml-36" />
        <p className="text-4xl font-bold ml-2">Game</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      <List data={data} />
    </div>
  );
};

export default Game;
