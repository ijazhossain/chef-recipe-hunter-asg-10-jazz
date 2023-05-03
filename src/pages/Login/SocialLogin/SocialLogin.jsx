import React from 'react';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLigin.css'
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    return (
        <div className='d-flex flex-column w-75 '>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                <span className='social-label'>Sign in with google</span>
            </button>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <span className='social-label'>Sign in with facebook</span>
            </button>
            <button className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <span className='social-label'>Sign in with github</span>
            </button>
            <hr />

        </div>
    );
};

export default SocialLogin;