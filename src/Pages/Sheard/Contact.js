import React from 'react';
import contact from '../../images/bike-bg.jpg';
const Contact = () => {
    return (
        <div>
            <div style={{
                background: `url(${contact})`
            }} className='bg-primary px-10 py-14 '>
                <div className='text-center pb-14 text-white'>
                    <h1 className='text-4xl font-bold'>Contact Us</h1>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type='text'
                        placeholder='Type Your Name'
                        className='input w-full max-w-md'
                    />
                    <input
                        type='text'
                        placeholder='Your Email Address'
                        className='input w-full max-w-md'
                    />

                    <textarea
                        className='textarea w-full max-w-md'
                        placeholder='Type your message'
                        rows={6}
                    ></textarea>
                    <button className="btn bg-accent text-bold text-white uppercase">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;