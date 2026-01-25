import RecommendationsList from 'react';
import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map(recipeId => (
        <div key={recipeId}>
          <h3>{useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId)?.title)}</h3>
          <p>{useRecipeStore(state => state.recipes.find(recipe => recipe.id === recipeId)?.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;