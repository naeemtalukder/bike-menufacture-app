import React from 'react';
import useReviews from '../../Hoock/useReviews';
import Review from './Review';

const Reviews = () => {
    const [reviews] = useReviews();

    return (
        <div className='my-28'>
            <div className='text-center my-4'>
                <h3 className='text-accent  text-xl font-bold uppercase'>Featured Reviews</h3>
                <h2 className='text-4xl'>Thoughts of Our Well-Wishers</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;