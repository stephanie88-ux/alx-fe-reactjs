import create from'Zustand'
const UseRecipeStore = create((set) => ({
    recipes: [],
    addRecipe : (recipe) => set( state => ({recipe : [...state.recipes, recipe]})),
    setRecipe : (recipes) => set({recipes}),
}));