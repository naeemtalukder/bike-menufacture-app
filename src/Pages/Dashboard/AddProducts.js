import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from 'react-router-dom';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/products";
    const onSubmit = data => {
        console.log(data);
        const url = `https://evening-temple-41024.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                navigate(from, { replace: true });
            })
    }
    return (
        <div className="hero min-h-screen bg-">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-2xl font-bold my-3">Add Products!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="">
                        <input className="input input-bordered w-full max-w-xs" placeholder='Name' {...register("name", { required: true, maxLength: 30 })} />
                        <input className="input input-bordered w-full my-2 max-w-xs" placeholder='Price' {...register("price")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Quantity' {...register("quantity")} />
                        <textarea className="input input-bordered my-2 w-full max-w-xs" placeholder='Description' {...register("description", { required: true, maxLength: 200 })} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Photo' {...register("img")} />
                        <input className="btn btn-accent w-full my-2 max-w-xs" type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;