import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './ActiveLink.css'

/*==========================
    Active Link for Navbar
 ============================*/
const ActiveLink = ({ to, children }) => {
    return (
        <NavLink as={Link} to={to} className={({ isActive }) => isActive ? "active-link  text-decoration-none  fw-semibold pb-3 pb-lg-0" : "text-white text-decoration-none  fw-semibold inactive pb-3 pb-lg-0"}>{children}</NavLink>
    );
};

export default ActiveLink;