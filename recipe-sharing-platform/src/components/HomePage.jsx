import { useState, useEffect } from 'react';
import classNames from 'classnames';
import text from '../data.json';
import hover from '../hover.json';
import rounded from '../rounded.json';
import shadow from '../shadow.json';
import grid from '../grid.json';
import Link from '../link.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

function Homepage() {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    fetch ('/data.json')
.then(response => response.json())
.then(data => setRecipes(data.recipes))
.catch(error => console.error('Error fetching recipes:', error));

}, []);

<div className={classNames('text', 'hover', 'rounded', 'shadow', grid['grid-cols-1'], grid['grid-cols-2'], grid['grid-cols-3'], grid['sm:grid-cols-4'], grid['md:grid-cols-5'], grid['lg:grid-cols-6'])}></div>

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
