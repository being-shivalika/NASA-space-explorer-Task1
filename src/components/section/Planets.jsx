import React from "react";
import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import { planets } from "../data/planets";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Planets = () => {
  return (
    <section className="relative overflow-hidden bg-space-bg px-4 py-16 md:px-6 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
      >
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            variants={itemVariants}
            className="glass-panel group relative flex flex-col items-center rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/20 hover:shadow-glass"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-xl border opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                borderColor: `${planet.color}40`,
                boxShadow: `inset 0 0 12px ${planet.color}15, 0 0 20px ${planet.color}10`,
              }}
            />

            <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
              <div
                className="absolute h-24 w-24 rounded-full blur-xl opacity-15"
                style={{ backgroundColor: planet.color }}
              />

              <div className="relative z-10 h-20 w-20 overflow-hidden rounded-full border border-white/5 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="h-full w-full scale-110 object-cover saturate-125"
                />
              </div>
            </div>

            <h3 className="font-orbitron text-xl font-bold text-white transition-colors group-hover:text-glow-blue">
              {planet.name}
            </h3>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {planet.tagline}
            </p>

            <div className="mt-6 grid w-full grid-cols-2 gap-2 border-t border-white/5 pt-4 text-left">
              <div>
                <span className="text-[9px] font-semibold uppercase text-gray-500">
                  Moons
                </span>
                <p className="mt-0.5 text-xs font-medium text-white">
                  {planet.moons.split(" (")[0]}
                </p>
              </div>

              <div>
                <span className="text-[9px] font-semibold uppercase text-gray-500">
                  Diameter
                </span>
                <p className="mt-0.5 text-xs font-medium text-white">
                  {planet.diameter.split(" ")[0]}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <CircleDot className="h-3 w-3 animate-pulse text-nasa-blue" />
              View Details
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Planets;
