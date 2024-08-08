import axios from "axios";

const API_KEY = "AIzaSyCFqdAhp2HEsQZVJlPic0h0808pKvACrnQ";

export const getTopVideosForCategory = async (CATEGORY_ID) => {
  const BASE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&videoCategoryId=${CATEGORY_ID}&maxResults=6&regionCode=TR&key=${API_KEY}
`;
  const response = await axios.get(`${BASE_URL}`);

  return response.data.items;
};
