import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treament, date, setTreament }) => {
    console.log(date)
    const { _id, name, slots } = treament;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot)
        setTreament(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5' action="">
                        <input disabled readOnly value={format(date, 'PP')} type="text" className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" className="select select-secondary w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="number" name="number" placeholder="Phone number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label for="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;