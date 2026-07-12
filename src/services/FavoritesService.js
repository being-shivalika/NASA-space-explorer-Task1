const STORAGE_KEY = "nasa-favorites";

export const getFavorites = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
};

export const isFavorite = (id) => {
  return getFavorites().some((item) => item.id === id);
};

export const addFavorite = (item) => {
  const favorites = getFavorites();

  if (favorites.some((fav) => fav.id === item.id)) return;

  favorites.push(item);

  saveFavorites(favorites);
};

export const removeFavorite = (id) => {
  const favorites = getFavorites().filter((item) => item.id !== id);

  saveFavorites(favorites);
};
