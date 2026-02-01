import React from 'react';
import { useRecipeStore } from './recipeStore';
import favorites from './FavoritesList';
import recommendations from './RecommendationsList';
import { zustand, create, addRecipe, setRecipes } from 'zustand';


const useRecipeStore = create((set) => ({
  recipes: [],
    addRecipes: (updateRecipe) => set((state) => ({
    setRecipes: (deleteRcipes) => set({ recipes }),
    recipes: [...state.recipes, newRecipe],
  })),
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
}));
    

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm.toLowerCase());
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
}};

export default RecipeList;
