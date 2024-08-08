/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleVideo } from "../../Api/singleVideoApi";
import { useSelector } from "react-redux";
import { getChannelStatistics } from "../../Api/channeStatisticsApi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import VideoList from "./VideoList";

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState();
  const [channel, setChannel] = useState();
  const [publishDate, setPublishDate] = useState();

  const theme = useSelector((state) => state.theme.colors);

  const publishDateConvertFunc = (time) => {
    const date = new Date(time);
    const months = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const publish = `${day} ${month} ${year}`;
    setPublishDate(publish);
  };

  useEffect(() => {
    const fetchVideo = async (VideoId) => {
      const videoResult = await getSingleVideo(VideoId);
      setVideo(videoResult);
      publishDateConvertFunc(videoResult.snippet.publishedAt);
      fetchChannelStatistics(videoResult.snippet.channelId);
    };
    fetchVideo(id);
  }, []);

  const fetchChannelStatistics = async (channelId) => {
    const channelStatisticsResult = await getChannelStatistics(channelId);
    setChannel(channelStatisticsResult);
  };

  return (
    <div className={`w-full min-h-screen flex ${theme[0]} ${theme[1]}`}>
      <div className="lg:w-9/12 min-h-screen flex-col items-center justify-center">
        {video && channel ? (
          <>
            <iframe
              className="lg:w-full lg:h-[550px] mt-6 rounded-xl"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
              title={video.snippet.title}
            />
            <p className="font-bold mt-2">{video.snippet.localized.title}</p>
            <div className="w-full h-20 flex items-center">
              <div className="lg:w-2/12 h-20 flex items-center justify-between">
                <img
                  src={channel.snippet.thumbnails.default.url}
                  alt=""
                  className="w-[40px] h-[40px] object-cover rounded-full"
                />
                <div className="flex-col">
                  <p className="font-bold text-sm">
                    {channel.snippet.localized.title}
                  </p>
                  {channel.statistics.subscriberCount > 999999 ? (
                    <p className="text-neutral-500">
                      {channel.statistics.subscriberCount.trim("")[0]}Mn
                      subscriber
                    </p>
                  ) : (
                    <p className="text-neutral-500">
                      {channel.statistics.subscriberCount
                        .trim("")
                        .substring(0, 3)}{" "}
                      B subscriber
                    </p>
                  )}
                </div>
              </div>
              <button
                className={`lg:w-28 h-10 rounded-full ${theme[2]} ${theme[1]} ml-6`}
              >
                Subscribe
              </button>
              <div className="lg:w-8/12 h-10 flex items-center justify-end ">
                <div
                  className={`w-28 h-8 flex items-center justify-evenly rounded-full ${theme[2]} ${theme[1]}`}
                >
                  <AiOutlineLike />
                  {video.statistics.likeCount.trim("")[0]} B
                  <div className="w-[2px] h-6 bg-neutral-500"></div>
                  <AiOutlineDislike />
                </div>
                <div
                  className={`w-20 h-8 flex items-center justify-evenly rounded-full ${theme[2]} ${theme[1]} ml-2`}
                >
                  <PiShareFat />
                  <p>Share</p>
                </div>
                <div
                  className={`w-10 h-8 flex items-center justify-evenly rounded-full ${theme[2]} ${theme[1]} ml-2`}
                >
                  <HiOutlineDotsHorizontal />
                </div>
              </div>
            </div>
            <div
              className={`w-full rounded-xl ${theme[2]} ${theme[1]} mt-2 p-2`}
            >
              <div className="w-full flex font-semibold">
                {video.statistics.viewCount > 999999 ? (
                  <p className="">
                    {video.statistics.viewCount.trim("")[0]} Mn views
                  </p>
                ) : (
                  <p className="">
                    {video.statistics.viewCount.trim("").substring(0, 3)} B
                    views
                  </p>
                )}
                <p className="ml-2">{publishDate}</p>
              </div>
              <p className="mt-3">{video.snippet.description}</p>
            </div>
          </>
        ) : null}
      </div>
      {video ? <VideoList categoryId={video.snippet.categoryId} /> : null}
    </div>
  );
};

export default Video;
