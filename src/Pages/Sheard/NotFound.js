import React from 'react';
import not from '../../images/not.png';

const NotFound = () => {
    return (

        <div className='px-4 py-7 mx-auto max-w-7xl'>
            <div className='grid items-center w-full grid-cols-1 gap-7 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-15'>
                <div>
                    <p className='mb-2 text-xs font-semibold tracking-wide text-accent uppercase'>
                        Error 404
                    </p>
                    <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-800 md:text-4xl'>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src={not}
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default NotFound;