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
              className="w-full h-[600px] flex justify-center mt-8 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <iframe
                className="w-3/12 h-full  mt-4 rounded-xl"
                src={`https://www.youtube.com/embed/${item.id.videoId}`}
                allowFullScreen
                title={item.snippet.title}
              />
              {/* <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-3/12 h-full object-cover rounded-lg cursor-pointer"
              /> */}
              {/* <div className="w-6/12 h-36 ml-4 flex flex-col justify-center ">
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
              </div> */}
            </div>
          ))
        : null}
    </div>
  );
};

export default Shorts;
