import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://evening-temple-41024.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {

                    toast.success(`Successfully Made an Admin`)
                }
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