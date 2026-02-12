import axios from 'axios'
import recipeDetail from './data.json'
import useEffect from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {
    const ingredients = recipeDetail.ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ))
    const cookinginstructions = recipeDetail.cookingInstructions.map((instruction, index) => (
        <li key={index}>{instruction}</li>
    ))
    const image = recipeDetail.costImage
    return (
        <div>
            <h1>{recipeDetail.title}</h1>
            <img src={image} alt={recipeDetail.title} />
            <h2>Ingredients</h2>
            <ul>{ingredients}</ul>
            <h2>Cooking Instructions</h2>
            <ol>{cookinginstructions}</ol>
        </div>
    );
}

<div className="text-center text-2xl font-bold shadow-lg">Recipe Detail</div>
export default RecipeDetail; 