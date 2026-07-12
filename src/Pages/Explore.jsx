import NearEarthObject from "../components/section/NearEarthObject";

const Explore = () => {
  return (
    <div className="relative w-full overflow-hidden pt-15">
      {/* Asteroid Tracker */}
      <div className="relative w-full">
        <NearEarthObject />
      </div>
    </div>
  );
};

export default Explore;
