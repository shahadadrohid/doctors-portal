import React from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt='Dentist chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;