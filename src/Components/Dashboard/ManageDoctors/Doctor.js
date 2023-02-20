import React from 'react';

const Doctor = ({ doctor, index }) => {
    const { img, name, speciality } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{img}</td>
            <td>{name}</td>
            <td>{speciality}</td>
        </tr>
    );
};

export default Doctor;