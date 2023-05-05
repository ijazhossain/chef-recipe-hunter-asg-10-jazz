import React from 'react';
import './AboutIntro.css'
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import img from '../../../assets/images/circle-left.png'
import foodBg from '../../../assets/images/chef-about.jpg'

import VisibilitySensor from 'react-visibility-sensor';

const AboutIntro = () => {
    return (

        <Container className='my-2 py-3 my-lg-5 py-lg-5 '>
            <div className=' badge-container text-center'>
                <img className="about-banner" src={foodBg} alt="banner photo" />

            </div>
            <Row className='flex-column-reverse flex-lg-row align-items-center'>

                <Col lg={12} className='px-4'>
                    <p className='fs-5  my-4 text-center'>
                        <img className='me-2 ' src={img} alt="circle" />
                        <span style={{ color: "#c5a47e" }} className='fw-semibold'>Ordinary American Taste with Special Recipe</span>
                    </p>
                    <h1 className='intro-title heading-color display-2 fw-semibold mb-3 mb-lg-5 mt-0 text-center'>The Restaurant has been Open Since 2005
                    </h1>
                    <Row className='gx-5 '>
                        <Col lg={6}>
                            <p className="paragraph-color ym-fs-5 ym-text-justify">
                                Yummye as an American restaurant is a culinary institution that represents the diverse and complex history of the United States. The cuisine found in our restaurants is a reflection of the many cultural and regional influences that have shaped American cuisine over the years. From the Native American and African-American culinary traditions to the Spanish, French, and Asian influences, American restaurants offer a melting pot of flavors and dishes that truly capture the essence of the American identity.

                                In addition to traditional American dishes like burgers, fries, and hot dogs, American restaurants also offer a wide range of international specialties, such as Italian pasta, Mexican tacos, and Japanese sushi. These global flavors have become an integral part of the American culinary scene, reflecting the ever-evolving nature of American society and its willingness to embrace new cultures and cuisines. Furthermore, many American restaurants now prioritize using locally sourced ingredients and supporting small businesses within their community, highlighting the growing trend towards sustainable and ethical dining practices. Our restaurants are also known for their massive portions and indulgent dishes, catering to the country's love for hearty and satisfying meals. Additionally, many American restaurants have a nostalgic feel, with retro decor, vintage signs, and classic music playing in the background. This creates a sense of familiarity and comfort, reminding diners of simpler times and childhood memories.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <p className="paragraph-color ym-fs-5 ym-text-justify mb-0">
                                The atmosphere of our restaurant is just as important as the food itself, with many American restaurants placing a strong emphasis on hospitality and customer service. The welcoming and friendly atmosphere of American restaurants is often attributed to the country's culture of hospitality, which is deeply ingrained in American society. Whether you're dining at a casual diner or an upscale restaurant, you can expect to be greeted with a warm smile and friendly conversation. Many American restaurants also offer a laid-back and comfortable setting, with features such as outdoor seating, live music, and sports games on TV.

                                In recent years, there has been a growing trend towards more innovative and experimental cuisine in American restaurants. Chefs are now pushing the boundaries of traditional American cuisine, experimenting with fusion dishes, molecular gastronomy, and farm-to-table cuisine. This has resulted in a new generation of American restaurants that offer unique and exciting dining experiences, appealing to foodies and culinary enthusiasts from around the world. Ultimately, an American restaurant is not just a place to eat, but a cultural and culinary experience that reflects the diversity and complexity of American society.
                                We have are also at the forefront of new dining trends and technologies. Many restaurants now offer online ordering, delivery, and curbside pickup services, making it easier than ever for customers to enjoy their favorite dishes.
                            </p>
                        </Col>
                    </Row>



                </Col>



            </Row>
            <Row className='my-4'>
                <Col>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div className='text-start' style={{ height: 100, fontSize: "60px", color: "#dc0000" }}>
                                {isVisible ? <div className='d-flex align-items-center flex-column justify-content-center'>
                                    <div className="d-flex align-items-center  fw-semibold">
                                        <CountUp end={525}>
                                        </CountUp>
                                        <h1 style={{ fontSize: "45px" }} className='pt-3 fw-bold'>K</h1>
                                    </div>
                                    <p className='ym-primary fs-5 fw-bold'><small>Satisfied Customer
                                    </small></p>
                                </div> : null}
                            </div>
                        )}
                    </VisibilitySensor></Col>
                <Col>
                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                        {({ isVisible }) => (
                            <div className='' style={{ height: 100, fontSize: "60px", color: "#dc0000" }}>
                                {isVisible ? <div className='d-flex align-items-center flex-column justify-content-center'>
                                    <div className="d-flex align-items-center  fw-bold">
                                        <CountUp end={50}>
                                        </CountUp>
                                        <h1 style={{ fontSize: "45px" }} className='pt-3 fw-bold'>+</h1>
                                    </div>
                                    <p className='ym-primary fs-5 fw-semibold'><small>Food Menus

                                    </small></p>
                                </div> : null}
                            </div>
                        )}
                    </VisibilitySensor></Col>
            </Row>


        </Container >

    );
};

export default AboutIntro;