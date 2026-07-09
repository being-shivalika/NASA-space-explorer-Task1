import About from "../components/section/About";
import Planets from "../components/section/Planets";
import { planets } from "../components/data/planets";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden text-center shadow-lg shadow-gray-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
        >
          <source src="earth2.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-10 bg-black/25 bg-linear-to-b from-transparent to-black/50" />

        <div className="relative z-20 mx-auto flex max-w-sm flex-col items-start px-6 text-left text-white md:max-w-2xl lg:max-w-4xl lg:items-center lg:text-center mb-25 lg:mb-0">
          <h1 className="text-3xl font-bold leading-tight tracking-tight playfair-display md:text-5xl lg:text-6xl">
            Explore the Universe Through NASA's Open Source
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-gray-200 open-sans md:text-base lg:text-lg">
            Browse through years of stunning astronomy photos, explore
            high-resolution images caught on the surface of Mars, and track the
            real-time paths of asteroids passing close to Earth.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 lg:mt-8 flex  gap-4 md:flex-row">
            <NavLink to="/explore">
              <button className="rounded border border-white bg-transparent px-5 py-2.5 text-sm text-white transition-all duration-200 hover:bg-white/25 open-sans md:text-base">
                Start Exploring
              </button>
            </NavLink>
            <NavLink to="/articles">
              <button className="rounded border border-transparent bg-blue-700 px-5 py-2.5 text-sm text-white shadow-md transition-all duration-200 hover:border-white hover:bg-indigo-500 open-sans md:text-base">
                View articles
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />

      {/* Solar System Section */}
      <section
        id="explore"
        className="relative overflow-hidden bg-space-bg px-4 py-16 md:px-6 md:py-20"
      >
        {/* Ambient Decorative Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-space-purple/5 blur-[120px] animate-pulse-slow" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="font-orbitron text-2xl font-extrabold uppercase tracking-wider text-white playfair-display md:text-4xl lg:text-5xl">
              Explore the Solar System
            </h2>

            {/* Gradient Divider Line */}
            <div className="mt-4 h-0.5 w-20 bg-linear-to-r from-space-purple to-nasa-blue" />

            <p className="mt-4 max-w-xl text-xs leading-relaxed text-gray-400 open-sans md:text-sm">
              Select a celestial body to explore physical statistics, atmosphere
              composition, satellite data, and planetary characteristics.
            </p>
          </div>

          <Planets planets={planets} />
        </div>
      </section>
    </>
  );
};

export default Home;
