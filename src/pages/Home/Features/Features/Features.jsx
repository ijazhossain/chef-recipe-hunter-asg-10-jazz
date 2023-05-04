import React from 'react';
import './Features.css'
import FeatureBanner from '../FeatureBanner/FeatureBanner';
import { Container, Row } from 'react-bootstrap';
import './Features.css'
import Feature from '../Feature/Feature';
const Features = () => {
    const features = [
        { id: 0, name: "Best Quality Food", description: "We never compromise our quality of food, commited to provide best quality", img_link: "https://i.ibb.co/0FGzFXh/icon-1.png" },
        { id: 1, name: "24/7 On Hotel", description: "We are committed to deliver food twenty four seven to your door steps", img_link: "https://i.ibb.co/zZnXT84/icon-2.png" },
        { id: 2, name: "Easy To Order", description: "Placing an order after a single registration, we get order from our site", img_link: "https://i.ibb.co/GMybY15/icon-3.png" }
    ]
    return (
        <div className='features-container my-3 py-3 my-lg-5 py-lg-5'>
            <Container className='features-container'>
                <FeatureBanner></FeatureBanner>
                <Row className='pb-3 pb-lg-5'>
                    {
                        features.map(feature => <Feature
                            key={feature.id}
                            feature={feature}
                        ></Feature>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Features;