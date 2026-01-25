import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetail from './components/RecipeDetails';
import element from 'react';
import path from 'path';
import { BrowserRouter, ReactDom } from 'react-router-dom';
import Routes from './Routes';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>

);




 