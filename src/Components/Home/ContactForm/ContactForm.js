import React from 'react';
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className="mt-10 p-10">
            <h4 className='text-primary text-center font-bold text-xl mb-2'>Contact Us</h4>
            <h1 className="text-4xl text-white text-center mb-10">Stay connected with us</h1>
            <div className="flex justify-center">
                <form className="form-control">
                    <input type="text" placeholder="Email Address" className="input input-bordered lg:w-96 mb-4" />
                    <input type="text" placeholder="Subject" className="input input-bordered lg:w-96 mb-4" />
                    <textarea placeholder="Your message" className="textarea textarea-bordered textarea-lg lg:w-96 h-40 mb-2" ></textarea>
                    <PrimaryButton className="">Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;