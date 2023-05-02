// eslint-disable-next-line no-unused-vars
import React from 'react';

const PopularFood = () => {
    return (
        <div className='md:flex justify-center gap-3 my-8'>
             <div className='border-2 border-sky-500 rounded-md'>
                <img className='rounded' src={'https://c.ndtvimg.com/2021-08/tcu9e5gg_paneer-tikka_120x90_03_August_21.jpg'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Paneer Tikka Toast</h2>

             </div>

             <div className='border-2 border-sky-500 rounded-md'>
                <img className='rounded' src={'https://c.ndtvimg.com/2022-06/p2m0qh8o_payyoli-chicken-fry_120x90_22_June_22.jpeg'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Payyoli Chicken Fry</h2>
             </div>

             <div className='border-2 border-sky-500 rounded-md'>
                <img className='rounded' src={'https://c.ndtvimg.com/2020-02/5i0mm91_methi-muthia_120x90_20_February_20.jpg'} alt="" />
                <h2 className='font-bold text-center my-2 text-white'>Palak Vada</h2>
             </div>
        </div>
    );
};

export default PopularFood;