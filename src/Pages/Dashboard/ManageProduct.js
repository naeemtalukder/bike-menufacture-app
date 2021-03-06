import React from 'react';
import useProducts from '../../Hoock/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are You Sure');
        if (proceed) {
            const url = `https://evening-temple-41024.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining);
                })
        }
    }
    return (
        <>
            <div className="overflow-x-auto w-full">
                <h1 className='text-2xl text-center text-accent mb-5'>Manage Product {products.length}</h1>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((p, index) => <tr key={p._id}>

                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={p.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {p.name}
                                </td>
                                <td>{p.quantity}</td>
                                <td>{p.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDeleteProduct(p._id)}
                                        className='btn btn-error text-white'>Delete</button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div >

        </>
    );
};

export default ManageProduct;