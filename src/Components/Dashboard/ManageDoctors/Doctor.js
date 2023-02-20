import React from 'react';
import { toast } from 'react-toastify';

const Doctor = ({ doctor, index, refetch }) => {
    const { img, name, speciality, email } = doctor;

    const handleDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`Doctor: ${name} is Deleted`)
                    refetch()
                }
            })
    }

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
            <td><button onClick={() => handleDelete(email)} className="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default Doctor;