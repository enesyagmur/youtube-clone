import axios from "axios";
import API_KEY from "./config";
import { saveDataToMusics } from "../Redux/musicSlice";
import { saveDataToSpors } from "../Redux/sporSlice";
import { saveDataToGames } from "../Redux/gameSlice";

export const getSelectedCategoryAndSaveRedux = async (
  categoryId,
  count,
  dispatch
) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=${categoryId}&maxResults=${count}&videoDuration=short&key=${API_KEY}`;

  try {
    const response = await axios.get(`${BASE_URL}`);
    if (categoryId === "10") {
      dispatch(saveDataToMusics(response.data.items));
      return response.data.items;
    } else if (categoryId === "17") {
      dispatch(saveDataToGames(response.data.items));
      return response.data.items;
    } else if (categoryId === "20") {
      dispatch(saveDataToSpors(response.data.items));
      return response.data.items;
    }
  } catch (error) {
    console.error("Seçilen kategoriye göre api dan çekerken hata:", error);
  }
};
