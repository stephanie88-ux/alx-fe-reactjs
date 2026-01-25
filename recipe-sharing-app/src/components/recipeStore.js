import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const SearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};