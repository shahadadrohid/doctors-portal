import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className="text-xl text-center text-secondary">Available appoinment: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services.map(service => <Booking key={services._id} service={service}></Booking>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;