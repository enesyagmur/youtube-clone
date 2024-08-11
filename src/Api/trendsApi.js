import axios from "axios";

const API_KEY = "AIzaSyDntjNid8GujwqeYDdKqUSh1CVqtrjp6hI";
const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&maxResults=10&key=${API_KEY}`;

export const getTrendsFunc = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.items;
};
