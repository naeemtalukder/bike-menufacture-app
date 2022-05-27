import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <div className="card w-96 min-h-screen bg-base-100 shadow-xl">
            <div className="card-body hero-content text-center  bg-secondary">
                <h3 className='text-center text-xl text-accent'>Your Profile</h3>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>
                <h2 className="card-title">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <p>{user?.phoneNumber}</p>
            </div>
        </div>

    );
};

export default MyProfile;