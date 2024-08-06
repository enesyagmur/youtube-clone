/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { getTrends } from "../../Api/trendsApi";
import { FaCheckCircle } from "react-icons/fa";

const Trends = () => {
  const [trends, setTrends] = useState();
  useEffect(() => {
    const fetchTrends = async () => {
      const result = await getTrends();
      setTrends(result);
      console.log(result);
    };
    fetchTrends();
  }, []);

  return (
    <div className="w-10/12 flex-col ml-36">
      {trends
        ? trends.map((item, index) => (
            <div className="w-8/12 h-40 flex  mt-4 cursor-pointer" key={index}>
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-4/12 h-36 object-cover rounded-lg"
              />
              <div className="w-6/12 h-36 ml-4 flex flex-col justify-center ">
                <p className="w-full">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p className=" text-[10px]">{item.snippet.channelTitle}</p>
                  <FaCheckCircle className="text-[10px] ml-1 " />
                  {item.statistics.viewCount > 999999 ? (
                    <p className="text-[10px] ml-1">
                      {item.statistics.viewCount.trim("")[0]} Mn views
                    </p>
                  ) : (
                    <p className="text-[10px] ml-1">
                      {item.statistics.viewCount.trim("").substring(0, 3)} B
                      views
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Trends;
