import axios from "axios";
import API_KEY from "./config";

export const searchFunc = async (term) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${term}&type=video&maxResults=10&videoDuration=medium&regionCode=TR&relevanceLanguage=tr&key=${API_KEY}
    `;
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("Search  yaparken hata:", error);
  }
};
