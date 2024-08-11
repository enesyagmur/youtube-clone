import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const List = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="w-10/12 flex-col ml-36">
      {data
        ? data.map((item, index) => (
            <div
              className="w-8/12 h-40 flex  mt-4 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id}`)}
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
                    onClick={() => navigate(`/channel/${item.id}`)}
                  >
                    {item.snippet.channelTitle}
                  </p>
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

export default List;
