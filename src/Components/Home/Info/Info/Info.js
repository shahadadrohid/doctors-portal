import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container px-12">
            <InfoCards bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></InfoCards>
            <InfoCards bgClass='bg-accent' cardTitle='Our location' img={marker}></InfoCards>
            <InfoCards bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us' img={phone}></InfoCards>
        </div>
    );
};

export default Info;