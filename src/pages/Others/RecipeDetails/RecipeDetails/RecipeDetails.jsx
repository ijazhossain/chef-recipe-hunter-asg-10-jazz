import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css'
import SpinnerLoader from '../../../Shared/SpinnerLoader/SpinnerLoader';
import RecipeBanner from '../RecipeBanner/RecipeBanner';
import ChefInfo from '../ChefInfo/ChefInfo';
import RecipeInfo from '../RecipeInfo/RecipeInfo';
/* =========================
    Chef's Recipe Page 
=============================*/
const RecipeDetails = () => {
    const [loading1, setLoading1] = useState(true)
    const [recipeInfo, setRecipeInfo] = useState({})
    const { chefId } = useParams()
    console.log(chefId)
    useEffect(() => {
        const loadData = async () => {
            const loadedData = await fetch(`http://localhost:5000/details/${chefId}`)
            const data = await loadedData.json()
            // console.log(data);
            setRecipeInfo(data)
            setLoading1(false)
        }
        loadData()
    }, [chefId])
    if (loading1) {
        return <SpinnerLoader></SpinnerLoader>
    }
    return (
        <div>
            <RecipeBanner></RecipeBanner>
            <ChefInfo recipeInfo={recipeInfo}></ChefInfo>
            <RecipeInfo recipeInfo={recipeInfo}></RecipeInfo>
        </div>
    );
};

export default RecipeDetails;