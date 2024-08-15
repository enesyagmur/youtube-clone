import axios from "axios";
import API_KEY from "./config";

export const getChannelStatistics = async (channelId) => {
  const statistics_Url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
  const response = await axios.get(`${statistics_Url}`);

  return response.data.items[0];
};
