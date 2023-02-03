import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import ReviewCards from './ReviewCards/ReviewCards';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Windson herry',
            img: people1,
            location: 'Chittagong'
        },
        {
            _id: 2,
            name: 'Windson herry',
            img: people2,
            location: 'Chittagong'
        },
        {
            _id: 3,
            name: 'Windson herry',
            img: people3,
            location: 'Chittagong'
        }
    ]
    return (
        <section className='mt-10'>
            <div className="flex justify-between">
                <div>
                    <h4 className='text-primary font-bold'>Testimonials</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className="w-24 lg:w-48" src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <ReviewCards key={review._id} review={review}></ReviewCards>)}
            </div>
        </section>
    );
};

export default Testimonials;