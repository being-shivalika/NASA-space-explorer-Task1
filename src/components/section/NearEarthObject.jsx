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
      <div className="mx-auto mb-12 max-w-4xl px-4">
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/4 p-5 backdrop-blur-sm sm:flex-row sm:items-end sm:justify-center">
          {/* Date */}
          <div className="flex flex-wrap justify-center align-middle gap-4">
            <label className="text-xs font-medium uppercase tracking-wide text-slate-400 mt-3">
              Select Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="date-input h-11 w-full rounded-xl border border-white/10 bg-black/40 px-4 text-sm text-white outline-none transition-all hover:border-white/20 focus:border-indigo-800/2 focus:ring-2 focus:ring-indigo-500/20 sm:w-64
  "
            />
          </div>

          {/* Hazard Filter */}
          <label
            htmlFor="hazardous"
            className="flex h-11 cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-slate-300 transition hover:border-white/20
      "
          >
            <input
              id="hazardous"
              type="checkbox"
              checked={hazardousOnly}
              onChange={(e) => setHazardousOnly(e.target.checked)}
              className="h-4 w-4 rounded border-slate-600 bg-black accent-indigo-500
        "
            />

            <span>Hazardous Objects Only</span>
          </label>

          {/* Search */}
          <button
            onClick={fetchAsteroids}
            className="h-11 rounded-xl bg-indigo-500 px-8 text-sm font-medium text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98]
      "
          >
            Search
          </button>
        </div>
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
