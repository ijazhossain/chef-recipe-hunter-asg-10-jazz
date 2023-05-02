import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './ChefInfo.css'

/* ======================================
        Chef Info In Recipe Section 
=========================================*/
const ChefInfo = ({ recipeInfo }) => {
    // console.log(recipeInfo);
    const { chef_pic, chef_name, description, likes, recipe_quantity, experience
    } = recipeInfo;
    return (
        <div className='chef-information container mx-auto my-5 py-5'>
            <Row>
                <Col md={6}>
                    <h1 className='fw-semi-bold mb-4'>{chef_name}</h1>
                    <p className='mb-4 text-dark text-justify'>{description}</p>
                    <p>Likes: {likes}</p>
                    <p>Recipe Quantity: {recipe_quantity}</p>
                    <p>Experiences: {experience
                    }</p>
                </Col>
                <Col md={6} className='d-flex justify-content-center'>
                    <img className='chef-info-img  rounded-3' src={chef_pic} alt="chef photo" />
                </Col>
            </Row>
        </div>
    );
};

export default ChefInfo;