import React from 'react';

const Product = ({ product }) => {
    const { img, name, price, quantity, description } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p><small>Price: ${price}</small></p>
                <p>Quantity: {quantity}</p>
                <p>{description}</p>
                <button className="btn btn-accent text-bold text-white uppercase">Bay Now</button>
            </div>
        </div>
    );
};

export default Product;