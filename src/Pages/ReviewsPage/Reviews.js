import React, { useState, useEffect } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center my-4'>
                <h3 className='text-accent my-4 text-4xl font-bold uppercase'>Featured Reviews</h3>
                <h2 className='text-2xl mb-5'>Thoughts of Our Well-Wishers</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;