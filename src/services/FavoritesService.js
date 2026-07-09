const STORAGE_KEY = "nasa-favorites";

// Get all favorites
export const getFavorites = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// Save favorites
export const saveFavorites = (favorites) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
};

// Check favorite
export const isFavorite = (id) => {
  return getFavorites().some((item) => item.id === id);
};

// Add favorite
export const addFavorite = (item) => {
  const favorites = getFavorites();

  if (favorites.some((fav) => fav.id === item.id)) return;

  favorites.push(item);

  saveFavorites(favorites);
};

// Remove favorite
export const removeFavorite = (id) => {
  const favorites = getFavorites().filter((item) => item.id !== id);

  saveFavorites(favorites);
};
