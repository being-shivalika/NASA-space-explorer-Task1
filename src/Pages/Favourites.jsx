import { useFavorites } from "../context/FavoritesContext";

const Favourites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="mx-auto max-w-7xl px-4 pt-24 md:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border border-white/20"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-square w-full object-cover"
              />

              <button
                onClick={() => removeFromFavorites(item.id)}
                className="absolute top-3 right-3 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-black/40 text-yellow-400 backdrop-blur-sm hover:bg-black/60 transition-all"
              >
                <i className="fa-solid fa-star text-lg"></i>
              </button>
            </div>

            <h3 className="p-3 text-center text-white">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
