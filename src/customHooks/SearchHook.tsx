import React, {createContext, useState, useContext} from 'react';
import {StyleSheet} from 'react-native';

export const SearchContext = createContext<{
  searchInput: string;
  setSearchInput: (value: string) => void;
}>({
  searchInput: '',
  setSearchInput: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <SearchContext.Provider value={{searchInput, setSearchInput}}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
