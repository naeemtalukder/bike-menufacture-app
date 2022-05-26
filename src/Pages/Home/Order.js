import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId, setProducts]);

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={products.img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {products.name} </h2>
                <p>Price: {products.price}</p>
                <p>Quantity: {products.quantity}</p>
                <p>{products.description}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Order;