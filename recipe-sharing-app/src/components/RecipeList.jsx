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
        <h1>{filteredRecipe.title}</h1>
        <p>{filteredRecipe.description}</p>
      <link to="/recipes">Back to Recipes</link>
      
      </div>
    );
  };
