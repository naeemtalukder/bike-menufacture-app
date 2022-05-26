import React from 'react';


const Protfolio = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Name: Md. Naeem Talukder</h1>
                    <p className="">Email: naeemtalukder169135@gmail.com</p>
                    <div className='py-6'><h1 className='text-xl'>Education: Honurs <small>(Running)</small></h1>
                        <h1 className='text-xl'>Depatment: Philosophy</h1>
                        <h1 className='text-xl'>College: Govt. Titumir College </h1>
                    </div>
                    <div className='py-6'>
                        <h3 className='text-2xl py-2'>List Of Technology</h3>
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5'>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Bootstarp</li>
                            <li>Tailwind</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>Wardpress</li>
                            <li>Netlipy</li>
                            <li>Firebase</li>
                            <li>GitHub</li>
                            <li>Heroku</li>
                            <li>DaisyUI</li>
                        </div>

                    </div>
                    <div className='py-6'>
                        <h3 className="text-2xl">My website link</h3>
                        <p>https://ornate-melba-b6d4fe.netlify.app</p>
                        <p> https://doctor-azaz-ahmed.web.app</p>
                        <p> https://genuine-fenglisu-84ac5e.netlify.app
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Protfolio;