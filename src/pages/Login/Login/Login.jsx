import React, { useRef, useState } from 'react';
import './Login.css'
import RegisterBanner from '../RegisterBanner/RegisterBanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../assets/images/register.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('')
    const [validated, setValidated] = useState(false)
    const handleFormSubmit = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            // console.log('not validate')
        }
        setValidated(true);

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password, confirmPassword);


    }
    const handleRegister = event => {
        setRegistered(event.target.checked);
    }
    const resetPassword = () => {

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
                                <button onClick={resetPassword} className='btn btn-link text-end w-100 mt-2 pb-0 login-link'>Forget Password</button>

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
                            <span className='text-danger'></span>{/* error */}
                            <Button className='submit-btn  w-100 mt-2' variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;