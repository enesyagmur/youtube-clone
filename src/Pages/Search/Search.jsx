import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchFunc } from "../../Api/searchApi";
import { useSelector } from "react-redux";
import { FaCheckCircle } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Search = () => {
  const [searchList, setSearchList] = useState();
  const navigate = useNavigate();
  const { search } = useParams();
  const theme = useSelector((state) => state.theme.colors);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);

    const getSearch = async () => {
      try {
        if (search) {
          const result = await searchFunc(search);
          if (result) {
            setSearchList(result);

            setShowLoading(false);
          }
        }
      } catch (error) {
        console.error("getSearch ta hata var:", error);
      }
    };
    getSearch();
  }, [search]);
  return (
    <div className={`w-full flex-col  min-h-screen ${theme[0]} ${theme[1]}`}>
      {showLoading && <Loading />}

      {searchList
        ? searchList.map((item, index) => (
            <div
              className="w-full sm:w-11/12 md:w-10/12 lg:w-6/12 h-80 sm:h-52 sm:flex-row flex flex-col sm:mt-6 lg:ml-16 cursor-pointer"
              key={index}
              onClick={() => navigate(`/video/${item.id.videoId}`)}
            >
              <img
                src={item.snippet.thumbnails.high.url}
                alt=""
                className="w-11/12 sm:w-8/12 md:w-7/12 lg:w-6/12 h-52 object-cover rounded-xl cursor-pointer"
              />
              <div className="w-full sm:w-4/12 lg:w-5/12 h-24 sm:h-36 sm:ml-4 flex flex-col justify-center">
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
