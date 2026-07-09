import nasaApi from "./axios";
import axios from "axios";

export const getTodayAPOD = async () => {
  const response = await nasaApi.get("/planetary/apod");

  return response.data;
};

export const getLibraryItems = async (query = "space", mediaType = "image") => {
  const response = await axios.get("https://images-api.nasa.gov/search", {
    params: {
      q: query,
      media_type: mediaType,
    },
  });

  return response.data.collection.items;
};
