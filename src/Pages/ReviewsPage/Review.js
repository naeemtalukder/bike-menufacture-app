import React from 'react';

const Review = ({ review }) => {
    const { name, reviews, ratting } = review;
    return (
        <div className="card lg:max-w-lg shadow-xl bg-slate-100">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p >Ratting: {ratting}</p>
                <p>{reviews}</p>
            </div>
        </div>
    );
};

export default Review;