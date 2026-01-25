import {link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

  const RecipeDetails = ({ recipeId }) => {
    const filteredRecipe = useRecipeStore((state) => 
      state.recipes.find((recipe) => recipe.id === recipeId)
    );

    const map = useRecipeStore((state) => state.recipes
        .filter((recipe) => recipe.id === recipeId) 
    );

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

      </div>
    );
  };
