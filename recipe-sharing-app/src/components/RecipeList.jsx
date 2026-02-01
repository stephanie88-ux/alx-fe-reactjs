import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import { zustand, create, addRecipe, setRecipe } from './recipeStore';
  const RecipeDetails = ({ recipeId }) => {
    const filteredRecipe = useRecipeStore((state) => 
      state.recipes.find((recipe) => recipe.id === recipeId)
    );

    const map = useRecipeStore((state) => state.recipes
        .filter((recipe) => recipe.id === recipeId) 
    );

    return (
      <div>
        <h1>{filteredRecipe.title}</h1>
        <p>{filteredRecipe.description}</p>
      </div>
    );
  };
