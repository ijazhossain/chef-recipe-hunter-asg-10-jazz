import React from 'react';
import img from '../../../assets/images/error.png'
import { useNavigate } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{ backgroundColor: '#f7f5f1' }} className='text-center vh-100 d-flex align-items-center justify-content-center flex-column'>
            <img className='error-img mx-auto' src={img} alt="error-img" />
            <button onClick={() => navigate('/')} className='d-block mx-auto border-0 px-5 rounded-3 fw-semibold text-white back-btn'>Back To Home</button>
        </div>
    );
};

export default NotFound;