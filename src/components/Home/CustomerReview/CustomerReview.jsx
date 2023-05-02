// eslint-disable-next-line no-unused-vars
import React from 'react';

const CustomerReview = () => {
    return (
        <div className='md:flex justify-center gap-3 my-8 mx-24'>
            <div className='border-2 border-yellow-500 rounded-md p-4'>
                <img className='h-1/2 w-1/2 mx-auto rounded-full p-2' src={'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Jessy Roi</h2>
                <hr />
                <p className='text-white my-8'>Hello, thank you so much for leaving such a lovely review! It was our absolute pleasure to assist you in bringing your custom design to life.</p>
            </div>

            <div className='border-2 border-yellow-500 rounded-md p-4'>
                <img className='h-1/2 w-1/2 mx-auto rounded-full p-2' src={'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Kazi Fahim</h2>
                <hr />
                <p className='text-white my-8'>Hello, thank you so much for leaving such a lovely review! It was our absolute pleasure to assist you in bringing your custom design to life.</p>
            </div>

            <div className='border-2 border-yellow-500 rounded-md p-4'>
                <img className='h-1/2 w-1/2 mx-auto  rounded-full p-2' src={'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Tini Maroi</h2>
                <hr />
                <p className='text-white my-8'>Hello, thank you so much for leaving such a lovely review! It was our absolute pleasure to assist you in bringing your custom design to life.</p>
            </div>
        </div>
    );
};

export default CustomerReview;