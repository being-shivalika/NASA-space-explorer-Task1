const MarsRoverCard = ({ photo }) => {
  const { img_src, earth_date, sol, camera, rover } = photo;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-lg transition-all duration-300 hover:border-indigo-500 hover:shadow-xl">
      <img
        src={img_src}
        alt={`${rover.name} - ${camera.full_name}`}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-2 p-5 text-white">
        <h3 className="text-xl font-semibold">{rover.name} Rover</h3>

        <p className="text-sm text-slate-300">
          <span className="font-medium text-white">Camera:</span>{" "}
          {camera.full_name}
        </p>

        <p className="text-sm text-slate-300">
          <span className="font-medium text-white">Earth Date:</span>{" "}
          {earth_date}
        </p>

        <p className="text-sm text-slate-300">
          <span className="font-medium text-white">Martian Sol:</span> {sol}
        </p>

        <p className="text-sm text-slate-300">
          <span className="font-medium text-white">Status:</span> {rover.status}
        </p>
      </div>
    </div>
  );
};

export default MarsRoverCard;
