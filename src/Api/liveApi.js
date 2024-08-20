import axios from "axios";
import API_KEY from "./config";
import { saveDataToLive } from "../Redux/liveSlice";

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=TR&type=video&eventType=live&relevanceLanguage=tr&maxResults=10&key=${API_KEY}
`;

export const getLiveFunc = async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    dispatch(saveDataToLive(response.data.items));
    return response.data.items;
  } catch (error) {
    console.error("Canlı yayınları çekerken Api da hata:", error);
  }
};
