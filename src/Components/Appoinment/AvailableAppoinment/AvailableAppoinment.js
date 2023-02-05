import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import BookingModal from '../Booking/BookingModal';

const AvailableAppoinment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treament, setTreament] = useState([])
    // console.log(services)

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className="text-xl text-center text-secondary">Available appoinment: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services?.map(service => <Booking key={services._id} service={service} setTreament={setTreament}></Booking>)
                }
            </div>
            {treament && <BookingModal key={treament._id} date={date} treament={treament} setTreament={setTreament}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;