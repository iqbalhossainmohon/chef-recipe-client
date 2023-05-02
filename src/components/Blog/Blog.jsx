// eslint-disable-next-line no-unused-vars
import React from 'react';

const Blog = () => {
    return (
        <div className='px-24 py-8'>
            <h1 className='font-bold text-white'><span className='text-red-500'>Q: 1.</span> Tell us the differences between uncontrolled and controlled components.</h1>
            <p className='text-white'><span className='font-bold text-green-500'>Ans:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
<br />
            <h1 className='font-bold text-white'><span className='text-red-500'>Q: 2.</span> How to validate React props using PropTypes.</h1>
            <p className='text-white'><span className='font-bold text-green-500'>Ans:</span> React PropTypes validators
                <ul className='px-12'>
                    <li>1. any : The prop can be of any data type.</li>
                    <li>2. bool : The prop should be a Boolean.</li>
                    <li>3. number : The prop should be a number..</li>
                    <li>4. string : The prop should be a string.</li>
                    <li>5. func : The prop should be a function.</li>
                    <li>6. array : The prop should be an array.</li>
                    <li>7. object : The prop should be an object.</li>
                </ul>
            </p>
<br />
            <h1 className='font-bold text-white'><span className='text-red-500'>Q: 3.</span> Tell us the difference between nodejs and express js.</h1>
            <p className='text-white'><span className='font-bold text-green-500'>Ans:</span> Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as A platform built on Chromes JavaScript runtime for easily building fast, scalable network applications.</p>
<br />
            <h1 className='font-bold text-white'><span className='text-red-500'>Q: 4.</span> What is a custom hook, and why will you create a custom hook?</h1>
            <p className='text-white'><span className='font-bold text-green-500'>Ans:</span> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>
    );
};

export default Blog;