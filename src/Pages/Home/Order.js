import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';


const Order = () => {
    const { register } = useForm();

    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/products";

    useEffect(() => {
        fetch(`http://localhost:5000/product/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productId, setProducts]);
    const { id, name, quantity, img, description, price } = products;

    const handleOrder = event => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
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
                    navigate(from, { replace: true });

                })
        }
    }

    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="card w-96 bg-secondary shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={img} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <p className='text-xl'>Price: {price}</p>
                            <p className='text-xl'>Quantity: {quantity}</p>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-secondary">
                    <div className="card-body">
                        <div className="max-w-md">
                            <h1 className="text-2xl font-bold my-3">Order for: {name}</h1>
                            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                                <input type="text" name="name" disabled value={user.displayName} placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="products" disabled value={name} placeholder="Products Name" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="price" disabled value={price} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                                <input type="email" name="email" disabled value={user.email} placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="quantity" placeholder="Products Quantity" className="input input-bordered w-full max-w-xs" />
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                                <input type="submit" value="Submit" className="btn btn-accent w-full max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Order;