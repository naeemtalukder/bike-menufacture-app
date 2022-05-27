import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    return res.json()
                })
                .then(data => {

                    setOrders(data);
                });
        }
    }, [user]);

    return (
        <div>
            <h3 className='text-2xl text-center text-accent my-5'>My Orders: {orders.length}</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o?.userName}</td>
                                <td>{o?.user}</td>
                                <td>{o?.products}</td>
                                <td>{o?.quantity}</td>
                                <td>{o?.phone}</td>
                                <td>
                                    {(o.price && !o.paid) && <Link to={`dashboard/payment/${o._id}`}><button className="btn btn-xs btn-success">Pay</button></Link>}
                                    {(o.price && o.paid) && <span className="btn btn-xs btn-success">Paid</span>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;