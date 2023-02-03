import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;