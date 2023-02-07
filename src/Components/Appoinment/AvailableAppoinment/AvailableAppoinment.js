import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Home/Shared/Loading/Loading';
import Booking from '../Booking/Booking';
import BookingModal from '../Booking/BookingModal';

const AvailableAppoinment = ({ date }) => {
    const [treament, setTreament] = useState([])
    // console.log(services)

    const formattedDate = format(date, 'PP')

    const { data: services, refetch, isLoading } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className="text-xl text-center text-secondary">Available appoinment: {format(date, 'PP')}</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                    services?.map(service => <Booking key={services._id} service={service} setTreament={setTreament}></Booking>)
                }
            </div>
            {treament && <BookingModal key={treament._id} date={date} treament={treament} setTreament={setTreament} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;