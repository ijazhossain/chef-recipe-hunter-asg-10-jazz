import React from 'react';
import './RecipeInfo.css'
import Recipes from '../Recipes/Recipes';
import { Row } from 'react-bootstrap';
/* =====================
    Recipe Information
========================= */
const RecipeInfo = ({ recipeInfo }) => {
    const { recipe_info } = recipeInfo;
    // console.log(recipe_info);
    return (
        <div style={{ backgroundColor: '#f4f0ea' }} className='recipe-background my-5 py-5'>

            <Row className='gy-3 gy-lg-5 container mx-auto'>
                {
                    recipe_info.map(info => <Recipes
                        key={info.id}
                        info={info}
                    ></Recipes>)
                }
            </Row>
        </div>
    );
};

export default RecipeInfo;