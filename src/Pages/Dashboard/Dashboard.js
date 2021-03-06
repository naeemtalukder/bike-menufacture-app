import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hoock/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-2xl font-bold m-5 text-center text-accent'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu sm:text-white lg:text-white p-4 overflow-y-auto w-70 bg-accent text-base-content">
                    <li><NavLink to="/dashboard">My Profile</NavLink></li>
                    {
                        !admin && <> <li><NavLink to="/dashboard/myOrder">My Orders</NavLink></li>
                            <li><NavLink to="/dashboard/addReview">Add Review</NavLink></li>
                        </>
                    }
                    {admin && <> <li><NavLink to="/dashboard/makeAdmin">Make Admin</NavLink></li>
                        <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                        <li><NavLink to="/dashboard/manageProduct">Manage Product</NavLink></li>
                        <li><NavLink to="/dashboard/manageAllOrders">Manage All Orders</NavLink></li> </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;