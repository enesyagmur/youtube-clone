import axios from "axios";
import API_KEY from "./config";

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
