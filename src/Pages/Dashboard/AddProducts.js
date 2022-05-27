import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/product`;
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