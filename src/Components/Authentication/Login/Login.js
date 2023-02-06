import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firbase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user)
    }
    if (error) {
        console.log(error)
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-primary text-center">Login</h2>
                    <button className="btn btn-accent text-white">LOGIN</button>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-accent">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;