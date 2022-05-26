import React from 'react';
import useProducts from '../../Hoock/useProducts';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const [products] = useProducts();

    return (
        <div className='my-28'>
            <div className='text-center py-5'>
                <h3 className='text-accent  text-xl font-bold uppercase'>Our Product</h3>
                <h2 className='text-4xl'>Products We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <AllProduct
                        key={product._id}
                        product={product}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;