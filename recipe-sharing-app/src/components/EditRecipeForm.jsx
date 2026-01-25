import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipe }) => {
    const recipe = useRecipeStore((state) => 
        state.recipes.find (recipe => recipe.id === recipe.id)
);
};

return (
    <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm */}
        </div>
);
