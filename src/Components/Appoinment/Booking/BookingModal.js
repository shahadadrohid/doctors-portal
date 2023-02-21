import React from 'react';
import { format } from 'date-fns';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const BookingModal = ({ treament, date, setTreament, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(date)
    const { _id, name, slots, price } = treament;
    const formattedDate = format(date, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name, slot)
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            phoneNumber: event.target.number.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success(`Appoinment book for ${booking.treatment} at ${booking.date} Time: ${booking.slot}`);
                }
                else {
                    toast.error(`You already book for ${data.booking.treatment} at ${data.booking.date} Time: ${data.booking.slot}`)
                }
                refetch()
                setTreament(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5' action="">
                        <input disabled readOnly value={format(date, 'PP')} type="text" className="input input-bordered input-secondary w-full max-w-xs" />
                        <select name="slot" className="select select-secondary w-full max-w-xs">
                            {
                                slots?.map((slot, index) => <option key={index}
                                    value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" disabled value={user?.displayName || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address" disabled value={user?.email || ''} className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="number" name="number" placeholder="Phone number" className="input input-bordered input-secondary w-full max-w-xs" />
                        <input type="Submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                    {/* <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Yay!</label>
                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default BookingModal;