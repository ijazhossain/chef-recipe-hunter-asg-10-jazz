import React from 'react';
import './About.css'
import AboutIntro from '../AboutIntro/AboutIntro';
import AboutHeader from '../AboutHeader/AboutHeader';
import MapLeaf from '../MapLeaf/MapLeaf';


const About = () => {
    return (
        <div>
            <AboutHeader></AboutHeader>
            <AboutIntro></AboutIntro>
            <MapLeaf></MapLeaf>

        </div>
    );
};

export default About;