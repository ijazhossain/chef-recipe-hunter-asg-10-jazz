import React from 'react';
import './About.css'
import AboutIntro from '../AboutIntro/AboutIntro';
import AboutHeader from '../AboutHeader/AboutHeader';


const About = () => {
    return (
        <div>
            <AboutHeader></AboutHeader>
            <AboutIntro></AboutIntro>
        </div>
    );
};

export default About;