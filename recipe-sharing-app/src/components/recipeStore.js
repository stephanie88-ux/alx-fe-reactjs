 import { useRecipeStore } from '../components/recipeStore';

const RecipeDetails = ({ recipe }) => {
    const recipe = useRecipeStore((state) => 
        state.recipes.find (recipe => recipe.id === recipe.id)
);
};