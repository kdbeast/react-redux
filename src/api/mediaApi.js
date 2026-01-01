import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function getUnsplashImages(query, per_page = 20) {
  const response = await axios
    .get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_KEY}`,
      },
    })
    .then((res) => {
      const data = res.data;
      return data;
    })
    .catch((err) => {
      console.log("Error fetching images", err);
    });

  return response;
}

export async function getPexelsVideos(query, per_page = 20) {
  const response = await axios
    .get("https://api.pexels.com/videos/search", {
      params: {
        query,
        per_page,
      },
      headers: {
        Authorization: PEXELS_KEY,
      },
    })
    .then((res) => {
      const data = res.data.videos;
      return data;
    })
    .catch((err) => {
      console.log("Error fetching images", err);
    });

  return response;
}
