import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <h1>This is login layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;