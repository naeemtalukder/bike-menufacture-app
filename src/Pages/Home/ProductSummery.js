import React from 'react';
import bike from '../../images/contact.jpg';

const ProductSummery = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <h1 className="text-3xl lg:text-5xl font-bold">Bicycle and Bike Parts Manufacturers</h1>
                    <p className="py-6">Some bike enthusiasts are very brand loyal. At BikeParts.com we know this, and that is why we carry bike parts, tools and bicycle accessories from about 600 of the top manufacturers in the industry.

                        We want to be your one-stop shop for bicycle parts online and for every one of your bike tools and bicycle accessories needs. We are working hard to make it easy for you to find exactly what you want. That is why we allow searching not only by type of bike part, but also by manufacturer.

                        Just click on your favorite brand and you will be able to browse through our entire inventory of items by that manufacturer. Take some time to peruse the offerings of some of your favorites. They might have new items that you don’t even know about yet.</p>
                    <button className="btn btn-accent">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProductSummery;