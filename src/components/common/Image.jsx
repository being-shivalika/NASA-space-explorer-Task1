import React from "react";
import { useFavorites } from "../../context/FavoritesContext";

const Image = ({ items }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

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

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4">
      {items.map((item) => (
        <div
          key={item.data[0].nasa_id}
          className="group flex flex-col items-center gap-3 border border-white/25 rounded-xl pb-5"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
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
          </div>

          <h3 className="mt-2 text-center text-sm font-medium text-white line-clamp-2">
            {item.data[0].title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Image;
