import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            "_id": 1,
            "name": "Hamidur Rahman",
            "reviews": "Got this for an older gentleman who only has a flip phone. He's had no problems with it and it's very easy intuitive to use.",
            "ratting": "5 out of 5"
        },
        {
            "_id": 2,
            "name": "Karim Khan",
            "reviews": "Previously had a chromebook so with this awesome deal I was excited and bought 2 of these for my kids. Both kept saying no internet connection. ",
            "ratting": "4.5 out of 5"
        },
        {
            "_id": 3,
            "name": "Kalam Gazi",
            "reviews": "Got this for an older gentleman who only has a flip phone. He's had no problems with it and it's very easy intuitive to use.",
            "ratting": "4.5 out of 5"
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center my-4'>
                <h3 className='text-accent  text-xl font-bold uppercase'>Featured Reviews</h3>
                <h2 className='text-4xl'>Thoughts of Our Well-Wishers</h2>
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