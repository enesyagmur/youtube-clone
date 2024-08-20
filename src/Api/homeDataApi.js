import axios from "axios";
import API_KEY from "./config";
import { saveDataToHome } from "../Redux/homeSlice";

export const getDataForHome = async (dispatch) => {
  const BASE_URL1 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=10&maxResults=5&videoDuration=long&key=${API_KEY}`;
  const BASE_URL2 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=17&maxResults=5&videoDuration=long&key=${API_KEY}`;
  const BASE_URL3 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=23&maxResults=5&videoDuration=short&key=${API_KEY}`;
  const BASE_URL4 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=28&maxResults=5&videoDuration=long&key=${API_KEY}`;
  const BASE_URL5 = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=TR&videoCategoryId=20&maxResults=5&videoDuration=long&key=${API_KEY}`;

  try {
    const result1 = await axios.get(`${BASE_URL1}`);
    const result2 = await axios.get(`${BASE_URL2}`);
    const result3 = await axios.get(`${BASE_URL3}`);
    const result4 = await axios.get(`${BASE_URL4}`);
    const result5 = await axios.get(`${BASE_URL5}`);

    const result = [
      ...result1.data.items,
      ...result2.data.items,
      ...result3.data.items,
      ...result4.data.items,
      ...result5.data.items,
    ];

    dispatch(saveDataToHome([...result]));
    return result;
  } catch (error) {
    console.error("Home için api dan çekerken hata:", error);
  }
};
