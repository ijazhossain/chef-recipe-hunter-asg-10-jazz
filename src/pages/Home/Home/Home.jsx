import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import ChefDetails from '../../ChefDetails/ChefDetails';
import Introduction from '../Introduction/Introduction';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <ChefDetails></ChefDetails>
        </div>
    );
};

export default Home;