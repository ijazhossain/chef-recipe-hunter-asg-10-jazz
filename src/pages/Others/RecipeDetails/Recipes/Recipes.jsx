import React, { useState } from 'react';
import './Recipes.css'
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../../../../utilities/fakeDB';

/* ====================================
        Single Recipe Details
====================================== */

const Recipes = ({ info }) => {
    const [selected, setSelected] = useState(false);
    const { _id, cooking_methods, ingredients, ratings, recipe_name } = info;
    // console.log(info);
    // console.log(cooking_methods, ingredients, ratings, recipe_name);
    const handleFavorite = () => {
        setSelected(true)
        toast(recipe_name + " recipe added to favorite.")
        // console.log(_id, recipe_name);
        addToDb(_id, recipe_name)
    }
    return (
        <div>
            <h2 className='text-center fw-semibold heading-color'>{recipe_name}</h2>
            <div className='d-flex align-items-center justify-content-center mb-3 mb-lg-4'>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStar}></FontAwesomeIcon>
                <FontAwesomeIcon style={{ color: "#fdcc0d" }} icon={faStarHalf}></FontAwesomeIcon>
                <p className='mb-3 fs-2 ms-2'>{ratings}</p>
            </div>
            <Row className='align-items-start justify-content-between'>
                <Col md={6} className='fs-5 card-style'>
                    <Card >
                        <Card.Header className='card-head fw-semiBold'>Ingredients</Card.Header>
                        <ListGroup variant="flush">
                            {
                                ingredients.map((ingredient, index) => <ListGroup.Item key={index}>
                                    {ingredient}
                                </ListGroup.Item>)
                            }
                        </ListGroup>


                    </Card>
                </Col>
                <Col md={6} className='fs-5 mt-3 mt-lg-0'>
                    <Card>
                        <Card.Header className='card-head fw-semiBold'>Cooking Methods</Card.Header>
                        <ListGroup>
                            {
                                cooking_methods.map((method, index) => <ListGroup.Item key={index}>
                                    {method}
                                </ListGroup.Item>)
                            }
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            <button onClick={() => handleFavorite()}
                disabled={selected} className={`ym-btn border-0 px-5 rounded-3 fw-semibold text-white d-block mt-5 w-lg-50 mx-auto ${selected && "select-btn"}`}>Add to favorite</button>
            <hr className='mt-5'></hr>
            <ToastContainer />
        </div>
    );
};

export default Recipes;