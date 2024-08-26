import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../../Components/DataList/List";
import { FaFire } from "react-icons/fa6";
import { getTrendsFunc } from "../../Api/trendsApi";
import Loading from "../Loading/Loading";

const Trends = () => {
  const [data, setData] = useState();
  const [showLoading, setShowLoading] = useState(false);

  const theme = useSelector((state) => state.theme.colors);
  const trendsData = useSelector((state) => state.trendsData.data);

  const dispatch = useDispatch();

  const checkDataCame = () => {
    if (data) {
      setShowLoading(false);
    } else {
      setShowLoading(true);
    }
  };
  const fetchTrends = async () => {
    try {
      if (trendsData.length === 0) {
        const result = await getTrendsFunc(dispatch);
        setData(result);
      } else {
        setData(trendsData);
      }
    } catch (error) {
      console.error("Live sayfasında hata:", error);
    }
  };

  useEffect(() => {
    fetchTrends();
    checkDataCame();
  }, [data]);

  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      {showLoading && <Loading />}

      <div
        className={`w-11/12 h-28 flex items-center justify-center sm:justify-start mt-4 `}
      >
        <FaFire className="text-4xl sm:text-5xl sm:ml-14 md:ml-24 lg:ml-36" />

        <p className="text-3xl sm:text-4xl font-bold ml-4">Trends</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      <List data={data} />
    </div>
  );
};

export default Trends;
