import React from 'react';
import { Container } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import './Blogs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const ref = React.createRef();

const Blogs = () => {

    return (

        <div className=' font-monospace blogs-container'>

            <div className='blogs-banner-container d-flex align-items-center justify-content-center'>
                <h1 className='display-1 fw-semibold'>Blogs</h1>
            </div>

            <Container>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <div className="d-flex align-items-center justify-content-end mt-5"><button onClick={toPdf} className='ym-btn download-btn border-0 rounded-3 text-white px-3 py-1'> <span className='me-2'>Generate Pdf</span>

                        <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </button>
                    </div>}
                </Pdf>
                <div className='w-50 answer-container mx-auto'
                    ref={ref}>
                    <div className=' mt-lg-5  mx-auto'>
                        <section className='pb-4 pb-lg-5'>
                            <h2 className='heading-color fw-semibold mt-4'>Q1.Difference between uncontrolled and controlled component?</h2>
                            <p className='mt-3 paragraph-color'>In React, controlled and uncontrolled components are two different approaches to managing the state of a form component such as an input, textarea, or select.<br></br><br></br>

                                An uncontrolled component is one where the form data is handled by the DOM itself, rather than by the React component. In an uncontrolled component, the state of the input is stored in the DOM, and the component reads the value directly from the DOM using a ref. The component itself does not manage the state of the input.</p>
                        </section>
                        <section className='pb-4 pb-lg-5'>
                            <h2 className='heading-color fw-semibold'>Q2.How to validate react props using props types?</h2>
                            <p className='mt-3 paragraph-color'>
                                In React, you can validate props using PropTypes, which is a typechecking library built into React. PropTypes provides a way to specify the type of each prop that a component expects, and it throws a warning in the console if a prop is of the wrong type.

                                To use PropTypes, you'll need to import it from the 'prop-types' package. Then, you can define the propTypes for a component by adding a propTypes property to the component class or function.<br></br><br></br>

                            </p>
                        </section>
                        <section className='pb-4 pb-lg-5'>
                            <h2 className='heading-color fw-semibold'>Q3.What is the difference between nodeJS and expressJS?</h2>
                            <p className='mt-3 paragraph-color'>
                                Node.js is a runtime environment that allows developers to write server-side JavaScript code.<br></br><br></br>

                                Express.js, on the other hand, is a web application framework built on top of Node.js. It provides a set of features for building web applications and APIs, such as routing, middleware, and HTTP utilities. Express.js is designed to be lightweight, flexible, and easy to use, making it a popular choice for building web applications.

                            </p>
                        </section>
                        <section className='pb-4 pb-lg-5'>
                            <h2 className='heading-color fw-semibold'>Q4.What is a custom hook and why will you create a custom hook?</h2>
                            <p className='mt-3 mb-3 pb-3 mb-lg-5 pb-lg-5 paragraph-color'>
                                Custom hooks are a powerful feature of React that allow developers to express complex logic and share it across multiple components. Custom hooks are created using one or more of the built-in React hooks such as useState, useEffect, or useContext and are just regular JavaScript functions.<br></br><br></br>

                                The key benefit of custom hooks is that they make it easier to write reusable code. By using complex logic within a custom hook, developers can avoid duplicating code across multiple components and instead reuse the same code in different parts of their application. This makes the codebase simpler and more maintainable.

                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>

    );
};


export default Blogs;