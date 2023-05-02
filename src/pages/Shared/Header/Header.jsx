import React from 'react';
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

/*=======================
        Header 
=========================*/

const Header = () => {

    return (
        <Navbar style={{ zIndex: '10' }} className='position-absolute top-0 w-100 py-5' bg="transparent" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <img width="154px" src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-lg-auto d-lg-flex align-items-lg-center w-50 justify-content-lg-around">
                        <ActiveLink to="/home">Home</ActiveLink>
                        <ActiveLink to="/blog">Blog</ActiveLink>
                        <Button>Login</Button>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;