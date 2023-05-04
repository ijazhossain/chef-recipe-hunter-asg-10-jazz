import React, { useContext, useRef, useState } from 'react';
import './Login.css'
import RegisterBanner from '../RegisterBanner/RegisterBanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../assets/images/register.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinnerLoader from '../../Shared/SpinnerLoader/SpinnerLoader';

/* =================================
            Login Page
==================================== */

const Login = () => {
    const { signInUser, resetPassword, loading } = useContext(AuthContext)
    const [validated, setValidated] = useState(false)
    const [error, setError] = useState('')
    // console.log(user);
    const navigate = useNavigate()
    const emailRef = useRef()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';

    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            // console.log('not validate')
        }
        setValidated(true);

        const email = form.email.value;
        const password = form.password.value;
        setError('')
        // console.log(email, password);
        signInUser(email, password)
            .then(result => {
                const loggedUser = result.user
                // console.log(loggedUser);
                navigate(from, { replace: true })
            }).catch(error => {
                const errorMsg = error.message;
                // console.log(errorMsg);
                setError(errorMsg)
            })

    }

    const forgetPassword = (event) => {
        const email = emailRef.current.value;
        if (!email) {
            toast('Please enter your Email')
            return;
        }
        console.log(email);
        resetPassword(email)
            .then(() => {
                toast('password reset email sent')
            }).catch(error => {
                console.log(error.message);

            })
    }
    return (
        <div>
            <RegisterBanner></RegisterBanner>
            <Container className='px-4 px-lg-0 my-lg-5 py-4 py-lg-5'>
                <Row className='p-0 p-lg-5 align-items-center'>
                    <Col lg={6} className='d-lg-flex flex-column align-items-end  d-none '>
                        <img className="" style={{ width: "70%" }} src={img} alt="banner img" />
                    </Col>
                    <Col lg={6} className=''>
                        <SocialLogin></SocialLogin>

                        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='social-container mx-md-auto  mt-3'>



                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='text-start ps-2 w-100'>Email address</Form.Label>
                                <Form.Control ref={emailRef} name='email' type="email" placeholder="Enter email" required />
                                <Form.Text className="text-muted w-100 text-start d-block ps-2">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className='text-start ps-2 w-100'>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />
                                <button onClick={forgetPassword} className='btn btn-link text-end w-100 mt-2 pb-0 login-link'>Forget Password</button>

                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="text-left mb-3 mt-2" controlId="formBasicBox">
                                <div className='w-100 d-flex align-items-center justify-content-start'>

                                    <p className="text-left mb-0 ps-2">New to Yummye?</p>
                                    <button onClick={() => navigate('/register')} className='btn btn-link text-decoration-none  fw-semibold login-link'>Register</button>

                                </div>


                            </Form.Group>
                            <span className='text-danger fw-semibold'>{error}</span>
                            <Button className='submit-btn  w-100 mt-2' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;