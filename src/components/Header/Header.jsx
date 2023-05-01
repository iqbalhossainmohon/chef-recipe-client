// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between mx-24 mt-2'>
            <NavLink to={'/'}>
            <h2 className='font-bold text-3xl text-yellow-400'>Foodies</h2>
            </NavLink>
            <div className='flex items-center gap-3'>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/recipe"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                    }
                >
                    Recipe
                </NavLink>
                <button className='bg-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-500'>Login</button>
            </div>
        </div>
    );
};

export default Header;