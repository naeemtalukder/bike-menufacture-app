import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Successfully Made an Admin`)
            })
    }
    return (
        <tr>
            <th></th>
            <td> {user?.email}</td>
            <td>{role !== 'admin' && <button
                onClick={makeAdmin}
                className="btn btn-xs btn-success">Make Admin</button>}</td>
            <td><button className="btn btn-xs btn-error">Remove user</button></td>
        </tr>
    );
};

export default UserRow;