import React from 'react';
import { useRecipeStore } from './recipeStore';
import favorites from './FavoritesList';
import recommendations from './RecommendationsList';
import { zustand, create, addRecipe, setRecipes } from 'zustand';

const SearchBar = () => {
const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

searchTerm = (term) => {
    setSearchTerm(term);
};

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};