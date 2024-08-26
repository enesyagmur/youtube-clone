import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Loading from "../Loading/Loading";
import { getDataForHome } from "../../Api/homeDataApi";

const Home = () => {
  const theme = useSelector((state) => state.theme.colors);
  const homeData = useSelector((state) => state.homeData.data);
  const [showLoading, setShowLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState();

  const checkDataCame = () => {
    if (data) {
      setShowLoading(false);
    } else {
      setShowLoading(true);
    }
  };
  const fetchData = async () => {
    try {
      if (homeData.length === 0) {
        const result = await getDataForHome(dispatch);
        setData(result);
      } else {
        setData(homeData);
      }
    } catch (error) {
      console.error("Home sayfasında hata:", error);
    }
  };

  useEffect(() => {
    fetchData();
    checkDataCame();
  }, [data]);

  return (
    <div
      className={`w-full min-h-screen ${theme[0]} ${theme[1]} flex flex-wrap justify-center W`}
    >
      {showLoading && <Loading />}

      {data
        ? data.map((item, index) => (
            <div
              className="w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 h-64 flex flex-col  m-2 cursor-pointer  "
              key={index}
              onClick={() => navigate(`/video/${item.id}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-full h-48 object-cover cursor-pointer rounded-3xl"
              />
              <div className="w-full h-16 ml-4 flex flex-col justify-center ">
                <p className="w-full text-md">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className=" text-sm"
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

export default Home;
