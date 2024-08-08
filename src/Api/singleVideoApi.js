import axios from "axios";

const API_KEY = "AIzaSyDntjNid8GujwqeYDdKqUSh1CVqtrjp6hI";

export const getSingleVideo = async (videoId) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics,contentDetails`;
  const response = await axios.get(`${BASE_URL}`);

  return response.data.items[0];
};
