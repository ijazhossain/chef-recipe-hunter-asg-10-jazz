import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './Feature.css'
const Feature = ({ feature }) => {
    const { id, name, description, img_link } = feature;
    return (
        <Col md={6} lg={4}>
            <Card className='text-center py-4'>
                <Card.Img className='mx-auto mb-3' variant="top" src={img_link} />
                <Card.Body>
                    <Card.Title className='fs-5 heading-color fw-semibold'>{name}</Card.Title>
                    <Card.Text className='py-2 paragraph-color'>
                        {description}
                    </Card.Text>
                    <button onClick={() => navigate('/login')} className='ym-btn border-0 px-5 rounded-3 fw-semibold text-white'>Read More</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Feature;