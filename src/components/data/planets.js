export const planets = [
  {
    id: "mercury",
    name: "Mercury",
    tagline: "The Swift Planet",
    diameter: "4,879 km",
    gravity: "3.7 m/s²",
    moons: "0",
    distanceFromSun: "57.9 million km",
    tempRange: "-180°C to 430°C",
    color: "#85868c",
    image: "mercury.webp", // Mercury representation
    description:
      "The smallest and closest planet to the Sun, Mercury is a scorched, cratered world with virtually no atmosphere to trap heat, resulting in the solar system's most extreme temperature fluctuations.",
    facts: [
      "A year on Mercury is only 88 Earth days, but a single day-night cycle takes 176 Earth days.",
      "Despite being closest to the Sun, it is not the hottest planet (Venus is).",
      "Mercury is shrinking; its iron core is cooling, causing the surface to wrinkle with cliffs up to a mile high.",
    ],
  },
  {
    id: "venus",
    name: "Venus",
    tagline: "Earth's Evil Twin",
    diameter: "12,104 km",
    gravity: "8.87 m/s²",
    moons: "0",
    distanceFromSun: "108.2 million km",
    tempRange: "460°C (Constant)",
    color: "#e3bb76",
    image: "venus.avif", // Venus representation
    description:
      "Venus is a runaway greenhouse world wrapped in crushing carbon dioxide clouds. Its surface pressure is 90 times Earth's, hot enough to melt lead, making it the hottest planet in the Solar System.",
    facts: [
      "Venus rotates backwards (retrograde) compared to most other planets.",
      "One day on Venus is longer than one year; it takes 243 Earth days to rotate once, but only 225 days to orbit the Sun.",
      "Its clouds are composed of highly corrosive sulfuric acid, making surface observation extremely difficult.",
    ],
  },
  {
    id: "earth",
    name: "Earth",
    tagline: "Our Blue Oasis",
    diameter: "12,742 km",
    gravity: "9.81 m/s²",
    moons: "1",
    distanceFromSun: "149.6 million km",
    tempRange: "-89°C to 58°C",
    color: "#2f6a69",
    image: "earth.jpg", // Earth representation
    description:
      "The only known planet in the universe to harbor life, Earth is a dynamic ocean world with an atmosphere rich in nitrogen and oxygen, maintaining the delicate thermal balance necessary for liquid water.",
    facts: [
      "Earth is the only planet not named after a mythological god or goddess.",
      "The planet's magnetic field shielding protects us from harmful solar radiation.",
      "Water covers roughly 71% of Earth's surface, while the remaining 29% consists of continents and islands.",
    ],
  },
  {
    id: "mars",
    name: "Mars",
    tagline: "The Red Planet",
    diameter: "6,779 km",
    gravity: "3.71 m/s²",
    moons: "2 (Phobos & Deimos)",
    distanceFromSun: "227.9 million km",
    tempRange: "-153°C to 20°C",
    color: "#c1440e",
    image: "Mars.jpg", // Mars representation
    description:
      "A cold, dry desert world covered in iron oxide dust, Mars features towering ancient volcanoes, vast canyon systems, and polar ice caps composed of water and frozen carbon dioxide.",
    facts: [
      "Mars is home to Olympus Mons, the largest volcano in the Solar System, three times higher than Mount Everest.",
      "Liquid water cannot exist on the Martian surface for long due to its extremely thin atmosphere.",
      "NASA currently operates multiple rovers and landers on Mars to search for ancient biosignatures.",
    ],
  },
  {
    id: "jupiter",
    name: "Jupiter",
    tagline: "The King of Planets",
    diameter: "139,820 km",
    gravity: "24.79 m/s²",
    moons: "95 (Io, Europa, Ganymede...)",
    distanceFromSun: "778.5 million km",
    tempRange: "-110°C (Cloud tops)",
    color: "#b07f35",
    image: "Jupiter.jpg", // Jupiter representation
    description:
      "The largest planet in our solar system, Jupiter is a gas giant containing more than twice the mass of all other planets combined, famous for its colorful cloud bands and the Great Red Spot storm.",
    facts: [
      "The Great Red Spot is a persistent high-pressure storm twice the width of Earth that has raged for at least 300 years.",
      "Jupiter rotates faster than any other planet, completing a full rotation in just under 10 hours.",
      "Its moon Europa hides a global liquid water ocean beneath its icy crust that could potentially host extraterrestrial life.",
    ],
  },
  {
    id: "saturn",
    name: "Saturn",
    tagline: "The Jewel of the Solar System",
    diameter: "116,460 km",
    gravity: "10.44 m/s²",
    moons: "146 (Titan, Enceladus...)",
    distanceFromSun: "1.4 billion km",
    tempRange: "-140°C (Cloud tops)",
    color: "#e2bf7d",
    image: "Saturn.jpg", // Saturn representation
    description:
      "Adorned with a dazzling, complex ring system made of ice and rock fragments, Saturn is a gas giant with the lowest density in the solar system—it could float in a giant bathtub.",
    facts: [
      "Saturn's rings are extremely wide (up to 282,000 km) but incredibly thin, averaging only about 10 meters in thickness.",
      "Its moon Titan is the only moon in the solar system with a thick atmosphere and liquid hydrocarbon lakes.",
      "Saturn has a persistent hexagonal cloud pattern at its north pole, a mysterious fluid dynamics phenomenon.",
    ],
  },
  {
    id: "uranus",
    name: "Uranus",
    tagline: "The Bullseye Planet",
    diameter: "50,724 km",
    gravity: "8.69 m/s²",
    moons: "28 (Titania, Oberon...)",
    distanceFromSun: "2.9 billion km",
    tempRange: "-195°C (Average)",
    color: "#4b70dd",
    image: "Uranus.jpg", // Uranus representation
    description:
      "Uranus is an ice giant wrapped in pale cyan methane clouds. It is unique for its extreme axial tilt of 98 degrees, causing it to literally roll on its side as it orbits the Sun.",
    facts: [
      "Uranus was the first planet discovered with a telescope, found by William Herschel in 1781.",
      "Its extreme tilt causes 21-year-long seasons where one pole is bathed in continuous sunlight while the other is in dark winter.",
      "Like Saturn, Uranus has rings, though they are thin, dark, and hard to detect.",
    ],
  },
  {
    id: "neptune",
    name: "Neptune",
    tagline: "The Windy World",
    diameter: "49,244 km",
    gravity: "11.15 m/s²",
    moons: "16 (Triton, Nereid...)",
    distanceFromSun: "4.5 billion km",
    tempRange: "-200°C (Average)",
    color: "#274687",
    image: "pluto.jpg ", // Neptune representation
    description:
      "The most distant planet in our solar system, Neptune is a deep-blue ice giant whipped by supersonic winds up to 2,100 km/h and orbits the Sun once every 165 Earth years.",
    facts: [
      "Neptune was discovered through mathematical calculations rather than direct observation, after anomalies in Uranus' orbit were noticed.",
      "Its active weather system once featured the Great Dark Spot, a massive storm similar to Jupiter's Red Spot.",
      "Its largest moon, Triton, orbits the planet in a backward (retrograde) direction, suggesting it was captured from the Kuiper Belt.",
    ],
  },
];
