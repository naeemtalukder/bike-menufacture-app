import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Order = () => {
    const { register } = useForm();

    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId, setProducts]);
    const { id, name } = products;

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            productId: id,
            products: name,
            user: user.email,
            userName: user.displayName,
            quantity: event.target.quantity.value,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                setProducts(null);
            })


    }

    return (
        <div className="hero min-h-screen bg-">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold my-3">Order for: {name}</h1>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" name="name" disabled value={user.displayName} placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="products" disabled value={name} placeholder="Products Name" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name="quantity" placeholder="Products Quantity" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user.email} placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-accent w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Order;