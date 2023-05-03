// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Register = () => {

    // eslint-disable-next-line no-unused-vars
    const handleRegister =(event)=>{
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from .email.value;
        const password = from.password.value;
        const photo = from.photo.value;

        console.log(name, email, password, photo);

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-white my-6'>Please Register</h1>

            <form onSubmit={handleRegister}>
                <div className='text-center my-8'>
                    <input type="text" name='name' placeholder="Youre name " className="input input-bordered w-full max-w-xs my-2" required />
                    <br />

                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs my-2" required />
                    <br />

                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                    <br />

                    <input type="file" name='photo' placeholder="Photo URL" className="input input-bordered w-full max-w-xs my-2 pt-2" required />
                    <br />

                    <button className='btn btn-warning my-2 w-full max-w-xs' type="submit">
                        Register
                    </button>
                    <br />

                    <span>
                    Already Have an Account? <span className='text-warning'><Link to='/login'>Login</Link></span>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default Register;