import React from 'react';
import { useForm } from "react-hook-form";


const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/review`;
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
        <div class="hero min-h-screen">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="text-2xl font-bold my-3">Please Add Review!</h1>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="">
                        <input className="input input-bordered w-full max-w-xs" placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                        <textarea className="input input-bordered my-2 w-full max-w-xs" placeholder='Reviews' {...register("reviews")} />
                        <input className="input input-bordered w-full max-w-xs" placeholder='Ratting' {...register("ratting")} />
                        <input className="btn btn-accent w-full my-2 max-w-xs" type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddReview;