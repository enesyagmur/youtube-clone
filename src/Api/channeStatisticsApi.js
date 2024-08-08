import axios from "axios";

const API_KEY = "AIzaSyCFqdAhp2HEsQZVJlPic0h0808pKvACrnQ";

export const getChannelStatistics = async (channelId) => {
  const statistics_Url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
  const response = await axios.get(`${statistics_Url}`);

  return response.data.items[0];
};
