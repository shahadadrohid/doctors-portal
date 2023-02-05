import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className="text-xl text-center text-secondary">Available appoinment: {format(date, 'PP')}</p>
            <div>
                {
                    services.map(service => <Booking key={services._id} service={service}></Booking>)
                }
            </div>
        </div>
    );
};

export default AvailableAppoinment;