import React from 'react';

const InfoCards = ({ img, cardTitle, bgClass }) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl px-8 ${bgClass}`}>
                <figure className="mt-4 lg:mt-0"><img src={img} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCards;