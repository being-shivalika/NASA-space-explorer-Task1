const AsteroidCard = ({ asteroid }) => {
  const approach = asteroid.close_approach_data?.[0];

  const minDiameter =
    asteroid.estimated_diameter.kilometers.estimated_diameter_min.toFixed(2);

  const maxDiameter =
    asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2);

  const velocity = approach
    ? Number(approach.relative_velocity.kilometers_per_hour).toLocaleString(
        undefined,
        {
          maximumFractionDigits: 0,
        },
      )
    : "N/A";

  const missDistance = approach
    ? Number(approach.miss_distance.kilometers).toLocaleString(undefined, {
        maximumFractionDigits: 0,
      })
    : "N/A";

  const approachDate = approach ? approach.close_approach_date : "N/A";

  return (
    <div className="w-200 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          ☄️ {asteroid.name}
        </h3>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            asteroid.is_potentially_hazardous_asteroid
              ? "bg-red-500/20 text-red-400 border border-red-500/40"
              : "bg-green-500/20 text-green-400 border border-green-500/40"
          }`}
        >
          {asteroid.is_potentially_hazardous_asteroid ? "Hazardous" : "Safe"}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400">Estimated Diameter</span>
          <span className="text-white">
            {minDiameter} – {maxDiameter} km
          </span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400">Relative Velocity</span>
          <span className="text-white">{velocity} km/h</span>
        </div>

        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-gray-400">Miss Distance</span>
          <span className="text-white">{missDistance} km</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Closest Approach</span>
          <span className="text-white">{approachDate}</span>
        </div>
      </div>
    </div>
  );
};

export default AsteroidCard;
