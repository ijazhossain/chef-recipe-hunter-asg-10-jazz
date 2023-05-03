import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../assets/images/circle-left.png'
import foodBg from '../../../assets/images/food-1.jpg'
import "./Introduction.css"

/* =====================================
    Introduction HomePage Section
======================================= */

const Introduction = () => {
    return (
        <Container className='my-2 py-3 -my-lg-5 py-lg-5 '>
            <Row className='flex-column-reverse flex-lg-row align-items-center'>
                <Col lg={7} className='px-4 p-lg-5 '>
                    <p className='fs-5  mb-4'>
                        <img className='me-2 ' src={img} alt="circle" />
                        <span style={{ color: "#c5a47e" }} className='fw-semibold'>Ordinary American Taste with Special Recipe</span>
                    </p>
                    <h1 className='intro-title heading-color display-2 fw-semibold mb-3 mb-lg-5 mt-0'>We Are Experienced Restaurant.
                    </h1>
                    <p className="paragraph-color ym-fs-5">

                        An introduction to a restaurant is a crucial element that sets the tone for the entire dining experience. It provides guests with a glimpse of what to expect and helps them form their initial impressions of the restaurant. An effective introduction should convey the restaurant's unique style, ambiance, and cuisine while also welcoming guests and making them feel at home.</p>
                    <p className="paragraph-color ym-fs-5">
                        An introduction may take many forms, such as a menu description, a website bio, or a host or hostess's greeting at the door. It should be brief yet informative, highlighting the restaurant's key features and distinguishing characteristics. For example, it might emphasize the restaurant's commitment to using locally sourced ingredients, its eclectic fusion menu, or its elegant décor and atmosphere.
                    </p>

                    <div className='go-mid'>
                        <button className='view-btn fw-semibold book-btn bg-transparent px-5 rounded-3 mt-4'>Discover More</button>
                    </div>
                </Col>
                <Col lg={5} className='pb-5 px-4 p-lg-5'>
                    <div className='position-relative badge-container'>
                        <img className="img-fluid" src={foodBg} alt="banner photo" />
                        <div className='text-center position-absolute  badge-container-inner rounded-3 pb-4 px-5 d-none d-lg-block'>
                            <h1 ><span className='display-1'>25</span> +</h1>
                            <h3>Years of Experience</h3>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;