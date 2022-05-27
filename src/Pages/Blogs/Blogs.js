import React from 'react';

const Blogs = () => {
    return (
        <div className='my-28'>
            <h2 className="text-center text-accent my-10 text-xl font-bold uppercase">This is Blogs</h2>
            <div className='grid mx-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='px-5 py-5 lg:max-w-lg shadow-xl bg-secondary'>
                    <h2 className='text-black text-xl fint-bold'> How will you improve the performance of a React Application?</h2>
                    <p>
                        Improve the performance React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components. <br />

                        1. Code-splitting in React using dynamic import.
                        2. Memoizing React components to prevent unnecessary re-renders.
                        3. Keeping component state local where necessary.
                        4.  Lazy loading images in React.
                        5.  Windowing or list virtualization in React.
                    </p>
                </div>
                <div className='px-5 py-5 lg:max-w-lg shadow-xl bg-secondary'>
                    <h2 className='text-black text-xl fint-bold'>Why should write unit tests?</h2>
                    <p>
                        What is unit testing?
                        Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.                    </p>
                    <h2 className='text-black text-xl fint-bold'>What is a unit test? </h2>
                    <p>
                        The main objective of unit testing is to ensure that each individual part is working well and as it's supposed to work. The entire system will only be able to work well if the individual parts are working well. Unit testing is performed by the software developers themselves.
                    </p>

                </div>

                <div className='px-5 py-5 lg:max-w-lg shadow-xl bg-secondary'>
                    <h2 className='text-black text-xl fint-bold'> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                    <p>
                        useState is simply a state updating function. Const is used here because the change of value is being managed somewhere else by React. You're telling React to manage some value for you by calling useState                        1. Using LocalStorage with Redux Store.
                        Why is state needed in React?
                        State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application. In React, all the code we write is defined inside a component
                    </p>
                </div>
                <div className='px-5 py-5 lg:max-w-lg shadow-xl bg-secondary'>
                    <h2 className='text-black text-xl fint-bold'>What are the different ways to manage a state in a React application?</h2>
                    <p>
                        5 Methods to Persisting State Between Page Reloads in React. Learn different ways of persisting React state between page reloads. <br />
                        1. Using LocalStorage with Redux Store.
                        2. Using LocalStorage — Functional Components.
                        3. Using LocalStorage — Class Components.
                        4. Using Redux Persist.
                        5. Using URL Params.
                    </p>
                </div>
                <div className='px-5 py-5 lg:max-w-lg shadow-xl bg-secondary'>
                    <h2 className='text-black text-xl fint-bold'>How does prototypical inheritance work?</h2>
                    <p>
                        Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes. This model can also be known as prototypal, prototype-oriented, classless, or instance-based programming.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;