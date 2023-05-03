import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ChefInfo.css'
import LazyLoad from 'react-lazy-load';

/* ======================================
        Chef Info In Recipe Section 
=========================================*/
const ChefInfo = ({ recipeInfo }) => {
    // console.log(recipeInfo);
    const { chef_pic, chef_name, description, likes, recipe_quantity, experience
    } = recipeInfo;
    return (
        <div className='chef-information container mx-auto my-5 py-5 px-3 px-lg-0'>
            <Row>
                <Col lg={6}>
                    <h1 className='heading-color mb-4 fw-semibold'>{chef_name}</h1>
                    <p className='mb-4 paragraph-color text-justify'>{description}</p>
                    <p className='paragraph-color'>Likes: {likes}</p>
                    <p className='paragraph-color'>Recipe Quantity: {recipe_quantity}</p>
                    <p className='paragraph-color'>Experiences: {experience
                    }</p>
                </Col>
                <Col lg={6} className=''>
                    <LazyLoad className='w-100 d-flex justify-content-center' threshold={0.95}><img className='chef-info-img img-fluid rounded-3' src={chef_pic} alt="chef photo" /></LazyLoad>
                </Col>
            </Row>
        </div>
    );
};

export default ChefInfo;