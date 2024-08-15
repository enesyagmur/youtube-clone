import axios from "axios";
import API_KEY from "./config";

export const getSelectedCategory = async (categoryId, count) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=${categoryId}&maxResults=${count}&videoDuration=short&key=${API_KEY}`;

  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("Muzikleri api dan çekerken hata:", error);
  }
};
