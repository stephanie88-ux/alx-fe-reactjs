import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipe }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const handleDelete = () => {
           deleteRecipe(recipe.id);
}};

return (
    <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <navigate>
        <button onClick={handleDelete}>Delete Recipe</button>
        </navigate>
    </div>
);
export default RecipeDetails;   