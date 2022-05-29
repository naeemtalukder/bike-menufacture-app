import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L4SbYI8KVWuH6NE6LrIr26V9X04AZng4oUPddUkWKL6led2Ol6ODyNk6wg30msKrtBDIZtBOdottjTt7QfpgOx3003QWKVdcd');

const Payment = () => {
    const { id } = useParams();

    const [payment, setPayment] = useState([]);

    useEffect(() => {
        fetch(`https://evening-temple-41024.herokuapp.com/order/${id}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPayment(data);
            })
    }, [])

    return (
        <div>
            <div className="card w-50 max-w-md bg-secondary shadow-xl my-12">
                <div className="card-body">
                    <p className="text-accent font-bold">Hello, {payment.userName}</p>
                    <h2 className="card-title">Please Pay for {payment.products}</h2>
                    <p>Product Quantity: <span className='text-orange-700'>{payment.quantity}</span></p>
                    <p>Please pay: ${payment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md my-10 shadow-2xl bg-base-100">
                <div className="card-body bg-secondary ">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;