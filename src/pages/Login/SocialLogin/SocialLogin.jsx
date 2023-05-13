import React, { useContext, useState } from 'react';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import './SocialLigin.css'
import { AuthContext } from '../../../providers/AuthProvider';
const SocialLogin = () => {
    const { githubSignIn, googleSignIn, facebookSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [error, setError] = useState('')
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {

                navigate(from, { replace: true })
            }).catch(error => {
                setError(error.message);
            })
    }
    const handleGithubSignIn = () => {
        console.log("clicked");
        githubSignIn()
            .then(result => {

                navigate(from, { replace: true })
            }).catch(error => {
                setError(error.message);
            })

    }
    const handleFacebookSignIn = () => {
        console.log("clicked");
        facebookSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            }).catch(error => {
                setError(error.message);
            })

    }
    return (
        <div className='social-container d-flex flex-column'>
            <button onClick={handleGoogleSignIn} className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                <span className='social-label'>Sign in with google</span>
            </button>
            <button onClick={handleFacebookSignIn} className='social-btn d-flex align-items-center py-2 px-3 my-3'>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                <span className='social-label'>Sign in with facebook</span>
            </button>
            <button onClick={handleGithubSignIn} className='social-btn d-flex align-items-center py-2 px-3 mt-3 mb-4'>
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                <span className='social-label'>Sign in with github</span>
            </button>
            <span className='text-danger fw-semibold'>{error}</span>
            <hr></hr>

        </div>
    );
};

export default SocialLogin;