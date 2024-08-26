import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const List = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-11/12 md:w-11/12 lg:w-10/12 flex-col ml-0 sm:ml-14 md:ml-24 lg:ml-36">
      {data
        ? data.map((item, index) => (
            <div
              className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12 h-80 sm:h-52 sm:flex-row flex flex-col sm:mt-4 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 h-52 object-cover rounded-xl cursor-pointer"
              />
              <div className="w-full sm:w-4/12 md:w-5/12 lg:w-6/12 h-24 sm:h-28 sm:ml-4 flex flex-col justify-center ">
                <p className="w-full">{item.snippet.title}</p>
                <div className="w-full flex text-neutral-400 items-center">
                  <p
                    className=" text-md"
                    onClick={() => navigate(`/channel/${item.id}`)}
                  >
                    {item.snippet.channelTitle}
                  </p>
                  <FaCheckCircle className="text-sm ml-1 " />
                  {item.statistics.viewCount > 999999 ? (
                    <p className="text-sm ml-1">
                      {item.statistics.viewCount.trim("")[0]} Mn views
                    </p>
                  ) : (
                    <p className="text-sm ml-1">
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

export default List;
