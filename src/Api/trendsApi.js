import axios from "axios";
import API_KEY from "./config";

const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&maxResults=10&key=${API_KEY}`;

export const getTrendsFunc = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.items;
};
