import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchFunc } from "../../Api/searchApi";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";

const Search = () => {
  const [searchList, setSearchList] = useState();
  const navigate = useNavigate();
  const { search } = useParams();
  const theme = useSelector((state) => state.theme.colors);

  useEffect(() => {
    const getSearch = async () => {
      try {
        if (search) {
          const result = await searchFunc(search);
          console.log(result);
          setSearchList(result);
        }
      } catch (error) {
        console.error("getSearch ta hata var:", error);
      }
    };
    getSearch();
  }, [search]);
  return (
    <div className={`w-full flex-col  min-h-screen ${theme[0]} ${theme[1]}`}>
      {searchList
        ? searchList.map((item, index) => (
            <div
              className="w-8/12 h-52 flex  mt-4 cursor-pointer ml-36"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-6/12 h-full object-cover rounded-lg cursor-pointer"
              />
              <div className="w-6/12 h-full ml-4 flex flex-col justify-center ">
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

export default Search;
