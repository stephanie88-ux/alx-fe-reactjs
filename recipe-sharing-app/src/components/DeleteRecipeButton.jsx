import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipe }) => {
    const recipe = useRecipeStore((state) => 
        state.recipes.find (recipe => recipe.id === recipe.id)
);
};

return (
    <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <button>Delete Recipe on click</button>
    </div>
);
export default RecipeDetails;