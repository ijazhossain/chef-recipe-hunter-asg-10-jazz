import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import ChefDetails from '../../ChefDetails/ChefDetails';
import Introduction from '../Introduction/Introduction';
import Features from '../Features/Features/Features';
import NewsLetter from '../NewsLetter/NewsLetter/NewsLetter';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-bootstrap';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Introduction></Introduction>
            <Features></Features>
            <ChefDetails></ChefDetails>
            <NewsLetter></NewsLetter>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Home;