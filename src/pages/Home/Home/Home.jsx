import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import ChefDetails from '../../ChefDetails/ChefDetails';
import Introduction from '../Introduction/Introduction';
import Features from '../Features/Features/Features';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Features></Features>
            <ChefDetails></ChefDetails>
        </div>
    );
};

export default Home;