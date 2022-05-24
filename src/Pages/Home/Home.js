import React from 'react';
import Contact from '../Sheard/Contact';
import Banner from './Banner';
import Carousel from './Carousel';
import Products from './Products';
import ProductSummery from './ProductSummery';
import Reviews from './Reviews';


const Home = () => {
    return (
        <div>
            <Carousel />
            <Products />
            <ProductSummery />
            <Reviews />
            <Banner />
            <Contact />
        </div>
    );
};

export default Home;