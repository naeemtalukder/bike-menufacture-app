import React from 'react';
import img1 from '../../images/img/img-1.jpg';
import img2 from '../../images/img/img-2.jpg';
import img3 from '../../images/img/img-3.jpg';
import img4 from '../../images/img/img-4.jpg';

const Carousel = () => {
    return (
        <div className="carousel w-full">
        
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img2} alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-accent">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-accent">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img3} alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle bg-accent">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-accent">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img1} alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle bg-accent">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-accent">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} alt='' className="w-full" /> /
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle bg-accent">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-accent">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Carousel;