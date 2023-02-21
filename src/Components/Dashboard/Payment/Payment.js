import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Home/Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51MdxSLH0J1PIrROHyPEIAT4kqjT5yTIdurwKRMIkelMaUTtvIaQFLliuQakAJ7RMG0b4nhu3QQMfpEoTM3L6UlHh00Un9TZiPY');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appoinment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card w-50 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className="text-success font-bold">Hello, {appoinment.patientName}</p>
                            <h2 className="card-title">Pay for {appoinment.treatment}</h2>
                            <p className="">Your appoinment <span
                                className="text-orange-500">{appoinment.date}</span> at <span
                                    className="text-orange-500">{appoinment.slot}</span></p>
                            <p className="">Please pay: ${appoinment.price}</p>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;