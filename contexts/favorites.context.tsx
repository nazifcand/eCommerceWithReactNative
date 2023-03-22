/* eslint-disable react/react-in-jsx-scope */
import {createContext, useState} from 'react';

// contexts
export const FavoritesContext = createContext({});

export const FavoritesContextProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};
