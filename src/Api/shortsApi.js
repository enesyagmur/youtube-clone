import axios from "axios";
import API_KEY from "./config";
import { saveDataToShorts } from "../Redux/shortSlice";

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=TR&relevanceLanguage=tr&type=video&videoDuration=short&maxResults=10&key=${API_KEY}`;

export const getDataForShorts = async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    dispatch(saveDataToShorts(response.data.items));
    return response.data.items;
  } catch (error) {
    console.error("Shorts verilerini redux a kaydederken hata:", error);
  }
};
