import { useRecipeStore, setRecipes } from '../components/recipeStore';

const UseRecipeStore = create((set) => ({
    recipes: [],
    addRecipe : (recipe) => set( state => ({recipe : [...state.recipes, recipe]})),
    setRecipe : (recipes) => set({recipes}),
}));

export default UseRecipeStore;