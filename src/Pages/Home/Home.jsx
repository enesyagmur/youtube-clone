import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Api/selectedCategoryApi";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { getSelectedCategoryAndTimeFunc } from "../../Api/videosWithCategoryAndTimeApi";

const Home = () => {
  const [data, setData] = useState();
  const theme = useSelector((state) => state.theme.colors);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMixCaegory = async () => {
      try {
        const result1 = await getSelectedCategoryAndTimeFunc(10, 5, "long");
        const result2 = await getSelectedCategoryAndTimeFunc(17, 5, "long");
        const result3 = await getSelectedCategoryAndTimeFunc(23, 5, "short");
        const result4 = await getSelectedCategoryAndTimeFunc(27, 5, "long");
        const result5 = await getSelectedCategoryAndTimeFunc(20, 5, "long");

        setData([...result1, ...result2, ...result3, ...result4, ...result5]);
        console.log(data);
      } catch (error) {
        console.error("Home sayfasında veriiyi alırken hata:", error);
      }
    };
    fetchMixCaegory();
  }, []);

  return (
    <div
      className={`w-full min-h-screen  ${theme[0]} ${theme[1]} flex flex-wrap`}
    >
      {data
        ? data.map((item, index) => (
            <div
              className="w-[240px] h-56 flex flex-col  m-2 cursor-pointer  "
              key={index}
              onClick={() => navigate(`/video/${item.id}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-full h-40 object-cover cursor-pointer rounded-3xl"
              />
              <div className="w-full h-16 ml-4 flex flex-col justify-center ">
                <p className="w-full text-[10px]">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className=" text-[10px]"
                    onClick={() => navigate(`/channel/${item.id}`)}
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

export default Home;
