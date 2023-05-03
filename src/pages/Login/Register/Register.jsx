import React, { useRef, useState } from 'react';
import './Register.css'
import LoginBanner from '../LoginBanner/LoginBanner';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import img from '../../../assets/images/login.jpg'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
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
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event?.target?.confirmPassword?.value;
        console.log(name, email, password, confirmPassword);


    }
    const handleRegister = event => {
        setRegistered(event.target.checked);
    }


    return (
        <div className='reg-form-container '>
            <LoginBanner></LoginBanner>

            <Container className='my-5 py-5'>
                <Row className='p-5'>
                    <Col lg={6} className='d-flex flex-column align-items-center justify-content-end'>
                        <img style={{ width: "90%" }} src={img} alt="" />
                    </Col>
                    <Col lg={6} >
                        <SocialLogin></SocialLogin>
                        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='w-75  mt-4'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label className='text-start ps-2 w-100'>Name</Form.Label>
                                <Form.Control name='name' type="text" placeholder="Enter your name" required />
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter your name.
                                </Form.Control.Feedback>
                            </Form.Group>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className='text-start ps-2 w-100'>Password</Form.Label>
                                <Form.Control name='password' type="password" placeholder="Password" required />

                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label className='text-start ps-2 w-100'>Confirm Password</Form.Label>
                                <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                                <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                                    Please enter your password again.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="text-left mb-3 mt-2" controlId="formBasicCheckbox">
                                <div className='w-100 d-flex align-items-center justify-content-start'>
                                    <Form.Check onChange={handleRegister} className="text-left me-2" type="checkbox" />
                                    <p className="text-left mb-0">Already have an account</p>

                                </div>


                            </Form.Group>
                            <span className='text-danger'></span>{/* error */}
                            <Button className='submit-btn  w-100 mt-2' variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;