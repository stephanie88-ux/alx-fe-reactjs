import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function AddRecipeForm() {

const [title, setTitle] = useState('')
const [ingredients, setIngredients] = useState('')
const [cookingInstructions, setCookingInstructions] = useState('')
const [redirect, setRedirect] = useState(false)

const submitbutton = (e) => {
    e.preventDefault()

    handleSubmit()
}
const steps = [
    'Create a form with input fields for the recipe title, ingredients, and cooking instructions.',
    'Use useState to manage the form data.',
    'On form submission, send a POST request to the backend API to add the new recipe.',
    'Handle the response and redirect to the recipe list page if successful.'
]

    function handleSubmit() {
        const newRecipe = {
            title,
            ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
            cookingInstructions: cookingInstructions.split('.').map(instruction => instruction.trim())
        }

        fetch('/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(response => {
                if (response.ok) {
                    setRedirect(true)
                } else {
                    throw new Error('Failed to add recipe')
                }
            })
    }

if (redirect) {
    return <Navigate to="/recipes" />
}

return (
    <form onSubmit={submitbutton}>
        <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Recipe Title"
        />
        <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            placeholder="Ingredients (comma-separated)"
        />
        <textarea 
            value={cookingInstructions} 
            onChange={(e) => setCookingInstructions(e.target.value)} 
            placeholder="Cooking Instructions"
        />
        <button type="submit">Add Recipe</button>
    </form>
)
}

export default AddRecipeForm