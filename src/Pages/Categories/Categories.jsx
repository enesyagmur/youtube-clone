import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCategories } from "../../Api/categoriesApi";

const Categories = () => {
  const { id } = useParams();
  const theme = useSelector((state) => state.theme.colors);
  const [videos, setVideos] = useState();

  useEffect(() => {
    const getVideos = async (categoryId, count) => {
      try {
        const data = await getCategories(categoryId, count);
        setVideos(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getVideos(id, 5);
  }, [id]);

  return (
    <div
      className={`w-full min-h-screen ${theme[0]} ${theme[1]} flex flex-wrap justify-between `}
    >
      {videos
        ? videos.map((video, index) => (
            <div
              className="lg:w-[255px] lg:h-72 flex-col rounded-lg  "
              key={index}
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt=""
                className="w-full max-h-[200px] min-h-[200px] object-cover rounded-lg"
              />
              <div>
                <p className="font-semibold">{video.snippet.title}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Categories;
