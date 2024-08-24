import axios from "axios";
import API_KEY from "./config";

export const getComments = async (videoId) => {
  const COMMENTS_URL = `https://www.googleapis.com/youtube/v3/commentThreads?key=${API_KEY}&videoId=${videoId}&part=snippet&maxResults=5`;

  try {
    const response = await axios.get(`${COMMENTS_URL}`);
    const comments = response.data.items;

    return comments;
  } catch (error) {
    console.error("Comments api ında hata:", error);
  }
};
