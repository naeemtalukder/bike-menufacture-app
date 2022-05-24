import React from 'react';
import Product from './Product';

const Products = () => {
    const products = [{
        "_id": 1,
        "name": "Individual Therapy",
        "price": 330,
        "quantity": 130,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Individual-Therapy.svg",
        "description": "We offer a wide range of approaches such as Cognitive Behavioural Therapy (CBT), Psychodynamic therapy, Eye movement desensitisation reprocessing (EMDR) and many other evidenced based techniques to suit whatever difficulty you are facing."
    },
    {
        "_id": 2,
        "name": "Couples Therapy",
        "price": 250,
        "quantity": 170,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Couples-Therapy.svg",
        "description": "Relationship Therapy is a form of therapy, which can be either highly structured or less structured, that helps couples to explore their relationship, assess strong and weak areas, address specific problems that they are facing together, and work towards a healthier relationship."
    },
    {
        "_id": 3,
        "name": "Psychiatry",
        "price": 300,
        "quantity": 230,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Psychiatry.svg",
        "description": "If you’ve been struggling with signs of more complex mental illness, one of leading Psychiatrists can provide you with the answers along with an effective treatment plan for a range of complex psychological conditions that require medical intervention."
    },
    {
        "_id": 4,
        "name": "Individual Therapy",
        "price": 330,
        "quantity": 130,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Individual-Therapy.svg",
        "description": "We offer a wide range of approaches such as Cognitive Behavioural Therapy (CBT), Psychodynamic therapy, Eye movement desensitisation reprocessing (EMDR) and many other evidenced based techniques to suit whatever difficulty you are facing."
    },
    {
        "_id": 5,
        "name": "Couples Therapy",
        "price": 250,
        "quantity": 170,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Couples-Therapy.svg",
        "description": "Relationship Therapy is a form of therapy, which can be either highly structured or less structured, that helps couples to explore their relationship, assess strong and weak areas, address specific problems that they are facing together, and work towards a healthier relationship."
    },
    {
        "_id": 6,
        "name": "Psychiatry",
        "price": 300,
        "quantity": 230,
        "img": "https://theprivatetherapyclinic.co.uk/wp-content/uploads/2021/06/Psychiatry.svg",
        "description": "If you’ve been struggling with signs of more complex mental illness, one of leading Psychiatrists can provide you with the answers along with an effective treatment plan for a range of complex psychological conditions that require medical intervention."
    }]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-accent  text-xl font-bold uppercase'>Our Product</h3>
                <h2 className='text-4xl'>Products We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;