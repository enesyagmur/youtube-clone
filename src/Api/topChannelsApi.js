import axios from "axios";

const API_KEY = "AIzaSyDntjNid8GujwqeYDdKqUSh1CVqtrjp6hI";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const getTopChannels = async () => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      type: "channel",
      regionCode: "TR",
      order: "viewCount",
      maxResults: 5,
      key: API_KEY,
    },
  });

  return response.data.items;
};
