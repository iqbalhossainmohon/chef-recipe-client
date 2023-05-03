// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='my-16'>
            <h1 className='text-center font-bold text-3xl text-white my-6'>Please Login</h1>

            <form >
                <div className='text-center'>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs my-2" required />
                    <br />

                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required/>
                    <br />

                    <button className='btn btn-warning my-2 w-full max-w-xs' type="submit">
                        Login
                    </button>
                    <br />

                    <span>
                        Dont Have an Account? <span className='text-warning'><Link to='/register'>Register</Link></span>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Login;