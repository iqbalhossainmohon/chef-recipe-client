// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
// import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        // <div className='flex items-center justify-between mx-24 mt-2'>
        //     <NavLink to={'/'}>
        //     <h2 className='font-bold text-3xl text-yellow-400'>Foodies</h2>
        //     </NavLink>
        //     <div className='flex items-center gap-3'>
        //         <NavLink
        //             to="/"
        //             className={({ isActive, isPending }) =>
        //                 isPending ? "pending" : isActive ? "active" : ""
        //             }
        //         >
        //             Home
        //         </NavLink>
        //         <NavLink
        //             to="/blog"
        //             className={({ isActive, isPending }) =>
        //                 isPending ? "pending" : isActive ? "active" : ""
        //             }
        //         >
        //             Blog
        //         </NavLink>
        //         <NavLink
        //             to="/recipe"
        //             className={({ isActive, isPending }) =>
        //                 isPending ? "pending" : isActive ? "active" : ""
        //             }
        //         >
        //             Recipe
        //         </NavLink>
        //         <button className='bg-yellow-400 px-6 py-2 rounded-md hover:bg-yellow-500'>Login</button>
        //     </div>
        // </div>
        
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        <Link
          to='/'
          aria-label='Foodies'
          title='Foodies'
          className='inline-flex items-center'
        >
         
          <h2 className='ml-2 text-3xl font-bold tracking-wide  '>
          Foodies
          </h2>
        </Link>
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li className='hover:text-blue-300 font-medium'>
            <NavLink
              to='/'
              aria-label='Home'
              title='Home'
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li className='hover:text-blue-300 font-medium'>
            <NavLink
              to='/blog'
              aria-label='Blog'
              title='Blog'
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
            >
              Blog
            </NavLink>
          </li>
          <li className='hover:text-blue-300 font-medium'>
          <NavLink
              to='/recipe'
              aria-label='Recipe'
              title='Recipe'
              className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
            >
              Recipe
            </NavLink>
          </li>
        </ul>

        <Link to='/login'><button className='bg-yellow-400 w-24 h-12 rounded-md text-white font-bold hover:bg-yellow-500'>Login</button></Link>

        {/* Mobile Responsive */}
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute z-10 top-0 left-0 w-full'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      to='/'
                      aria-label='Foodies'
                      title='Foodies'
                      className='inline-flex items-center'
                    >
                      <h2 className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                      Foodies
                      </h2>
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link
                        to='/'
                        aria-label='Home'
                        title='Home'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        aria-label='Blog'
                        title='Blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                    <Link
                        to='/recipe'
                        aria-label='Recipe'
                        title='Recipe'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                      >
                        Recipe
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    );
};

export default Header;