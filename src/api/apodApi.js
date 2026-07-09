import axios from "axios";
import nasaApi from "./axios";

/* ===========================
   APOD API
=========================== */

// Get today's APOD
export const getTodayAPOD = async () => {
  const { data } = await nasaApi.get("/planetary/apod");
  return data;
};

// Get APOD by date
export const getAPODByDate = async (date) => {
  const { data } = await nasaApi.get("/planetary/apod", {
    params: {
      date,
    },
  });

  return data;
};

// Get APOD for a date range
export const getAPODByRange = async (startDate, endDate) => {
  const { data } = await nasaApi.get("/planetary/apod", {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });

  return data;
};

/* ===========================
   NASA Image & Video Library API
=========================== */

export const getLibraryItems = async ({
  query = "space",
  mediaType = "image",
  yearStart,
  yearEnd,
  page = 1,
} = {}) => {
  const { data } = await axios.get("https://images-api.nasa.gov/search", {
    params: {
      q: query,
      media_type: mediaType,
      year_start: yearStart,
      year_end: yearEnd,
      page,
    },
  });

  return data.collection.items;
};

// Get all available assets (high-resolution images, videos, etc.)
export const getLibraryAsset = async (nasaId) => {
  const { data } = await axios.get(
    `https://images-api.nasa.gov/asset/${nasaId}`,
  );

  return data.collection.items;
};

/* ===========================
   Mars Rover Photos API
=========================== */

export const getMarsPhotos = async ({
  rover = "curiosity",
  earthDate,
  sol,
  camera = "",
  page = 1,
}) => {
  const params = { page };

  if (earthDate) params.earth_date = earthDate;
  if (sol) params.sol = sol;
  if (camera) params.camera = camera;

  console.log("Rover:", rover);
  console.log("Params:", params);

  const { data } = await nasaApi.get(
    `/mars-photos/api/v1/rovers/${rover}/photos`,
    { params },
  );

  return data.photos;
};

/* ===========================
   Near Earth Objects API
=========================== */

export const getNearEarthObjects = async (startDate, endDate = startDate) => {
  const { data } = await nasaApi.get("/neo/rest/v1/feed", {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });

  return data;
};

// Return only hazardous asteroids
export const getHazardousAsteroids = async (date) => {
  const data = await getNearEarthObjects(date);

  return Object.values(data.near_earth_objects)
    .flat()
    .filter((asteroid) => asteroid.is_potentially_hazardous_asteroid);
};

/* ===========================
   Asteroid Details API
=========================== */

export const getAsteroidDetails = async (id) => {
  const { data } = await nasaApi.get(`/neo/rest/v1/neo/${id}`);

  return data;
};

/* ===========================
   Utility
=========================== */

export const formatNASAError = (error) => {
  return (
    error?.response?.data?.error?.message ||
    error?.message ||
    "Something went wrong while fetching NASA data."
  );
};
