import React from 'react';
import Header from '../../../Shared/Header/Header';
import './RecipeBanner.css'
/*================================
        Recipe section Banner 
 =================================*/
const RecipeBanner = () => {
    return (
        <>
            <Header></Header>
            <div className='recipe-container  d-flex align-items-center justify-content-center'>
                <h1 className='display-1 fw-semibold'>Chef's Recipes</h1>
            </div>
        </>
    );
};

export default RecipeBanner;