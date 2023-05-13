import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css'

/*============================
             Banner
 ============================= */

const Banner = () => {

    return (
        <Carousel slide={false} interval={null} variant="light" className='carousel-container text-white'>
            <Carousel.Item className='carousel-first-img'>
                <div className='container px-5 mx-auto d-flex align-items-center justify-content-center flex-column height-control '>
                    <h4 className='text-center fw-bolder mb-4 fs-3'>Ordinary American Taste with Special Recipe
                    </h4>
                    <h1 className='text-center display-1 fw-semibold mb-4 mt-0'>Exquisite American Cuisine</h1>
                    <p className='text-center carousel-info fs-5'>Come dine with us at our cozy and welcoming restaurant, where we serve up mouthwatering dishes that will tantalize your taste buds. From fresh, locally sourced ingredients to expertly prepared meals, we're dedicated to providing you with a dining experience that is second to none. Whether you're in the mood for a hearty breakfast, a satisfying lunch, or a romantic dinner, our menu offers a wide variety of options to suit any palate. Our friendly staff and inviting atmosphere will make you feel right at home, so come on in and join us for a meal you won't soon forget.</p>
                    <button className='book-btn bg-transparent px-4 text-white rounded-3 mt-4'>Book A Table</button>
                </div>
            </Carousel.Item>
            <Carousel.Item className='carousel-second-img '>
                <div className='container px-5 mx-auto d-flex align-items-center justify-content-center flex-column  height-control '>
                    <h4 className='text-center fw-bolder'>Ordinary American Taste with Special Recipe
                    </h4>
                    <h1 className='text-center display-1 fw-semibold mb-4 mt-0'>Exquisite American Cuisine</h1>
                    <p className='text-center carousel-info'>Come dine with us at our cozy and welcoming restaurant, where we serve up mouthwatering dishes that will tantalize your taste buds. From fresh, locally sourced ingredients to expertly prepared meals, we're dedicated to providing you with a dining experience that is second to none. Whether you're in the mood for a hearty breakfast, a satisfying lunch, or a romantic dinner, our menu offers a wide variety of options to suit any palate. Our friendly staff and inviting atmosphere will make you feel right at home, so come on in and join us for a meal you won't soon forget.</p>
                    <button className='book-btn bg-transparent px-4 text-white rounded-3 mt-4'>Book A Table</button>

                </div>

            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;