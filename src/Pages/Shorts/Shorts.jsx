import React, { useEffect, useState } from "react";
import { getDataForShorts } from "../../Api/shortsApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Shorts = () => {
  const theme = useSelector((state) => state.theme.colors);
  const shortsData = useSelector((state) => state.shortsData.data);
  const [showLoading, setShowLoading] = useState(true);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      if (shortsData.length === 0) {
        const result = await getDataForShorts(dispatch);
        setData(result);
      } else {
        setData(shortsData);
      }
    } catch (error) {
      console.error("shors sayfasında hata:", error);
    }
  };

  useEffect(() => {
    fetchData();
    if (data) {
      setShowLoading(false);
    }
  }, [data]);

  return (
    <div
      className={`w-full h-[5730px] flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      {showLoading && <Loading />}

      {shortsData
        ? shortsData.map((item, index) => (
            <div
              className="w-full h-[600px] flex justify-center mt-4 lg:mt-8 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <iframe
                className="w-11/12 sm:w-6/12 md:w-5/12 lg:w-4/12 h-full rounded-xl"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                allowFullScreen
                title={item.snippet.title}
              />
            </div>
          ))
        : null}
    </div>
  );
};

export default Shorts;
