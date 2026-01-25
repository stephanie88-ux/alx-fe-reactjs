import { addRecipe, deleteRecipe, updateRecipe } from '../recipeDetails';
const RecipeDetails = ({ recipe }) => {
    const recipe = useRecipeStore((state) => 
        state.recipes.find (recipe => recipe.id === recipe.id)
);
};