import React from 'react';
import { Container } from 'react-bootstrap';
import LoginBanner from '../../Login/LoginBanner/LoginBanner';

const Blogs = () => {
    return (

        <div className='bg-dark text-white font-monospace '>
            <div className='login-banner-container d-flex align-items-center justify-content-center'>
                <h1 className='display-1 fw-semibold'>Blogs</h1>
            </div>
            <Container className='py-5 mt-lg-5 py-lg-5 mx-auto'>
                <section className='pb-5'>
                    <h1>Q1.Difference between uncontrolled and controlled component?</h1>
                    <p className='mt-4'>In React, controlled and uncontrolled components are two different approaches to managing the state of a form component such as an input, textarea, or select.<br></br><br></br>

                        An uncontrolled component is one where the form data is handled by the DOM itself, rather than by the React component. In an uncontrolled component, the state of the input is stored in the DOM, and the component reads the value directly from the DOM using a ref. The component itself does not manage the state of the input.</p>
                </section>
                <section>
                    <h1>Q2.How to validate react props using props types?</h1>
                    <p className='mt-4'>
                        In React, you can validate props using PropTypes, which is a typechecking library built into React. PropTypes provides a way to specify the type of each prop that a component expects, and it throws a warning in the console if a prop is of the wrong type.

                        To use PropTypes, you'll need to import it from the 'prop-types' package. Then, you can define the propTypes for a component by adding a propTypes property to the component class or function.<br></br><br></br>

                    </p>
                </section>
                <section>
                    <h1>Q3.What is the difference between nodeJS and expressJS?</h1>
                    <p className='mt-4'>
                        In React, you can validate props using PropTypes, which is a typechecking library built into React. PropTypes provides a way to specify the type of each prop that a component expects, and it throws a warning in the console if a prop is of the wrong type.<br></br><br></br>

                        To use PropTypes, you'll need to import it from the 'prop-types' package. Then, you can define the propTypes for a component by adding a propTypes property to the component class or function.

                    </p>
                </section>
                <section>
                    <h1>Q4.What is a custom hook and why will you create a custom hook?</h1>
                    <p className='mt-4'>
                        Custom hooks are a powerful feature of React that allow developers to express complex logic and share it across multiple components. Custom hooks are created using one or more of the built-in React hooks such as useState, useEffect, or useContext and are just regular JavaScript functions.

                        The key benefit of custom hooks is that they make it easier to write reusable code. By using complex logic within a custom hook, developers can avoid duplicating code across multiple components and instead reuse the same code in different parts of their application. This makes the codebase simpler and more maintainable.

                    </p>
                </section>
            </Container>
        </div>

    );
};

export default Blogs;