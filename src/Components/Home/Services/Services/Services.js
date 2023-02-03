import React from 'react';
import Service from '../Service/Service';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import cavity from '../../../../assets/images/cavity.png';
import servicedetails from '../../../../assets/images/treatment.png';
import ServiceWithButton from '../ServiceWithButton/ServiceWithButton';

const Services = () => {
    const service = [
        {
            _id: 1,
            title: 'Fluoride Treatment',
            img: fluoride,
            description: ""
        },
        {
            _id: 2,
            title: 'Cavity Filling',
            img: cavity,
            description: ""
        },
        {
            _id: 3,
            title: 'Teeth Whitening',
            img: whitening,
            description: ""
        },
    ]
    return (
        <div className="my-20">
            <div className="text-center">
                <h4 className='uppercase font-bold text-xl text-primary'>Out Services</h4>
                <h2 className='text-2xl'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    service.map(service =>
                        <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div>
                <ServiceWithButton servicedetails={servicedetails}></ServiceWithButton>
            </div>
        </div>
    );
};

export default Services;