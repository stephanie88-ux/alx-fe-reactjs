import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipe }) => {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const handleDelete = () => {
           deleteRecipe(recipe.id);
           navigate('/recipes');
}};

return (
    <div>
        <h2>{recipe.title}</h2>
        <p>{recipe.ingredients}</p>
        <button onClick={handleDelete}>Delete Recipe</button>
        
    </div>
);
export default RecipeDetails;   