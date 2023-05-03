import React from 'react';
import { Spinner } from 'react-bootstrap';
import './SpinnerLoader.css'
const SpinnerLoader = () => {
    return (
        <div className='text-center my-5 py-5 d-flex align-items-center justify-content-center'>
            <Spinner className='spin' animation="border" />
            <h1 style={{ color: "#c5a47e" }} className='ms-3'>Loading...</h1>
        </div>
    );
};

export default SpinnerLoader;