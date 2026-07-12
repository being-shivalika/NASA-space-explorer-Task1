import Card from "../common/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div
        id="about-section"
        className="relative flex w-full flex-col justify-center overflow-hidden px-4 py-16 text-white"
      >
        <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-start justify-center px-2 text-left md:items-center md:text-center">
          <h1 className="text-3xl font-bold playfair-display md:text-5xl">
            Explore the Deep Cosmos
          </h1>
          <h2 className="mt-4 max-w-3xl text-sm leading-relaxed open-sans md:text-lg lg:text-2xl">
            A new window into the universe every single day, backed by decades
            of space photography and missions.
          </h2>
        </div>

        <div className="mt-10 flex flex-nowrap gap-4 overflow-x-auto px-2 pb-2 scroll-smooth md:justify-center md:gap-6 md:px-6">
          <Link to="/apod" className="shrink-0">
            <Card
              tag="APOD"
              title="Astronomy Picture of the Day"
              img={"/planets/moonLanding.jpg"}
              description="Explore NASA's featured astronomy image with historical date search and detailed explanations."
              buttonLabel="Explore APOD"
            />
          </Link>
          <Link to="/explore#asteroids" className="shrink-0">
            <Card
              tag="APOD"
              title="Near-Earth Objects"
              img={"/planets/HubbleSpace.webp"}
              description="Track asteroids approaching Earth and filter potentially hazardous objects."
              buttonLabel="Track Asteroids"
            />
          </Link>

          <Link to="/apod" className="shrink-0">
            <Card
              tag="MARS MISSION"
              title="Mars Rover Galleries"
              img={"/planets/Rover.webp"}
              description="Browse images captured by NASA's Mars rovers using rover, camera, and Earth date filters."
              buttonLabel="Explore Mars"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
