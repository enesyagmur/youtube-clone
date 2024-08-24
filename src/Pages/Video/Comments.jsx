import React, { useEffect, useState } from "react";
import { getComments } from "../../Api/commentsApi";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState();

  const fetchComments = async () => {
    try {
      const result = await getComments(videoId);
      setComments(result);
    } catch (error) {
      console.error("Yorumları çekerken hata:", error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <div className="w-[98%] flex flex-col">
      {comments
        ? comments.map((comment, index) => (
            <div
              className="w-full h-28 flex justify-start items-center"
              key={index}
            >
              <img
                src={
                  comment.snippet.topLevelComment.snippet.authorProfileImageUrl
                }
                alt=""
                className="w-[40px] h-[40px] rounded-full object-cover"
              />
              <div className="w-8/12 h-20 flex-col justify-evenly items-start mt-8 ml-2 ">
                <p className="font-semibold">
                  {comment.snippet.topLevelComment.snippet.authorDisplayName}
                </p>
                <p className="w-full text-sm">
                  {comment.snippet.topLevelComment.snippet.textOriginal}
                </p>
                <div className="w-full flex items-center mt-2 ">
                  <AiOutlineLike />

                  <p className="text-[12px] text-neutral-400 ml-1">
                    {comment.snippet.topLevelComment.snippet.likeCount}
                  </p>
                  <AiOutlineDislike className="ml-2" />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Comments;
