import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Feature.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Feature = ({ feature }) => {
    const { id, name, description, img_link } = feature;
    return (
        <Col md={6} lg={4} className='pb-2 pb-lg-4'>
            <Card className='text-center pt-5 pb-4 mb-3 mb-lg-0'>
                <Card.Img className='mx-auto mb-3' variant="top" src={img_link} />
                <Card.Body>
                    <Card.Title className='fs-3 heading-color fw-semibold'>{name}</Card.Title>
                    <Card.Text className='py-2 paragraph-color'>
                        {description}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={() => navigate('/about')} className='ym-primary btn btn link border-0  rounded-3 fw-semibold '>Read More</button>
                        <FontAwesomeIcon className='ym-primary' icon={faArrowRight}></FontAwesomeIcon>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Feature;