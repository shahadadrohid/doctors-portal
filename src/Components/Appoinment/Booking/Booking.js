import React from 'react';

const Booking = ({ service, setTreament }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <div className="text-center">
                    <p>{
                        slots.length > 0 ?
                            <span>{slots[0]}</span>
                            :
                            <span className="text-red-500">No slots available. <p>Try another day</p></span>
                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                </div>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreament(service)} disabled={slots.length === 0} className="btn btn-secondary text-white " for="booking-modal">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Booking;