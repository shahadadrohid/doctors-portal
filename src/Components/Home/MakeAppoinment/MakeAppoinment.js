import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appoinment from '../../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={{
            background: `url(${appoinment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white sm:p-10'>
                <h3 className='text-xl text-primary mb-4 font-bold'>Appoinment</h3>
                <h2 className='text-3xl mb-4'>Make an appoinment Today</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quis totam, voluptatem cupiditate minus atque neque culpa consequuntur libero ducimus qui similique, eveniet iusto. Delectus sapiente omnis officia veniam nulla.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;