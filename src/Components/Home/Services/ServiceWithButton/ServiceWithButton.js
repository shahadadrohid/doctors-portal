import React from 'react';

const ServiceWithButton = ({ servicedetails }) => {
    return (
        <div class="hero min-h-screen mt-16">
            <div class="hero-content flex-col lg:flex-row">
                <img src={servicedetails} class="max-w-md rounded-lg shadow-2xl" />
                <div className='ml-20'>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceWithButton;