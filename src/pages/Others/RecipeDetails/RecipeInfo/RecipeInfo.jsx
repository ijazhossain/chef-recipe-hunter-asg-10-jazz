import React from 'react';
import './RecipeInfo.css'
/* =====================
    Recipe Information
========================= */
const RecipeInfo = ({ recipeInfo }) => {
    const { recipe_info } = recipeInfo;
    console.log(recipe_info);
    return (
        <div>
            <h1>Recipe info is here</h1>
        </div>
    );
};

export default RecipeInfo;