import React, { useContext } from 'react';
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavLink } from 'react-bootstrap';
import logo from '../../../assets/images/logo.png'
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../providers/AuthProvider';

/*=======================
    Header Section
=========================*/

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }
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
                        <ActiveLink to="/blog">Blogs</ActiveLink>
                        <ActiveLink to="/about">About</ActiveLink>
                        {user && <NavLink as={Link} to="">
                            <img title={user?.displayName} width="80px" height="80px" className="rounded-circle" src={`${user?.photoURL}`} alt="" />
                        </NavLink>}
                        {!user
                            ?
                            <button onClick={() => navigate('/login')} className='ym-btn auth-btn border-0 px-5 rounded-3 fw-semibold text-white'>Login</button>
                            :
                            <button onClick={handleLogOut} className='ym-btn border-0 px-5 rounded-3 fw-semibold text-white'>Sign out</button>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;