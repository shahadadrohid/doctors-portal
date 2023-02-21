import React from 'react';

const Doctor = ({ doctor, index, setDeleteDoctor }) => {
    const { img, name, speciality, email } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt="" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={()=> setDeleteDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                {/* <button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button> */}
                </td>
        </tr>
    );
};

export default Doctor;