import Card from "../common/Card";

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
          <Card
            tag="MARS MISSION"
            title="Mars Rover Galleries"
            img={"Rover.webp"}
            description="Browse thousands of high-quality photos sent back over the years by Curiosity, Opportunity, and Spirit."
            buttonLabel="Explore Mars"
            onButtonClick={() => alert("Navigating to Mars...")}
          />
          <Card
            tag="APOLLO"
            title="NASA's best space mission"
            img={"moonLanding.jpg"}
            description="Discover the latest updates and images from the world of astronomy."
            buttonLabel="Explore Astronomy"
            onButtonClick={() => alert("Navigating to Astronomy...")}
          />
          <Card
            tag="APOD"
            title="Hubble spaceCraft"
            img={"HubbleSpace.webp"}
            description="Discover the latest stunning images from the world of astronomy."
            buttonLabel="Explore APOD"
            onButtonClick={() => alert("Navigating to APOD...")}
          />
        </div>
      </div>
    </>
  );
};

export default About;
