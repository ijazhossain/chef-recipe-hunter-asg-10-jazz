import React from 'react';
import './NewsLetter.css'
import NewsLetterHeader from '../NewsLetterHeader/NewsLetterHeader';
import { Container } from 'react-bootstrap';
const NewsLetter = () => {
    return (
        <div className='newsletter-container py-3  pb-lg-5'>
            <div className='py-0 py-lg-5'>
                <NewsLetterHeader></NewsLetterHeader>
                <Container>
                    <div className='pb-4 pb-lg-0  news-letter-form d-lg-flex align-items-lg-center justify-content-lg-center mx-auto'>
                        <input style={{ color: "#939393" }} className=' ym-fs-5 border-0 px-3 ' type="email" name="email" placeholder='Enter your email' />
                        <button className='mb-5 mb-lg-0 text-white ym-fs-5 fw-semibold px-3 ym-btn  auth-btn'>Subscribe Now</button>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default NewsLetter;