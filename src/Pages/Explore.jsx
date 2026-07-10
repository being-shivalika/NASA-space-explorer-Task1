import { useRef, useState } from "react";
import MarsRover from "../components/section/MarsRover";
import NearEarthAsteroid from "../components/section/NearEarthAsteroids";

const Explore = () => {
  const [activeSection, setActiveSection] = useState("mars");
  const sectionRef = useRef(null);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden shadow-lg pt-15 ">
      <div className="relative z-20 mx-auto flex w-full h-120 flex-col justify-center px-4 py-16 text-left text-white md:items-center md:text-center ">
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
            onClick={() => handleSectionClick("mars")}
            className={`rounded-lg px-6 py-3 transition-all duration-300 ${
              activeSection === "mars"
                ? "bg-indigo-700 text-gray-300 hover:bg-blue-700"
                : "border border-white text-gray-300 hover:bg-white/25"
            }`}
          >
            Mars Rover
          </button>

          <button
            onClick={() => handleSectionClick("asteroid")}
            className={`rounded-lg px-6 py-3 transition-all duration-300 ${
              activeSection === "asteroid"
                ? "bg-indigo-700 text-gray-300 hover:bg-blue-700"
                : "rounded-lg border border-white text-white hover:bg-white/25"
            }`}
          >
            Near Earth Asteroids
          </button>
        </div>
      </div>

      {/* Content */}
      <div ref={sectionRef} className="relative mt-8 w-full overflow-hidden">
        {activeSection === "asteroid" && <NearEarthAsteroid />}

        {activeSection === "mars" && <MarsRover />}
      </div>
    </div>
  );
};

export default Explore;
