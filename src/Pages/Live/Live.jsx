import React, { useEffect, useState } from "react";
import { getLiveFunc } from "../../Api/liveApi";
import { useDispatch, useSelector } from "react-redux";
import { CgLivePhoto } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Live = () => {
  const [data, setData] = useState();
  const [showLoading, setShowLoading] = useState(false);

  const theme = useSelector((state) => state.theme.colors);
  const liveData = useSelector((state) => state.liveData.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkDataCame = () => {
    if (data) {
      setShowLoading(false);
    } else {
      setShowLoading(true);
    }
  };
  const fetchLive = async () => {
    try {
      if (liveData.length === 0) {
        const result = await getLiveFunc(dispatch);
        setData(result);
      } else {
        setData(liveData);
      }
    } catch (error) {
      console.error("Live sayfasında hata:", error);
    }
  };

  useEffect(() => {
    fetchLive();
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
        <CgLivePhoto className="text-4xl sm:text-5xl sm:ml-5 md:ml-10 lg:ml-36" />

        <p className="text-3xl sm:text-4xl font-bold ml-4">Live</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      {data
        ? data.map((item, index) => (
            <div
              className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-80 sm:h-52 sm:flex-row flex flex-col mt-6 cursor-pointer lg:ml-36"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-full sm:w-7/12 md:w-6/12 lg:w-5/12 h-52 object-cover rounded-lg cursor-pointer border-2 border-red-700"
              />
              <div className="w-full sm:w-4/12 md:w-5/12 lg:w-6/12 h-28 sm:h-36 ml-4 flex flex-col justify-center ">
                <p className="w-full">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className="text-md"
                    onClick={() =>
                      navigate(`/channel/${item.snippet.channelId}`)
                    }
                  >
                    {item.snippet.channelTitle}
                  </p>
                  <FaCheckCircle className="text-sm ml-1 " />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Live;
