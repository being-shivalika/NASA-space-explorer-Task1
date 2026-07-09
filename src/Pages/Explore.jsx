import { useState } from "react";
import MarsRover from "../components/section/MarsRover";
import NearEarthAsteroid from "../components/section/NearEarthAsteroids";

const Explore = () => {
  const [activeSection, setActiveSection] = useState("solar");

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-4 py-16 text-left text-white md:items-center md:text-center">
        <h1 className="text-3xl font-bold playfair-display md:text-5xl">
          Beyond Earth: Into the Unknown
        </h1>

        <h2 className="mt-4 text-sm leading-relaxed open-sans md:text-lg lg:text-2xl">
          Expanding humanity's frontier through science, exploration, and
          discovery.
        </h2>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 md:flex-row md:justify-center">
          <button
            onClick={() => setActiveSection("solar")}
            className={`rounded-lg px-6 py-3 transition-all duration-300 ${
              activeSection === "solar"
                ? "bg-indigo-700 text-gray-300 hover:bg-blue-700"
                : "rounded-lg border border-white text-white hover:bg-white/25"
            }`}
          >
            Solar System
          </button>

          <button
            onClick={() => setActiveSection("mission")}
            className={`rounded-lg px-6 py-3 transition-all duration-300 ${
              activeSection === "mission"
                ? "bg-indigo-700 text-gray-300 hover:bg-blue-700"
                : "border border-white text-gray-300 hover:bg-white/25"
            }`}
          >
            Space Missions
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-20 w-full overflow-hidden">
        {activeSection === "solar" && <NearEarthAsteroid />}

        {activeSection === "mission" && <MarsRover />}
      </div>
    </div>
  );
};

export default Explore;
