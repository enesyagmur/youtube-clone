import axios from "axios";
import API_KEY from "./config";

export const getChannel = async (channelId) => {
  const statistics_url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
  const videos_url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`;

  const statistics = await axios.get(`${statistics_url}`);

  const response_videos = await axios.get(`${videos_url}`);
  const videos = response_videos.data;

  const response = { ...videos, ...statistics.data.items[0] };

  return response;
};
