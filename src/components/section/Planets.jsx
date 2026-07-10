import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleDot, X } from "lucide-react";
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
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <section className="relative overflow-hidden bg-space-bg px-4 py-16 md:px-6 md:py-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 items-stretch"
      >
        {planets.map((planet) => (
          <motion.div
            key={planet.id}
            variants={itemVariants}
            onClick={() => setSelectedPlanet(planet)}
            className="glass-panel group relative flex h-full min-h-136 cursor-pointer flex-col rounded-xl border border-white/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-white/25 hover:shadow-glass"
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
            <span className="text-[10px] uppercase tracking-[0.25em] text-nasa-blue playfair-display">
              {planet.category}
            </span>

            {/* Title */}
            <h3 className="mt-2 font-orbitron text-xl font-bold text-white open-sans">
              {planet.name}
            </h3>

            {/* Description */}
            <p className="mt-3 line-clamp-4 text-sm leading-6 text-gray-300 open-sans">
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

      {/* Planet Details Modal */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlanet(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-white/10 bg-[#070b16] shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPlanet(null)}
                className="absolute right-5 top-5 z-20 rounded-full bg-black/40 p-2 text-white transition hover:bg-white hover:text-black"
              >
                <X size={20} />
              </button>

              {/* Hero Image */}
              <div className="relative">
                <img
                  src={selectedPlanet.image}
                  alt={selectedPlanet.name}
                  className="h-88 w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#070b16] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-nasa-blue">
                  {selectedPlanet.category}
                </span>

                <h2 className="mt-2 font-orbitron text-4xl font-bold text-white">
                  {selectedPlanet.name}
                </h2>

                <p className="mt-6 text-base leading-8 text-gray-300">
                  {selectedPlanet.description}
                </p>

                {/* Facts */}
                <div className="mt-8">
                  <h3 className="mb-5 text-2xl font-semibold text-white">
                    Interesting Facts
                  </h3>

                  <div className="space-y-4">
                    {selectedPlanet.facts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
                      >
                        <CircleDot className="mt-1 h-5 w-5 shrink-0 text-nasa-blue" />

                        <p className="text-gray-300">{fact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-sm text-gray-400">
                    Click outside the card or press × to close.
                  </span>

                  <button
                    onClick={() => setSelectedPlanet(null)}
                    className="rounded-lg bg-nasa-blue px-5 py-2 text-sm font-semibold text-white transition hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Planets;
