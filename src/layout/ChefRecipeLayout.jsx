import React from 'react';
import { Outlet } from 'react-router-dom';

const ChefRecipeLayout = () => {
    return (
        <div>
            <h1>this is chef recipe layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default ChefRecipeLayout;