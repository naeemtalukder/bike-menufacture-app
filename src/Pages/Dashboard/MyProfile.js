import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (

        <div class="card w-96 min-h-screen bg-base-100 shadow-xl">
            <div class="card-body hero-content text-center  bg-secondary">
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user?.photoURL} alt="" />
                    </div>
                </div>
                <h2 class="card-title">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <p>{user?.phoneNumber}</p>
            </div>
        </div>

    );
};

export default MyProfile;