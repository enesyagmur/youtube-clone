import axios from "axios";
import API_KEY from "./config";
import { saveDataToTrends } from "../Redux/trendsSlice";

const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&maxResults=10&key=${API_KEY}`;

export const getTrendsFunc = async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    dispatch(saveDataToTrends(response.data.items));
    return response.data.items;
  } catch (error) {
    console.error("trends api ında hata:", error);
  }
};
