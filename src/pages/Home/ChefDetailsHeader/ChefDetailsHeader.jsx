import React from 'react';
import img from '../../../assets/images/circle-left.png'

const ChefDetailsHeader = () => {
    return (
        <div className='container mb-5 pb-2'>
            <div className=' mx-auto text-center'>
                <p className='fs-5 text-center mb-4'>
                    <img className='me-2 ' src={img} alt="circle" />
                    <span style={{ color: "#c5a47e" }} className='fw-semibold'>Our Team</span>
                </p>
                <h1 className=' intro-title heading-color text-center display-1 fw-semibold mb-4 mt-0'>Best Chefs Team</h1>
                <p className='paragraph-color ym-fs-5 px-0 px-lg-5'> A group of culinary professionals who work together in a restaurant kitchen to prepare and serve food to customers. The team is led by the head chef, who oversees the kitchen operations and menu planning. The sous chef is the second in command, responsible for managing the kitchen in the head chef's absence and overseeing the line cooks.

                    Line cooks are responsible for co</p>
            </div>
        </div >
    );
};

export default ChefDetailsHeader;