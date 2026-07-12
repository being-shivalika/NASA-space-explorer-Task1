const NearEarthCard = ({ asteroid }) => {
  const {
    designation,
    hazardous,
    diameter,
    closeApproachDate,
    velocityKmS,
    distanceKm,
    orbitingBody,
    nasaUrl,
  } = asteroid;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-lg transition-all duration-300 hover:border-indigo-500 hover:shadow-xl">
      {/* Header */}
      <div className="border-b border-white/10 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="line-clamp-1 text-lg font-semibold text-white">
            ☄️ {designation}
          </h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              hazardous
                ? "bg-red-500/20 text-red-400"
                : "bg-emerald-500/20 text-emerald-400"
            }`}
          >
            {hazardous ? "Hazardous" : "Safe"}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-4 p-5 text-sm text-slate-300">
        <div className="flex justify-between gap-4">
          <span className="font-medium text-white">Close Approach</span>
          <span>{closeApproachDate}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-white">Estimated Diameter</span>
          <span>{diameter}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-white">Velocity</span>
          <span>{velocityKmS} km/s</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-white">Miss Distance</span>
          <span>{distanceKm} km</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="font-medium text-white">Orbiting Body</span>
          <span>{orbitingBody}</span>
        </div>

        <a
          href={nasaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full rounded-lg bg-indigo-600 px-4 py-2 text-center font-medium text-white transition hover:bg-indigo-700"
        >
          View on NASA ↗
        </a>
      </div>
    </div>
  );
};

export default NearEarthCard;
