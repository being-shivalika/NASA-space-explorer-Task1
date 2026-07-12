import axios from "axios";
import nasaApi from "./axios";

export const getTodayAPOD = async () => {
  const { data } = await nasaApi.get("/planetary/apod");
  return data;
};

export const getAPODByDate = async (date) => {
  const { data } = await nasaApi.get("/planetary/apod", {
    params: {
      date,
    },
  });

  return data;
};

// APOD for a date range
export const getAPODByRange = async (startDate, endDate) => {
  const { data } = await nasaApi.get("/planetary/apod", {
    params: {
      start_date: startDate,
      end_date: endDate,
    },
  });

  return data;
};

// NASA Image & Video Library API
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

// Get all  images, videos
export const getLibraryAsset = async (nasaId) => {
  const { data } = await axios.get(
    `https://images-api.nasa.gov/asset/${nasaId}`,
  );

  return data.collection.items;
};

// Near Earth Object Tracker

export const getCloseApproachObjects = async ({
  startDate,
  hazardous = false,
}) => {
  const { data } = await nasaApi.get("/neo/rest/v1/feed", {
    params: {
      start_date: startDate,
    },
  });

  let asteroids = Object.values(data.near_earth_objects).flat();

  asteroids = asteroids.map((asteroid) => {
    const approach = asteroid.close_approach_data[0];

    return {
      id: asteroid.id,
      designation: asteroid.name,

      hazardous: asteroid.is_potentially_hazardous_asteroid,

      diameter: `${asteroid.estimated_diameter.meters.estimated_diameter_min.toFixed(
        1,
      )} - ${asteroid.estimated_diameter.meters.estimated_diameter_max.toFixed(
        1,
      )} m`,

      closeApproachDate: approach?.close_approach_date,

      velocityKmS: Number(
        approach?.relative_velocity.kilometers_per_second,
      ).toFixed(2),

      distanceKm: Number(approach?.miss_distance.kilometers).toLocaleString(),

      orbitingBody: approach?.orbiting_body,

      nasaUrl: asteroid.nasa_jpl_url,
    };
  });

  if (hazardous) {
    asteroids = asteroids.filter((asteroid) => asteroid.hazardous);
  }

  return asteroids;
};
