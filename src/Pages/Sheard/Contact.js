import React from 'react';
import contact from '../../images/bike-bg.jpg';
const Contact = () => {
    return (
        <div>
            <div style={{
                background: `url(${contact})`
            }} className='bg-primary px-10 py-14 '>
                <div className='text-center pb-14 text-white'>
                    <h1 className='text-4xl text-primary font-bold'>Contact Us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Your Email Address'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Phone Number'
                        className='input w-full max-w-md'
                    />
                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Requirement Details'
                        rows={4}
                    ></textarea>
                    <button className="btn bg-accent hover:bg-primary text-bold text-white  px-20 uppercase">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;