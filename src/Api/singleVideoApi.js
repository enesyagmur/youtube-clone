import axios from "axios";
import API_KEY from "./config";

export const getSingleVideo = async (videoId) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics,contentDetails`;
  const response = await axios.get(`${BASE_URL}`);

  return response.data.items[0];
};
