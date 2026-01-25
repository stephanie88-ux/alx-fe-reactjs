import React from 'react';
import {useRecipeStore} from '../recipeStore';
import './SearchBar.css';

const searchBar = () => {
    const setSearchTearm = useRecipeStore((state) => state.setSearchTerm);

return (
    <input 
        type="text"
        placeholder ="Search recipes..."
        onChange={(e) => setSearchTearm(e.target.value)}
    />      

);
};