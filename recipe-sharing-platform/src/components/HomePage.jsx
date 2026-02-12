import { useState, useEffect } from 'react';
import classNames from 'classnames';
import text from '../data.json';
import hover from '../hover.json';
import rounded from '../rounded.json';
import shadow from '../shadow.json';
import grid from '../grid.json';

 

function Homepage() {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    fetch ('/data.json')
.then(response => response.json())
.then(data => setRecipes(data.recipes))
.catch(error => console.error('Error fetching recipes:', error));

}, []);

<div className={classNames('text', 'hover', 'rounded', 'shadow', 'grid')}></div>

return (
    <div>
<h1>Welcome to the Recipe Sharing Platform!</h1>
<ul>
{recipes.map(recipe => (
<li key={recipe.id}>
<h2>{recipe.title}</h2>
<p>{recipe.description}</p>
</li>
))}
</ul>
    </div>
)};
  

export default Homepage;
