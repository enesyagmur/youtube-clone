import axios from "axios";
import API_KEY from "./config";

export const getVideoList = async (categoryId) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=${categoryId}&maxResults=7&videoDuration=short&key=${API_KEY}`;

  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("Seçilen kategoriye göre api dan çekerken hata:", error);
  }
};
