import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe }) => {
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const handleSubmit = (e) => {
        event.preventDefault();
        const updatedRecipe = { id: recipe.id, title: e.target.title.value, ingredients: e.target.ingredients.value };
        updateRecipe(updatedRecipe);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" defaultValue={recipe.title} />
            <textarea name="ingredients" defaultValue={recipe.ingredients} />
            <button type="submit">Update Recipe</button>
        </form>
    );
};