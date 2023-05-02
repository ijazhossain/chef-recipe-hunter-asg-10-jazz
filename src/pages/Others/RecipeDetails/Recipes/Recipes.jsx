import React from 'react';
import './Recipes.css'
import { Card, Col, ListGroup } from 'react-bootstrap';
import Button from '../../../Shared/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

/* =============================
    Single Recipe Details
================================ */
const Recipes = ({ info }) => {
    // console.log(info);
    const { cooking_methods, ingredients, ratings, recipe_name } = info;
    console.log(cooking_methods, ingredients, ratings, recipe_name);
    return (
        <>
            <h2 style={{ color: '#c5a47e' }} className='text-center'>{recipe_name}</h2>
            <div className='d-flex align-items-center justify-content-center'>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStarHalf}></FontAwesomeIcon>
                <p className='mb-3 fs-2 ms-2'>{ratings}</p>
            </div>
            <Col md={6} className='fs-5'>
                <Card >
                    <Card.Header>Ingredients</Card.Header>
                    <ListGroup variant="flush">
                        {
                            ingredients.map((ingredient, index) => <ListGroup.Item key={index}>
                                {ingredient}
                            </ListGroup.Item>)
                        }
                    </ListGroup>


                </Card>
            </Col>
            <Col md={6} className='fs-5'>
                <Card>
                    <Card.Header>Cooking Methods</Card.Header>
                    <ListGroup>
                        {
                            cooking_methods.map((method, index) => <ListGroup.Item key={index}>
                                {method}
                            </ListGroup.Item>)
                        }
                    </ListGroup>
                </Card>
            </Col>
            <button className='ym-btn border-0 px-5 rounded-3 fw-semibold text-white w-50 mx-auto'>Add to Favorite</button>
            <hr />
        </>
    );
};

export default Recipes;