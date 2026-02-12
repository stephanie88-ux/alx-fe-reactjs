import useState from 'react'
import { Navigate } from 'react-router-dom'

function AddRecipeForm() {

const [title, setTitle] = useState('')
const [ingredients, setIngredients] = useState('')
const [cookingInstructions, setCookingInstructions] = useState('')
const [redirect, setRedirect] = useState(false)

const submitbutton = (e) => {
    e.preventDefault()


    }};