import React from 'react';
import './Button.css'

const Button = ({ children }) => {
    return (
        <button className='ym-btn border-0 px-5 rounded-3 fw-semibold text-white'>{children}</button>
    );
};

export default Button;