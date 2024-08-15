import axios from "axios";
import API_KEY from "./config";

export const getSelectedCategoryAndTimeFunc = async (
  categoryId,
  count,
  time
) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&regionCode=TR&videoCategoryId=${categoryId}&maxResults=${count}&videoDuration=${time}&type=video&relevanceLanguage=tr&key=${API_KEY}`;
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error(
      "videoları categorisi ve uzunluğuna göre çekerken api da hata:",
      error
    );
  }
};
