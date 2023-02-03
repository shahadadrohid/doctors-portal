import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary mt-4">{children}</button>
    );
};

export default PrimaryButton;