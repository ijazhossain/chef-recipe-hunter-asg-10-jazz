import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const ChefRecipeLayout = () => {
    return (
        <div>

            <Outlet></Outlet>
        </div>
    );
};

export default ChefRecipeLayout;