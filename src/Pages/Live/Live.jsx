import React, { useEffect, useState } from "react";
import { getLiveFunc } from "../../Api/liveApi";
import { useSelector } from "react-redux";
import { CgLivePhoto } from "react-icons/cg";
import List from "../../Components/DataList/List";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Live = () => {
  const [data, setData] = useState();
  const theme = useSelector((state) => state.theme.colors);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const result = await getLiveFunc();
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Live sayfasında hata:", error);
      }
    };
    fetchLive();
  }, []);
  return (
    <div
      className={`w-full min-h-screen flex-col items-center ${theme[0]} ${theme[1]}`}
    >
      <div className={`w-11/12 h-28 flex items-center mt-4 `}>
        <CgLivePhoto className="text-6xl ml-36" />

        <p className="text-4xl font-bold lg:ml-4">Live</p>
      </div>
      <div className={`w-11/12 h-[2px] ${theme[2]}`}></div>
      {data
        ? data.map((item, index) => (
            <div
              className="w-8/12 h-40 flex  mt-4 cursor-pointer lg:ml-36"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-5/12 h-40 object-cover rounded-lg cursor-pointer border-2 border-red-700"
              />
              <div className="w-6/12 h-36 ml-4 flex flex-col justify-center ">
                <p className="w-full">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className=" text-[10px]"
                    onClick={() =>
                      navigate(`/channel/${item.snippet.channelId}`)
                    }
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

export default Live;
