import { useEffect, useState } from "react";
import AsteroidCard from "../common/AsteroidCard";
import { getNearEarthObjects, getAsteroidDetails } from "../../api/apodApi";

const EarthAsteroid = () => {
  const today = new Date().toISOString().split("T")[0];

  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedAsteroid, setSelectedAsteroid] = useState(null);
  const [details, setDetails] = useState(null);
  const [loadingDetails, setLoadingDetails] = useState(false);
  const [detailsCache, setDetailsCache] = useState({});

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

  const handleViewDetails = async (asteroid) => {
    setSelectedAsteroid(asteroid);

    if (detailsCache[asteroid.id]) {
      setDetails(detailsCache[asteroid.id]);
      return;
    }

    try {
      setLoadingDetails(true);

      const data = await getAsteroidDetails(asteroid.id);

      setDetails(data);

      setDetailsCache((prev) => ({
        ...prev,
        [asteroid.id]: data,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingDetails(false);
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
    <div className="relative w-full mt-20 overflow-hidden" id="asteroid">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Near-Earth Asteroid Tracker
      </h2>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {asteroids.map((asteroid) => (
          <AsteroidCard
            key={asteroid.id}
            asteroid={asteroid}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      {selectedAsteroid && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-162 rounded-2xl bg-zinc-900 border border-white/10 p-8">
            {loadingDetails ? (
              <p className="text-white">Loading asteroid details...</p>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {details?.name}
                </h2>

                <pre className="max-h-125 overflow-auto text-xs text-green-400">
                  {JSON.stringify(details, null, 2)}
                </pre>
              </>
            )}

            <button
              onClick={() => {
                setSelectedAsteroid(null);
                setDetails(null);
              }}
              className="mt-6 rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarthAsteroid;
