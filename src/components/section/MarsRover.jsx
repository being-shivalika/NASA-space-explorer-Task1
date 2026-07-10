import { useEffect, useState } from "react";
import { getMarsPhotos, formatNASAError } from "../../api/apodApi";
import MarsRoverCard from "../common/MarsRoverCard";

const MarsRover = () => {
  const [photos, setPhotos] = useState([]);

  const [rover, setRover] = useState("curiosity");
  const [camera, setCamera] = useState("");
  const [earthDate, setEarthDate] = useState("2020-07-01");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMarsPhotos = async () => {
    try {
      setLoading(true);
      setError("");

      console.log({
        rover,
        camera,
        earthDate,
      });

      const data = await getMarsPhotos({
        rover,
        earthDate,
        camera,
      });

      console.log(data);

      setPhotos(data);
    } catch (err) {
      console.log(err.response);
      console.log(err.response?.data);
      console.log(err.config?.url);
      console.log(err.config?.params);

      setError(formatNASAError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarsPhotos();
  }, []);

  return (
    <section className="w-full h-screen py-10">
      <div className="mx-auto mb-10 max-w-5xl px-4 text-center text-white">
        <h2 className="playfair-display text-3xl md:text-5xl">
          Mars Rover Explorer
        </h2>

        <p className="mt-4 text-sm text-slate-300 md:text-lg">
          Browse high-resolution photographs captured by NASA's Mars rovers.
          Filter by rover, camera, and Earth date to explore the Red Planet.
        </p>
      </div>

      {/* Filters */}
      <div className="mx-auto mb-10 flex max-w-6xl flex-wrap items-end justify-center gap-4 px-4">
        {/* Rover */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-white">Rover</label>

          <select
            value={rover}
            onChange={(e) => setRover(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white"
          >
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>

        {/* Camera */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-white">Camera</label>

          <select
            value={camera}
            onChange={(e) => setCamera(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white"
          >
            <option value="">All Cameras</option>
            <option value="FHAZ">Front Hazard Camera</option>
            <option value="RHAZ">Rear Hazard Camera</option>
            <option value="NAVCAM">Navigation Camera</option>
            <option value="MAST">Mast Camera</option>
            <option value="CHEMCAM">ChemCam</option>
            <option value="MAHLI">MAHLI</option>
          </select>
        </div>

        {/* Earth Date */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm text-white">Earth Date</label>

          <input
            type="date"
            value={earthDate}
            onChange={(e) => setEarthDate(e.target.value)}
            className="rounded-lg border border-slate-600 bg-slate-900 px-4 py-2 text-white"
          />
        </div>

        {/* Search */}
        <button
          onClick={fetchMarsPhotos}
          className="rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="mt-10 text-center text-lg text-white">
          Loading Mars photos...
        </p>
      )}

      {/* Error */}
      {/* Error */}
      {!loading && error && (
        <div className="mt-10 rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center w-150 ml-110">
          <h3 className="text-xl font-semibold text-red-400">
            Unable to load Mars Rover photos
          </h3>

          <p className="mt-2 text-slate-300">
            NASA's Mars Rover API is currently unavailable or returned an
            unexpected response. Please try again later.
          </p>

          <button
            onClick={fetchMarsPhotos}
            className="mt-5 rounded-lg bg-indigo-600 px-6 py-2 text-white transition hover:bg-indigo-700"
          >
            Retry
          </button>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && photos.length === 0 && (
        <p className="mt-10 text-center text-slate-400">
          No photos found for the selected filters.
        </p>
      )}

      {/* Gallery */}
      {!loading && !error && photos.length > 0 && (
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <MarsRoverCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MarsRover;
