import { createContext, useContext, useEffect, useState } from "react";

import {
  getFavorites,
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../services/FavoritesService";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const addToFavorites = (item) => {
    addFavorite(item);
    setFavorites(getFavorites());
  };
  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const removeFromFavorites = (id) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,

        addToFavorites,

        removeFromFavorites,

        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
