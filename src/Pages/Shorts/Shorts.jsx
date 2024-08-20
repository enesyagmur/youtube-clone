import React, { useEffect, useState } from "react";
import { getDataForShorts } from "../../Api/shortsApi";
import { useDispatch, useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const Shorts = () => {
  const theme = useSelector((state) => state.theme.colors);
  const shortsData = useSelector((state) => state.shortsData.data);
  const [showLoading, setShowLoading] = useState(false);
  const [data, setData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkDataCame = () => {
    if (data) {
      setShowLoading(false);
    } else {
      setShowLoading(true);
    }
  };

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
    checkDataCame();
  }, [data]);
  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      {showLoading && <Loading />}

      {shortsData
        ? shortsData.map((item, index) => (
            <div
              className="w-8/12 h-40 flex  mt-4 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-4/12 h-36 object-cover rounded-lg cursor-pointer"
              />
              <div className="w-6/12 h-36 ml-4 flex flex-col justify-center ">
                <p className="w-full">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className=" text-[10px]"
                    onClick={() => navigate(`${item.snippet.channelId}`)}
                  >
                    {item.snippet.channelTitle}
                  </p>
                  <FaCheckCircle className="text-[10px] ml-1 " />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Shorts;
