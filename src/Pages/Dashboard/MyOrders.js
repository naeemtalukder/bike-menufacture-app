import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/order?user=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h3 className='text-2xl text-center text-accent my-5'>My Orders: {orders.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(o => <tr>
                                <th>{o?.userName}</th>
                                <td>{o.user}</td>
                                <td>{o.products}</td>
                                <td>{o.quantity}</td>
                                <td>{o?.phone}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;