import React from 'react';
import img from '../../../../assets/images/circle-left.png'
import './FeatureBanner.css'

/* ==========================
        Feature Banner 
===============================*/
const FeatureBanner = () => {
    return (
        <div className='container mb-5 pb-2'>
            <div className=' mx-auto text-center'>
                <p className='fs-5 text-center mb-4'>
                    <img className='me-2 ' src={img} alt="circle" />
                    <span style={{ color: "#c5a47e" }} className='fw-semibold'>OUR FEATURES</span>
                </p>
                <h1 className='heading-color text-center display-1 fw-semibold mb-4 mt-0'>What We Provide You</h1>
                <p className='paragraph-color ym-fs-5 px-0 px-lg-5'> Our restaurant have various features that make them unique and attractive to diners. These features may include the menu, ambiance, service, location, special events, and price. Each of these features contributes to creating a memorable dining experience and setting the restaurant apart from its competitors.

                </p>
            </div>
        </div >
    );
};

export default FeatureBanner;