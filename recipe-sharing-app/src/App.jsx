import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App () {
  return (
    <div style={{ 
    maxWidth: '800px', 
     margin: '0 auto', 
     padding: '20px' }}>
     
      <RecipeList />
      <AddRecipeFrom />
    </div>
  )

}