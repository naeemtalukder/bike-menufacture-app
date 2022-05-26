import React from 'react';
import Summary from './Summary';

const ProductSummery = () => {
    return (
        <div class="hero min-h-screen bg-secondary">

            <div class="hero-content  flex-col lg:flex-row-reverse">
                <div>
                    <h1 class="text-3xl text-center uppercase text-accent font-bold my-2">Million Business trust BD</h1>
                    <h1 class="text-xl uppercase text-center pb-16 font-bold">Try to understand user expectation</h1>
                    <Summary></Summary>
                    <div class="card my-3 bg-base-100 lg:card-side shadow-xl">
                        <div class="card-body">
                            <h3 className='text-xl text-primary font-bold'>Have any question about us or get a products request. </h3>
                            <p className='text-xl'>Don't hesitate to contact us.</p>
                        </div>
                        <div className="flex pt-10">
                            <button className='btn uppercase btn-primary text-white'>Request Quote</button>
                            <button className='btn uppercase btn-accent mx-2'>Contact us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSummery;