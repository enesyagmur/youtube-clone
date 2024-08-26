import axios from "axios";
import API_KEY from "./config";

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel®ionCode=TR&order=viewCount&maxResults=13&relevanceLanguage=tr&key=${API_KEY}`;

export const getTopChannels = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("topChannels verilerini redux a kaydederken hata:", error);
  }
};
