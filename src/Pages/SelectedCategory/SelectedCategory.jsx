import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Api/selectedCategoryApi";
import { useParams } from "react-router-dom";
import List from "../../Components/DataList/List";
import { LuGamepad2, LuMusic } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";

function reducer(state, action) {
  switch (action.type) {
    case "10":
      return { title: "Music" };
    case "17":
      return { title: "Spor" };
    case "20":
      return { title: "Game" };
    default:
      throw new Error();
  }
}

const SelectedCategory = () => {
  const theme = useSelector((state) => state.theme.colors);
  const [data, setData] = useState();
  const { categoryId } = useParams();

  const [state, dispatch] = useReducer(reducer, {
    title: "",
  });

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const result = await getSelectedCategory(categoryId, 10);
        setData(result);
      } catch (error) {
        console.error(state.title, "sayfasında verileri alırken hata:", error);
      }
    };
    dispatch({ type: categoryId });
    fetchMusic();
  }, [categoryId]);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      <div className={`w-11/12 h-28 flex items-center mt-4 `}>
        {categoryId === "10" ? (
          <LuMusic className="text-5xl ml-36" />
        ) : categoryId === "17" ? (
          <LuGamepad2 className="text-5xl ml-36" />
        ) : categoryId === "20" ? (
          <TfiCup className="text-5xl ml-36" />
        ) : null}
        <p className="text-4xl font-bold ml-4">{state.title}</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      <List data={data} />
    </div>
  );
};

export default SelectedCategory;
