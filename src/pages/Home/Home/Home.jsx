import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import ChefDetails from '../../ChefDetails/ChefDetails';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChefDetails></ChefDetails>
        </div>
    );
};

export default Home;