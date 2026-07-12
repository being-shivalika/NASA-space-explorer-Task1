import React from "react";

const Card = ({ tag, title, img, description, buttonLabel, onButtonClick }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-lg w-full max-w-88 h-full min-h-136 flex flex-col justify-between">
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <img
          src={img}
          alt={title}
          className=" h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110
          "
        />

        <div
          className=" absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent transition-opacity duration-500 group-hover:opacity-80
          "
        />
      </div>

      <div className="flex flex-col p-6">
        {tag && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] playfair-display text-gray-400  text-center">
            {tag}
          </span>
        )}

        <h3
          className=" mt-3 text-2xl font-bold text-white transition-colors duration-300 open-sans group-hover:text-gray-300 text-center
          "
        >
          {title}
        </h3>

        <p className="mt-4 flex-1 text-xs leading-7 text-center open-sans text-slate-400">
          {description}
        </p>

        {buttonLabel && (
          <button
            onClick={onButtonClick}
            className="mt-8 rounded-lg border  hover:scale-105  border-cyan-800/30 bg-cyan-950/10 px-5 py-3  text-sm font-medium text-gray-300 transition-colors duration-300  hover:bg-blue-950/25 hover:text-white
            "
          >
            {buttonLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
