import axios from "axios";
import API_KEY from "./config";

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=TR&relevanceLanguage=tr&type=video&videoDuration=short&maxResults=10&key=${API_KEY}`;

export const getShortsFunc = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("Shorts verilerini çekerken hata:", error);
  }
};
