// eslint-disable-next-line no-unused-vars
import React from 'react';

const Home = () => {
    return (
        <>
            <div
                className="bg-cover bg-center h-96 w-full"
                style={{
                    backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661335281435-1d72ba446e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                }}
            >
                <div className='ml-24 pt-6'>
                    <h1 className='font-extrabold text-5xl text-black'>We Care <span className='text-yellow-400'>About
                        <br />
                        Taste</span> Of Food</h1>
                    <p className='text-white my-8'>You might have eaten Meethi Seviyan, Doodh Wali Seviyan and even Vegetable Vermicelli Pulao, <br /> but have you ever tasted this remix of semiya with South Indian tadka? Semiya Upma is a delicious <br /> dish that can be served for breakfast, lunch and even dinner. It can be prepared in less than 30 minutes <br /> and is a wholesome meal in itself. You just need vermicelli, a handful of veggies and some spices to <br /> make this upma dish. Be it summers or winters, this Semiya Upma can be prepared anytime.</p>
                    
                </div>
            </div>
            
</>
    );
};

export default Home;