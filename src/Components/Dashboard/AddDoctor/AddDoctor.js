import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddDoctor = () => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [signOut, signOutLoading, signOutError] = useSignOut(auth);

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    if (isLoading || signOutLoading) {
        return <Loading></Loading>
    }
    const imageApi = `4a076b70e626f9e2cad904fa956dd889`;

    const onSubmit = async data => {
        const img = data.image[0];
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageApi}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result.success)
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: img
                    }
                    console.log(doctor)

                    //Send data to database
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => {
                            if (res.status === 403) {
                                toast.error('You can not add doctor')
                                navigate('/login')
                                signOut()
                            }
                            return res.json()
                        })
                        .then(inserted => {
                            console.log(inserted)
                            if (inserted.insertedId) {
                                toast.success('Successfully added doctor')
                                reset();
                            }
                            else {
                                toast.error('Unsuccesfull')
                            }
                        })
                }
            })

    }
    return (
        <div className="">
            <p>This is a doctor route</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* input text field with validation */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>

                    <input
                        type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

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
                        <span className="label-text">Speciality</span>
                    </label>

                    <select {...register("speciality")} className="select input-bordered w-full max-w-xs" name="" id="" >
                        {services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)}
                    </select>

                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>

                    <input
                        type="file" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                {/* {signInError} */}
                <input
                    className="btn btn-accent w-full max-w-xs text-white" type="submit" value="Add Doctor" />

            </form >
        </div >
    );
};

export default AddDoctor;