import React from 'react';
import img from '../../../../assets/images/circle-left.png'
import './NewsLetterHeader.css'
const NewsLetterHeader = () => {
    return (
        <div className='container pt-2  pt-lg-0 mb-0 pb-4'>
            <div className='mx-auto text-center mt-4 mt-lg-0'>
                <p className='fs-5 text-center mb-4'>
                    <img className='me-2 ' src={img} alt="circle" />
                    <span style={{ color: "#c5a47e" }} className='fw-semibold'>NEWSLETTER</span>
                </p>
                <h1 className='intro-title heading-color text-center display-1 fw-semibold mb-4 mt-0'>Get Best Offers On The Food</h1>
                <p className='paragraph-color ym-fs-5 px-0 px-lg-5'> With the subscription, enjoy your favourite coffees without having to think about it.

                </p>
            </div>
        </div >
    );
};

export default NewsLetterHeader;