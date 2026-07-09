import Card from "../common/Card";

const SolarSystem = () => {
  return (
    <>
      <div className="relative w-full mt-20 overflow-hidden text-center flex flex-wrap justify-center  gap-6">
        <Card
          tag="Pluto"
          title="Journey to the Dwarf Planet"
          description="Pluto, once considered the ninth planet, was reclassified as a dwarf planet in 2006. It lies about 3.7 billion miles from the Sun and has a thin atmosphere of nitrogen, methane, and carbon monoxide."
          buttonLabel="Discover Pluto"
          img={"pluto.jpg"}
          onButtonClick={() => alert("Navigating to Pluto...")}
        />

        <Card
          tag="Earth"
          title="Our Living Planet"
          description="Earth is the only planet known to harbor life, with 70% of its surface covered by liquid water. It has a protective atmosphere that sustains ecosystems and shields us from harmful solar radiation."
          buttonLabel="Explore Earth"
          img={"earth.jpg"}
          onButtonClick={() => alert("Navigating to Earth...")}
        />

        <Card
          tag="Saturn"
          title="The Ringed Giant"
          description="Saturn is the second-largest planet in our solar system, famous for its spectacular rings made of billions of icy particles. It has over 270 confirmed moons, including Titan, which has lakes of liquid methane."
          buttonLabel="Explore Saturn"
          img={"Saturn.jpg"}
          onButtonClick={() => alert("Navigating to Saturn...")}
        />
        <Card
          tag="Mercury"
          title="The Swift Planet"
          description="Mercury is the smallest and closest planet to the Sun. A rocky world with almost no atmosphere, it experiences the most extreme temperature changes in the Solar System."
          buttonLabel="Discover Mercury"
          img={"mercury.webp"}
          onButtonClick={() => alert("Navigating to Mercury...")}
        />

        <Card
          tag="Venus"
          title="Earth's Evil Twin"
          description="Venus is the hottest planet in the Solar System due to its dense carbon dioxide atmosphere and runaway greenhouse effect, despite not being closest to the Sun."
          buttonLabel="Discover Venus"
          img={"venus.avif"}
          onButtonClick={() => alert("Navigating to Venus...")}
        />

        <Card
          tag="Earth"
          title="Our Blue Oasis"
          description="Earth is the only known planet to support life, with abundant liquid water, a protective atmosphere, and diverse ecosystems spanning every continent."
          buttonLabel="Discover Earth"
          img={"earth.jpg"}
          onButtonClick={() => alert("Navigating to Earth...")}
        />

        <Card
          tag="Mars"
          title="The Red Planet"
          description="Mars is a cold desert world famous for its red iron-rich surface, massive volcanoes, deep canyons, polar ice caps, and ongoing robotic exploration missions."
          buttonLabel="Discover Mars"
          img={"Mars.jpg"}
          onButtonClick={() => alert("Navigating to Mars...")}
        />

        <Card
          tag="Jupiter"
          title="The King of Planets"
          description="Jupiter is the largest planet in our Solar System, renowned for its Great Red Spot, colorful cloud bands, and dozens of fascinating moons including Europa."
          buttonLabel="Discover Jupiter"
          img={"Jupiter.jpg"}
          onButtonClick={() => alert("Navigating to Jupiter...")}
        />

        <Card
          tag="Saturn"
          title="The Jewel of the Solar System"
          description="Saturn is instantly recognizable by its magnificent ring system made of ice and rock particles, making it one of the most visually stunning planets."
          buttonLabel="Discover Saturn"
          img={"Saturn.jpg"}
          onButtonClick={() => alert("Navigating to Saturn...")}
        />

        <Card
          tag="Uranus"
          title="The Bullseye Planet"
          description="Uranus is an ice giant that rotates on its side due to its extreme axial tilt, giving it unusual seasons unlike any other planet in the Solar System."
          buttonLabel="Discover Uranus"
          img={"Uranus.jpg"}
          onButtonClick={() => alert("Navigating to Uranus...")}
        />

        <Card
          tag="Neptune"
          title="The Windy World"
          description="Neptune is the farthest known planet from the Sun, famous for its deep blue color, supersonic winds, and mysterious storms raging across its atmosphere."
          buttonLabel="Discover Neptune"
          img={"pluto.jpg"}
          onButtonClick={() => alert("Navigating to Neptune...")}
        />
      </div>
    </>
  );
};
export default SolarSystem;
