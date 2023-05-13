import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ChefCard.css'

/*=====================
    Single Chef Card 
 ======================*/
const ChefCard = ({ details }) => {
    const navigate = useNavigate()
    // console.log(details);
    const { _id, chef_pic, chef_name, experience, recipe_quantity, likes } = details;
    return (
        <Col md={6} className=' p-0'>
            <Row className='chef-card'
            >
                <Col lg={6} className=' p-0 '>
                    <LazyLoad className='w-100' threshold={0.95}>
                        <img className='img-fluid' src={chef_pic} alt="chef photo" />
                    </LazyLoad>
                </Col>
                <Col lg={6}>
                    <div className='text-center d-flex flex-column justify-content-center align-items-center h-100'>
                        <h2 className='mt-4 mb-3 fw-semibold'>{chef_name}</h2>
                        <p className='paragraph-color ym-fs-5 mb-0'>Experience: {experience}</p>
                        <p className='paragraph-color ym-fs-5 mb-0'> Recipes: {recipe_quantity}</p>
                        <p className='paragraph-color ym-fs-5 mb-0'>Likes:{likes}</p>
                        <div className='icon-container d-flex align-items-center justify-content-evenly w-75 pt-2 mt-4'>
                            <FontAwesomeIcon className='icon-style' icon={faFacebookF} />
                            <FontAwesomeIcon className='icon-style' icon={faInstagram} />
                            <FontAwesomeIcon className='icon-style' icon={faTwitter} />
                        </div>
                        <button onClick={() => navigate(`/details/${_id}`)} className='view-btn fw-semibold book-btn bg-transparent px-5 rounded-3 mt-5'>View Recipes</button>
                    </div>
                </Col>
            </Row>
        </Col >
    );
};

export default ChefCard;