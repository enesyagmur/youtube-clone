import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../Api/selectedCategoryApi";
import { useParams } from "react-router-dom";
import List from "../../Components/DataList/List";
import { LuGamepad2, LuMusic } from "react-icons/lu";
import { TfiCup } from "react-icons/tfi";
import Loading from "../Loading/Loading";

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
  const musicsData = useSelector((state) => state.musicsData.data);
  const gamesData = useSelector((state) => state.gamesData.data);
  const sportsData = useSelector((state) => state.sporsData.data);
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const { categoryId } = useParams();
  const dispatchSlice = useDispatch();

  const [state, dispatch] = useReducer(reducer, {
    title: "",
  });

  const checkDataCame = () => {
    if (data) {
      setShowLoading(false);
    } else {
      setShowLoading(true);
    }
  };

  const fetchData = async () => {
    try {
      if (categoryId === "10") {
        if (musicsData.length === 0) {
          const result = await getSelectedCategory(
            categoryId,
            5,
            dispatchSlice
          );
          setData(result);
        } else {
          setData(musicsData);
        }
      } else if (categoryId === "17") {
        if (gamesData.length === 0) {
          const result = await getSelectedCategory(
            categoryId,
            5,
            dispatchSlice
          );
          setData(result);
        } else {
          setData(gamesData);
        }
      } else if (categoryId === "20") {
        if (sportsData.length === 0) {
          const result = await getSelectedCategory(
            categoryId,
            5,
            dispatchSlice
          );

          setData(result);
        } else {
          setData(sportsData);
        }
      }
    } catch (error) {
      console.errorr(
        "SelectedCategory sayfasında veriyi çekerken hata:",
        error
      );
    }
  };

  useEffect(() => {
    dispatch({ type: categoryId });
    fetchData();
    checkDataCame();
  }, [categoryId]);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      {showLoading && <Loading />}

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
