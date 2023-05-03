// eslint-disable-next-line no-unused-vars
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

const auth = getAuth(app);

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');

    const handleLogin = (event) =>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');

        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <div className='my-16'>
            <h1 className='text-center font-bold text-3xl text-white my-6'>Please Login</h1>

            <form onSubmit={handleLogin}>
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