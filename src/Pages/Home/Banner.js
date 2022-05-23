import React from 'react';
import bike from '../../images/factory.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bike} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">BIKE MENUFACTURER BRANDS IN THE WORLD</h1>
                    <p className="py-6">Global Brands Magazine is a leading brands magazine providing opinions and news related to various brands <br /> across the world. The company is head quartered in the United Kingdom.</p>
                    <button className="btn btn-accent text-bold text-white uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;