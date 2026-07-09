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
        className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            variants={itemVariants}
            className="glass-panel group relative flex flex-col rounded-xl border border-white/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/25 hover:shadow-glass"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            {/* Glow Border */}
            <div
              className="pointer-events-none absolute inset-0 rounded-xl border opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                borderColor: `${planet.color}40`,
                boxShadow: `inset 0 0 12px ${planet.color}15, 0 0 20px ${planet.color}10`,
              }}
            />

            {/* Image */}
            <div className="relative mb-6 flex justify-center">
              <div
                className="absolute h-24 w-24 rounded-full blur-xl opacity-20"
                style={{ backgroundColor: planet.color }}
              />

              <div className="relative z-10 h-24 w-24 overflow-hidden rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={planet.image}
                  alt={planet.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Category */}
            <span className="text-[10px] uppercase tracking-[0.25em] text-nasa-blue">
              {planet.category}
            </span>

            {/* Title */}
            <h3 className="mt-2 font-orbitron text-xl font-bold text-white">
              {planet.name}
            </h3>

            {/* Description */}
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-300">
              {planet.description}
            </p>

            {/* Facts */}
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">
                Did You Know?
              </p>

              <p className="mt-2 text-xs leading-5 text-gray-300">
                {planet.facts[0]}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-nasa-blue">
              <CircleDot className="h-4 w-4 animate-pulse" />
              Explore More
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Planets;
