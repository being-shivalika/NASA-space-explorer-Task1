import React, { useState, useEffect } from "react";
import { useFavorites } from "../../context/FavoritesContext";

const Image = ({ items }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddToFav = (item) => {
    const favoriteItem = {
      id: item.data[0].nasa_id,
      title: item.data[0].title,
      image: item.links?.[0]?.href,
      description: item.data[0].description,
      mediaType: item.data[0].media_type,
    };

    if (isFavorite(favoriteItem.id)) {
      removeFromFavorites(favoriteItem.id);
    } else {
      addToFavorites(favoriteItem);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {items.map((item) => (
          <div
            key={item.data[0].nasa_id}
            className="group flex flex-col items-center gap-3 border border-white/25 rounded-xl pb-5"
          >
            <div
              onClick={() =>
                setSelectedImage({
                  image: item.links?.[0]?.href,
                  title: item.data[0].title,
                })
              }
              className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
            >
              <img
                src={item.links?.[0]?.href}
                alt={item.data[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToFav(item);
                }}
                className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-black/40 text-white/80 backdrop-blur-sm hover:text-yellow-400 hover:bg-black/60 transition-all duration-200"
              >
                <i
                  className={`${
                    isFavorite(item.data[0].nasa_id)
                      ? "fa-solid text-yellow-400"
                      : "fa-regular"
                  } fa-star text-lg`}
                />
              </button>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white text-sm border border-white/40 px-4 py-2 rounded-full backdrop-blur-md">
                  Click to Preview
                </span>
              </div>
            </div>

            <h3 className="mt-2 text-center text-sm font-medium text-white line-clamp-2">
              {item.data[0].title}
            </h3>
          </div>
        ))}
      </div>

      {/* Fullscreen Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-9999 bg-black/90 backdrop-blur-md flex items-center justify-center p-5 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl transition"
          >
            ✕
          </button>

          {/* Image */}
          <img
            onClick={(e) => e.stopPropagation()}
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
          />

          {/* Title */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white text-center max-w-[90%]">
            {selectedImage.title}
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
