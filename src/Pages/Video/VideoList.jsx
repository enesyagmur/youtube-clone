import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVideoList } from "../../Api/getVideoList";

const VideoList = ({ categoryId }) => {
  const { id } = useParams();
  const [videoList, setVideoList] = useState();
  const navigate = useNavigate();

  const fetchVıdeoList = async (categoryId) => {
    const result = await getVideoList(categoryId);
    setVideoList(result);
  };

  useEffect(() => {
    fetchVıdeoList(categoryId);
  }, []);

  const goCategory = (id) => {
    navigate(`/categories/${id}`);
  };

  return (
    <div className="w-full lg:w-3/12 min-h-screen flex flex-col lg:items-center items-start pt-6">
      {videoList
        ? videoList.map((video, index) =>
            video.id !== id ? (
              <div className="w-10/12 h-28 flex mt-2 rounded-lg" key={index}>
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt=""
                  className="w-5/12 h-full object-cover rounded-lg cursor-pointer"
                  onClick={() => navigate(`/video/${video.id}`)}
                />
                <div className="w-7/12 h-full flex-col items-center pl-2">
                  <p
                    className="w-full text-[10px] mt-2 font-semibold cursor-pointer"
                    onClick={() => navigate(`/video/${video.id}`)}
                  >
                    {video.snippet.localized.title}
                  </p>
                  <p className="text-neutral-400 text-[10px] mt-1">
                    {video.snippet.channelTitle}
                  </p>

                  {video.statistics.viewCount > 999999 ? (
                    <p className="text-neutral-400 text-[8px] mt-1">
                      {video.statistics.viewCount.trim("")[0]} Mn views
                    </p>
                  ) : (
                    <p className="text-neutral-400 text-[8px] mt-1">
                      {video.statistics.viewCount.trim("").substring(0, 3)} B
                      views
                    </p>
                  )}
                </div>
              </div>
            ) : null
          )
        : null}
    </div>
  );
};

export default VideoList;
