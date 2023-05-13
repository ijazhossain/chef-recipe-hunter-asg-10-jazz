import React from 'react';
import './Footer.css'
import logo from '../../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* =============================
        Footer Section
================================ */

const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    // console.log(currentYear);

    return (
        <div>
            <div className='footer-container text-center d-flex align-items-center justify-content-center'>
                <Container>
                    <Row className='footer-row'>
                        <Col xs={11} lg={8} className=' mx-auto pt-5 pt-lg-0'>
                            <Link to="/">
                                <img width="150px" src={logo} alt="" />
                            </Link>
                            <div className='text-white mt-5 mb-4 '>
                                <FontAwesomeIcon className='fs-4 me-4 ym-primary' icon={faFacebook}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4 me-4 ym-primary' icon={faTwitter}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4 me-4 ym-primary' icon={faInstagram}></FontAwesomeIcon>
                                <FontAwesomeIcon className='fs-4 me-4 ym-primary' icon={faYoutube}></FontAwesomeIcon>
                            </div>
                            <p style={{ color: '#cdcdc6', lineHeight: "30px" }} className='paragraph-color ym-fs-5'>Yummy restaurant website provides important information to our customers. You can find our phone number, email address, and physical address listed in the footer, making it easy to get in touch with us. We also display our hours of operation, which vary depending on the day of the week. In addition, we provide links to our social media pages, including Facebook, Twitter, and Instagram. </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-bottom'>
                <p className='px-3 px-0 font-monospace text-center py-4 mb-0 font'>Copyright &copy; Yummye {currentYear} . All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;