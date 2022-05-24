import React from 'react';
import Contact from '../Sheard/Contact';
import Banner from './Banner';
import Carousel from './Carousel';


const Home = () => {
    return (
        <div>
            <Carousel />
            <Contact />
            <Banner />
        </div>
    );
};

export default Home;