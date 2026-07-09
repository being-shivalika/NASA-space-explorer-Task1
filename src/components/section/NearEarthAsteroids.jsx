import { useEffect, useState } from "react";
import AsteroidCard from "../common/AsteroidCard";
import { getNearEarthObjects } from "../../api/apodApi";

const NearEarthAsteroid = () => {
  const today = new Date().toISOString().split("T")[0];

  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAsteroids();
  }, []);

  const fetchAsteroids = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getNearEarthObjects(today);

      const asteroidList = Object.values(data.near_earth_objects).flat();

      setAsteroids(asteroidList);
    } catch (err) {
      console.error(err);
      setError("Failed to load Near-Earth Asteroids.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-white">
        Loading Near-Earth Asteroids...
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-400">{error}</div>;
  }

  return (
    <div className="relative w-full mt-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Near-Earth Asteroid Tracker
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {asteroids.map((asteroid) => (
          <AsteroidCard key={asteroid.id} asteroid={asteroid} />
        ))}
      </div>
    </div>
  );
};

export default NearEarthAsteroid;
