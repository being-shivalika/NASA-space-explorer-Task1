import { useEffect, useState } from "react";
import { getCloseApproachObjects } from "../../api/apodApi";
import NearEarthCard from "../common/NearEarthCard";

const NearEarthObject = () => {
  const today = new Date().toISOString().split("T")[0];

  const [asteroids, setAsteroids] = useState([]);
  const [startDate, setStartDate] = useState(today);
  const [hazardousOnly, setHazardousOnly] = useState(false);

  const [loading, setLoading] = useState(false);

  const fetchAsteroids = async () => {
    try {
      setLoading(true);

      const data = await getCloseApproachObjects({
        startDate,
        hazardous: hazardousOnly,
      });

      setAsteroids(data);
    } catch (err) {
      console.error(err);
      setAsteroids([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAsteroids();
  }, []);

  return (
    <section className="w-full py-10">
      {/* Heading */}
      <div className="mx-auto mb-10 max-w-5xl px-4 text-center text-white">
        <h2 className="playfair-display text-3xl md:text-5xl">
          Near-Earth Object Tracker
        </h2>

        <p className="mt-4 text-sm text-slate-300 md:text-lg">
          Track near-Earth asteroids using NASA's Near Earth Object Web Service.
          Search by date and filter potentially hazardous objects.
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-center gap-5 px-4">
        {/* Date */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-white">Date</label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white"
          />
        </div>

        {/* Hazard Filter */}
        <div className="flex items-center gap-3 pb-2">
          <input
            id="hazardous"
            type="checkbox"
            checked={hazardousOnly}
            onChange={(e) => setHazardousOnly(e.target.checked)}
            className="h-5 w-5"
          />

          <label htmlFor="hazardous" className="text-white">
            Hazardous Only
          </label>
        </div>

        {/* Search */}
        <button
          onClick={fetchAsteroids}
          className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg text-white">
          Loading Near-Earth Objects...
        </p>
      )}

      {/* Empty */}
      {!loading && asteroids.length === 0 && (
        <p className="mt-10 text-center text-slate-400">
          No asteroids found for the selected date.
        </p>
      )}

      {/* Grid */}
      {!loading && asteroids.length > 0 && (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {asteroids.map((asteroid) => (
            <NearEarthCard key={asteroid.id} asteroid={asteroid} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NearEarthObject;
