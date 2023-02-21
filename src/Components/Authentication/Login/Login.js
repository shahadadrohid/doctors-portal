import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Home/Shared/Loading/Loading';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className="text-red-500">{error?.message || gError?.message}</p>
    }
    const onSubmit = data => {
        // console.log(data.email)
        signInWithEmailAndPassword(data.email, data.password);
    }
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-4xl font-bold text-accent text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Input email field with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Address is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        {/* Input password field with validation */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password" placeholder="Password" className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    midLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'midLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {signInError}
                        <p className="text-red-500 mb-2 cursor-pointer">Forgot Password?</p>
                        <input
                            className="btn btn-accent w-full text-white" type="submit" value="login" />

                    </form>
                    <p>New to Doctors portal? <Link className="text-secondary" to='/signup'>Create new account</Link> </p>
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