import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const ServiceWithButton = ({ servicedetails }) => {
    return (
        <div className="hero min-h-screen mt-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={servicedetails} className="max-w-md rounded-lg shadow-2xl" />
                <div className='ml-20'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServiceWithButton;