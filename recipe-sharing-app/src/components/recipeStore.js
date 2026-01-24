import { useRecipeStore, setRecipes } from 'zustand';

const UseRecipeStore = create((set) => ({
    recipes: [],
    addRecipe : (recipe) => set( state => ({recipe : [...state.recipes, recipe]})),
    setRecipe : (recipes) => set({recipes}),
}));

export default UseRecipeStore;