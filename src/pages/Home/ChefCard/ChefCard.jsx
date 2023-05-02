import React from 'react';
import LazyLoad from 'react-lazy-load';
import './ChefCard.css'
import { Col, Row } from 'react-bootstrap';
import Button from '../../Shared/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

/*=====================
    Single Chef Card 
 ======================*/
const ChefCard = ({ details }) => {
    console.log(details);
    const { _id, chef_pic, chef_name, experience, recipe_quantity, likes } = details;
    return (
        <Col md={6} className=' p-0 '>
            <Row className='chef-card'
            >
                <Col lg={6} className=' p-0 '>
                    <LazyLoad className='w-100' threshold={0.95}>
                        <img className=' img-fluid' src={chef_pic} alt="chef photo" />
                    </LazyLoad>
                </Col>
                <Col lg={6}>
                    <div className='text-center d-flex flex-column justify-content-center align-items-center h-100'>
                        <h2 className='mt-4 mb-3 fw-bold'>{chef_name}</h2>
                        <p><span className='fw-semibold'>Experience: </span>{experience}</p>
                        <p><span className='fw-semibold'>Number of recipes: </span>{recipe_quantity}</p>
                        <p><span className='fw-semibold'>Likes: </span>{likes}</p>
                        <div className='icon-container d-flex align-items-center justify-content-between w-25'>
                            <FontAwesomeIcon className='icon-style' icon={faFacebookF} />
                            <FontAwesomeIcon className='icon-style' icon={faInstagram} />
                            <FontAwesomeIcon className='icon-style' icon={faTwitter} />
                        </div>
                        <button className='view-btn fw-semibold book-btn bg-transparent px-5 rounded-3'>View Recipes</button>
                    </div>
                </Col>
            </Row>
        </Col >
    );
};

export default ChefCard;