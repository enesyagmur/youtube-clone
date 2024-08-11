import axios from "axios";

const API_KEY = "AIzaSyDntjNid8GujwqeYDdKqUSh1CVqtrjp6hI";

export const getSelectedCategory = async (categoryId, count) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=${categoryId}&maxResults=${count}&key=${API_KEY}
`;
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.items;
  } catch (error) {
    console.error("Muzikleri api dan çekerken hata:", error);
  }
};
